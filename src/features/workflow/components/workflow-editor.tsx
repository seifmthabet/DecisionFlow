import React from "react";
import WorkflowSidebar from "./workflow-sidebar";
import WorkflowCanvas from "./workflow-canvas";
import NodeInspector from "./node-inspector";

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
