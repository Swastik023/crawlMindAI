import { getWorkflowsForUser } from "@/actions/workflows";
import React from "react";

import { AlertCircle, InboxIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CreateWorkflowDialog from "./CreateWorkflowDialog";
import WorkflowCard from "./WorkflowCard";

async function UserWorkflows() {
  const workflows = await getWorkflowsForUser();
  if (!workflows) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again later
        </AlertDescription>
      </Alert>
    );
  }
  if (workflows.length === 0) {
    return (
      <div className="flex flex-col gap-4 h-full items-center py-16">
        <div className="rounded-2xl bg-primary/10 w-20 h-20 flex items-center justify-center ring-1 ring-primary/20 shadow-lg shadow-primary/5">
          <InboxIcon size={36} className="stroke-primary" />
        </div>
        <div className="flex flex-col gap-2 text-center max-w-xs">
          <p className="font-bold text-lg">No workflows yet</p>
          <p className="text-sm text-muted-foreground">
            Create your first AI-powered scraping workflow to get started.
          </p>
        </div>
        <CreateWorkflowDialog triggeredText="Create your first workflow" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4">
      {workflows.map((workflow) => (
        <WorkflowCard workflow={workflow} key={workflow.id} />
      ))}
    </div>
  );
}

export default UserWorkflows;
