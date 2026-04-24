import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from "lucide-react";

export const routes = [
  {
    href: "/home",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "/credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "/billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

export const MONTH_NAME = [
  "Janauary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const typeWriterWords = [
  {
    text: "Build",
  },
  {
    text: "AI-Powered",
    className: "text-primary dark:text-primary",
  },
  {
    text: "Data",
    className: "text-primary dark:text-primary",
  },
  {
    text: "Extraction",
  },
  {
    text: "Workflows.",
  },
];

export const howItWorks = [
  {
    title: "Design Your Pipeline",
    description:
      "Create intelligent extraction pipelines visually using our node-based workflow builder. No coding required.",
  },
  {
    title: "Extract with Precision",
    description:
      "Pull structured data from any web page using AI-powered extraction and advanced browser automation.",
  },
  {
    title: "Automate & Schedule",
    description:
      "Schedule workflows, monitor executions in real-time, and optimize for maximum efficiency.",
  },
  {
    title: "Deliver Anywhere",
    description:
      "Send your extracted data directly to APIs, webhooks, or your preferred storage destination.",
  },
];

export const headerRoutes = [
  {
    title: "How it works",
    href: "#howItWorks",
    className: "",
  },
  {
    title: "Scraping Features",
    href: "#scrapingFeatures",
    className: "",
  },
  {
    title: "Pricing",
    href: "#pricing",
    className: "",
  },
  {
    title: "Get Started",
    href: "/sign-in",
    className: "",
    button: true,
  },
];

export const pricingPlans = [
  {
    title: "Small Pack",
    description: "Get 1,000 credits",
    credits: 1000,
    price: 9.99,
    link: "/billing",
  },
  {
    title: "Medium Pack",
    description: "Get 5,000 credits",
    credits: 5000,
    price: 39.99,
    highlighted: true,
    link: "/billing",
  },
  {
    title: "Large Pack",
    description: "Get 10,000 credits",
    credits: 10000,
    price: 69.99,
    link: "/billing",
  },
];
