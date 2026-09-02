"use client";

import {
  addEdge,
  Background,
  Connection,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import React, { useCallback } from "react";


const initialNodes = [
  { id: "1", position: { x: 100, y: 100 }, data: { label: "Node 1" } },
  { id: "2", position: { x: 100, y: 300 }, data: { label: "Node 2" } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const WorkflowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((edg) => addEdge(params, edg)),
    [setEdges],
  );

  return (
    <div className="w-full h-full bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        className="w-full h-full bg-gray-50"
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default WorkflowCanvas;
