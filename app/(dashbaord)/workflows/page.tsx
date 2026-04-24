import { Suspense } from "react";
import UserWorkflowSkeleton from "./_components/UserWorkflowSkeleton";
import UserWorkflows from "./_components/UserWorkflows";
import CreateWorkflowDialog from "./_components/CreateWorkflowDialog";

function page() {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
            Workflows
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">Build and manage your AI scraping workflows</p>
        </div>
        <CreateWorkflowDialog />
      </div>
      <div className="h-full py-6">
        <Suspense fallback={<UserWorkflowSkeleton />}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
