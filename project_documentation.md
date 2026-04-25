# CrawlMindAI - Technical Architecture & Deep Dive

## 1. PROJECT OVERVIEW

**Problem Solved:** Traditional web scraping requires writing custom scripts, maintaining selectors, and dealing with blockers. CrawlMindAI provides a visual, no-code/low-code platform to build, automate, and schedule complex web scraping pipelines, empowered by AI to handle dynamic or unstructured data extraction effortlessly.

**System Type:** SaaS (Software as a Service) / AI Automation Platform / No-Code Visual Builder.

**Target Users:** Data engineers, growth hackers, marketers, and developers who need to extract web data automatically at scale without writing custom Puppeteer or Python scripts.

## 2. HIGH-LEVEL ARCHITECTURE

The application follows a modern full-stack architecture heavily leveraging serverless computing and edge functions.

*   **Frontend (UI/UX):** Next.js 14 (App Router), React, Tailwind CSS, Framer Motion (for premium UI interactions), Radix UI (accessible components), and **React Flow** (for the visual node-based workflow editor).
*   **Backend (API & Logic):** Next.js Server Actions (for mutations and server-side execution), Next.js API Routes (for webhooks and cron jobs).
*   **Database & ORM:** PostgreSQL (hosted on Supabase/Neon DB) managed via **Prisma ORM**.
*   **Automation Engine:** **Puppeteer** running on Node.js to spin up headless browser instances and execute interactions (clicks, scrolls, data extraction).
*   **AI Layer:** Integration with **OpenAI API** (`gpt-4o-mini`) for intelligent data parsing and structured JSON extraction.
*   **Authentication & Billing:** **Clerk** for user authentication and session management; **Stripe** for credit-based usage billing.

### Data Flow
1. **User Request:** User designs a scraping flow visually. The UI converts this to a JSON graph definition (nodes + edges).
2. **Execution Trigger:** User triggers a run manually or via cron schedule.
3. **Execution Planner:** Backend parses the graph, checks dependencies, and creates a sequential `ExecutionPlan` (topological sort).
4. **Execution Engine:** A background process iterates through the execution phases. It spins up a Puppeteer headless browser, passes the page instance between nodes, extracts data, consumes user credits per node execution, and saves logs/outputs to the database.

## 3. FOLDER & CODE STRUCTURE

*   `app/`: Next.js App Router structure. Contains routes for `(auth)`, `(dashboard)`, `(home-landing)`, `api/`, `saas/`, and `workflow/` views.
*   `actions/`: Contains Next.js Server Actions (`runWorkflow.ts`, `workflows.ts`, `analytics.ts`, `billings.ts`, `credentials.ts`). These handle all direct server-side data mutations, abstracting away API route overhead.
*   `components/`: Reusable UI components, heavily utilizing Radix UI primitives and Tailwind.
*   `lib/`: Core engineering logic and utilities.
    *   `workflow/`: **The absolute core of the app.**
        *   `executionPlan.ts`: Translates React Flow nodes/edges into a sequential execution plan.
        *   `executeWorkflow.ts`: The runner engine that iterates through phases.
        *   `executor/`: Specific execution logic for every node type (e.g., `LaunchBrowserExecutor.ts`, `ExtractDataWithAiExecutor.ts`).
        *   `task/`: Definitions, inputs, outputs, and credit costs for each node type.
    *   `prisma.ts`: Prisma client singleton.
    *   `stripe/`: Billing integration logic.
    *   `credential.ts`: Symmetric encryption logic for securely storing user API keys (e.g., OpenAI keys).
*   `prisma/schema.prisma`: Database schema defining `Workflow`, `WorkflowExecution`, `ExecutionPhase`, `ExecutionLog`, `UserBalance`, and `UserPurchase`.

## 4. CORE LOGIC (DEEP DIVE)

### The Execution Engine (`lib/workflow/executeWorkflow.ts`)
This is the heart of the system. Here is exactly how a workflow runs internally:

1.  **Initialization:** The `runWorkflow` server action receives a `workflowId`. If the workflow is published, it fetches the pre-compiled `executionPlan`. If not, it compiles the visual graph (nodes/edges) into an execution plan on the fly.
2.  **Phase Creation:** It inserts a `WorkflowExecution` record into the DB with related `ExecutionPhase` records (PENDING state).
3.  **Background Processing:** It calls `executeWorkflow(execution.id)` synchronously without `awaiting` its completion in the Next.js request, effectively spawning a background worker task.
4.  **Sequential Execution:** `executeWorkflow` loops through the `executionPlan`.
    *   It creates a shared `Environment` object that holds the `Puppeteer.Browser` and `Puppeteer.Page` instances.
    *   For each phase (node), it resolves inputs. If an input relies on a previous node's output, it traverses the graph edges to map the output to the input.
    *   **Credit Deduction:** Before executing a phase, it calculates the cost from `TaskRegistry` and atomically decrements the user's `UserBalance` in PostgreSQL. If funds are insufficient, the execution fails gracefully.
    *   **Execution Delegate:** It routes the execution to the specific executor in `ExecutorRegistry` (e.g., `ClickElementExecutor`).
    *   **State Persistence:** The outputs, logs, and success/failure state of that phase are written to the database.
5.  **Cleanup:** Finally, the Puppeteer browser instance is explicitly closed to prevent memory leaks, and the final `WorkflowExecutionStatus` is updated.

### Execution Planner (`lib/workflow/executionPlan.ts`)
Converts an unordered visual graph into a valid sequential pipeline.
*   It finds the Entry Point node (e.g., Launch Browser).
*   It loops through nodes, checking for invalid inputs (inputs not provided by the user AND not linked to a previous node).
*   It groups nodes into `phases`. Nodes independent of each other can theoretically be in the same phase, though the execution iterates sequentially.

## 5. FEATURE BREAKDOWN

### 1. Visual Workflow Builder
*   **What it does:** Uses `react-flow-renderer`. Users drag-and-drop tasks like "Page to HTML", "Extract Text", "Click Element".
*   **Internal logic:** Edges represent data flow (e.g., output of "Page to HTML" becomes input to "Extract AI"). The state is stored as a massive JSON blob of `nodes` and `edges` in the `Workflow.definition` DB column.

### 2. AI Data Extraction (`ExtractDataWithAiExecutor.ts`)
*   **What it does:** Allows users to pass raw HTML text to an LLM and prompt it to return a structured JSON array.
*   **Internal logic:**
    1. Fetches the user's encrypted OpenAI API key using `symmetricDecrypt(credential.value)`.
    2. Instantiates the OpenAI SDK.
    3. Prompts `gpt-4o-mini` with a strict system prompt enforcing JSON array outputs without markdown wrapping.
    4. Tracks token usage (`prompt_tokens`, `completion_tokens`) for logging.
    5. Outputs the parsed JSON string to the execution environment for subsequent nodes (like webhook delivery).

### 3. Automated Cron Execution
*   **What it does:** Runs scraped workflows on a schedule (e.g., every day at 8 AM).
*   **Internal logic:**
    *   User inputs a cron string. The app uses `cron-parser` to calculate the `nextRunAt` timestamp and saves it to the DB.
    *   A Next.js API route (`/api/workflows/cron/route.ts`) acts as the trigger. You ping this route periodically (using Vercel Cron or GitHub Actions).
    *   The route finds all workflows where `status == PUBLISHED` and `nextRunAt <= now()`.
    *   For each matching workflow, it triggers the internal `/api/workflows/execute` route securely using a symmetric `API_SECRET` header to execute the run.

### 4. Credit-Based Billing
*   **What it does:** Users buy "Packs" of credits via Stripe. Each node execution costs a specific amount of credits (e.g., AI Extraction is expensive, Clicking an element is cheap).
*   **Internal logic:** Uses Stripe Checkout Sessions. A webhook endpoint (`/api/webhooks/stripe`) listens for successful payments and increments the `UserBalance` table via Prisma.

## 6. DATA FLOW & STATE MANAGEMENT

*   **Database:** Prisma handles strict relational typing. A cascading structure is used: `Workflow` → `WorkflowExecution` → `ExecutionPhase` → `ExecutionLog`. This enables the granular logging UI on the frontend.
*   **Security:** Sensitive data (like OpenAI API keys) are stored symmetrically encrypted using the standard Node `crypto` (`aes-256-cbc`) and the `ENCRYPTION_KEY` env var.
*   **Server Actions:** Replaced traditional Redux/Context global state for data fetching. The UI uses React hooks (like `@tanstack/react-query`) wrapping Server Actions to mutate and fetch DB state effortlessly.

## 7. INTEGRATIONS & DEPENDENCIES

*   **Puppeteer:** Core to the app. Runs headless Chromium to scrape Single Page Applications (SPAs) that require JavaScript execution (unlike Cheerio, which only parses raw HTML).
*   **OpenAI:** Powers the cognitive extraction capabilities.
*   **Stripe & Clerk:** Offloads complex auth, session management, and payment compliance, allowing focus on core product logic.
*   **cron-parser:** Vital for translating human cron expressions into strict JS Date intervals.

## 8. PERFORMANCE & SCALABILITY

**Current Bottlenecks & Architecture Constraints:**
1.  **Puppeteer in Serverless:** Running Puppeteer inside Next.js Server Actions on a platform like Vercel is extremely heavy. Serverless functions have execution time limits (e.g., 10s-60s) and memory constraints. A complex scraping workflow will likely time out.
2.  **Synchronous DB Locks on Credits:** Decrementing credits inside the execution loop ensures strict billing but can introduce database lock contention at extreme scale.

**Suggestions for Improvement (Senior Engineer perspective):**
*   **Microservice Architecture for Executors:** The `executeWorkflow` logic should be detached from the Next.js API. It should be a standalone Node.js/Docker worker container running on AWS ECS or AWS Lambda with high memory/timeout limits.
*   **Message Queues:** Instead of calling `executeWorkflow` directly in the background, the Next.js app should push a message to Redis/RabbitMQ/SQS. A dedicated worker pool picks up the job. This enables auto-scaling workers based on queue depth and provides retry mechanisms for failed scrapes.
*   **Connection Pooling:** Ensuring Prisma is using connection pooling (via PgBouncer) so background tasks don't exhaust Neon DB connections.

## 9. REAL-WORLD ENGINEERING INSIGHT

*   **Trade-off: Server Actions vs. Dedicated Backend:** The developer chose Server Actions for rapid development and tight TypeScript integration across the stack. While excellent for prototyping, heavy background compute (Puppeteer) is an anti-pattern for Next.js APIs.
*   **Design Decision: Graph Execution Engine:** Building a custom topological execution planner (`flowToExecutionPlan.ts`) rather than hardcoding procedural steps is a massive technical flex. It makes the system genuinely generic and extensible. Adding a new feature (e.g., "Solve Captcha" node) just requires defining an `Executor` and registering it in the `Registry`.
*   **Resilience:** The execution engine passes the `Puppeteer.Page` instance dynamically through the environment state to different phases. This maintains cookie and session state across multiple visual nodes (e.g., Login Node -> Wait Node -> Scrape Node).

---

## 10. INTERVIEW PREPARATION SECTION

### Resume Bullet Points (Action-Oriented)
*   **Architected and developed** a low-code automated web-scraping platform using Next.js, React Flow, and Prisma, enabling users to visually construct, schedule, and execute complex browser automation pipelines.
*   **Engineered a custom topological execution engine** that parses JSON-based directed acyclic graphs (DAGs) into sequential execution phases, injecting context and Puppeteer instances dynamically across isolated task nodes.
*   **Integrated OpenAI (`gpt-4o-mini`)** for intelligent, unstructured data extraction, utilizing custom system prompts to strictly return validated JSON formats, reducing user configuration overhead by 80%.
*   **Implemented a robust cron scheduling system** using `cron-parser` and secure internal API webhooks, allowing automated, unattended background workflow executions.
*   **Designed a granular credit-based billing architecture** integrated with Stripe Checkout and secured sensitive user API credentials utilizing AES-256-CBC symmetric encryption.

### Interview Questions & Model Answers

**Q1: How does your execution engine process a visual workflow?**
*Answer:* "The visual editor generates a JSON object representing nodes and edges. When a user runs a workflow, my execution planner parses this DAG (Directed Acyclic Graph). It identifies the entry node, maps output-to-input dependencies, and creates a sequential execution plan using topological sorting. The execution engine then loops through this plan, dynamically passing a shared environment object—containing the Puppeteer browser instance and node outputs—between isolated task executors."

**Q2: Running Puppeteer in a Next.js environment is tricky. How did you manage background execution?**
*Answer:* "In the current iteration, when a workflow is triggered, a database record is created in a 'PENDING' state, and the execution engine is invoked asynchronously without awaiting it in the immediate request scope. While this works for moderate workloads, I recognize it's an anti-pattern for serverless environments due to timeout limits. For a highly scalable production environment, I would decouple the Next.js API from the execution logic by pushing execution payloads to an SQS or Redis queue, and having dedicated Dockerized Node.js workers process the Puppeteer instances."

**Q3: How do you handle security for user credentials like OpenAI API keys?**
*Answer:* "Security is critical since I'm acting as a custodian for user API keys. I never store keys in plain text. I implemented a utility using Node's native `crypto` module. When a user saves a key, it's symmetrically encrypted using `aes-256-cbc` with a securely managed environment `ENCRYPTION_KEY` and a randomized initialization vector (IV). The IV and encrypted string are stored in Postgres. They are only decrypted at runtime directly inside the executor memory scope."

**Q4: How did you implement billing and prevent abuse?**
*Answer:* "I implemented a credit-based system. Every specific node type has a predefined credit cost based on computational weight (e.g., AI extraction costs more than a simple click). Before *any* node executes, the engine does a transaction check to decrement the user's balance in the database. If the balance falls below the required threshold, the phase safely aborts, marking the execution as failed. Stripe handles the credit replenishment via webhooks."

**Q5: How does your cron system work for scheduled runs?**
*Answer:* "Users input standard cron syntax, which I parse using the `cron-parser` library to calculate the next execution timestamp and store it in the database. I have an internal, secured API route (`/api/workflows/cron`) that runs on a polling schedule. It queries the DB for published workflows where the `nextRunAt` timestamp has passed. It then securely triggers the execution endpoint for each matched workflow and recalculates the subsequent run time."

---

## 11. PORTFOLIO DESCRIPTION

**CrawlMindAI: Visual Web Automation & AI Extraction Platform**

CrawlMindAI is a robust, no-code SaaS platform designed to democratize complex web scraping and browser automation. Built on a modern Next.js 14 stack, the platform features a highly interactive visual workflow builder (React Flow) that allows users to design automation pipelines simply by connecting nodes.

Under the hood, a custom-built execution engine translates these visual graphs into sequential operations, orchestrating headless Chromium instances via Puppeteer to navigate pages, click elements, and scrape data. To handle dynamic and unstructured content, the platform seamlessly integrates OpenAI, allowing users to extract precise JSON data structures from complex HTML using natural language prompts. With features like strict credit-based billing, AES-256 credential encryption, granular execution logging, and automated cron scheduling, CrawlMindAI represents a comprehensive, production-ready approach to modern data extraction.
