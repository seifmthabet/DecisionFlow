'use client'

import React, { useCallback } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge
} from "@xyflow/react";
import "@xyflow/react/dist/style.css"

const initialNodes = [
        { id: '1', position: { x: 100, y: 100 }, data: { label: 'Node 1' } },
        { id: '2', position: { x: 100, y: 300 }, data: { label: 'Node 2' } },
    ]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export const Flow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection) => setEdges((edg) => addEdge(params, edg)),
        [setEdges]
    )

    return (
        <div className="w-[1000px] h-[500px]" >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Controls />
                <MiniMap />
                <Background gap={12} size={1} />
            </ReactFlow >
        </div>
    );
};