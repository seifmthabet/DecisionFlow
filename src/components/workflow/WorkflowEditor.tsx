import React from "react";
import WorkflowSidebar from "@/components/workflow/WorkflowSidebar";
import WorkflowCanvas from "./WorkflowCanvas";
import NodeInspector from "./NodeInspector";

const WorkflowEditor = () => {
  return (
    <div className="flex h-screen">
      <WorkflowSidebar />
      <main className="w-min-0 flex-1">
        <WorkflowCanvas />
      </main>
        <NodeInspector/>
    </div>
  );
};

export default WorkflowEditor;
