"use client"

import React from 'react'
import { Input } from '../ui/input';
import { Search, PlayCircle, StopCircle, Sparkles } from 'lucide-react';

const WorkflowSidebar = () => {

  const availableNodes = [
    {
      icon: Sparkles,
      name: 'AI Decision Node',
      description: 'This node uses AI to make decisions based on the input data.',
    },
    {
      icon: PlayCircle,
      name: 'Start Node',
      description: 'This is the starting point of the workflow.',
    },
    {
      icon: StopCircle,
      name: 'End Node',
      description: 'This is the ending point of the workflow.',
    },
  ]

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  return (
    <aside className="w-75 h-full bg-gray-100 border-r border-gray-300 ">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <Search />
          <Input placeholder="Search nodes..." onChange={handleSearchChange} />
        </div>
        <div>
          <h4 className="mt-4 mb-2 text-sm font-semibold text-gray-700">Available Nodes</h4>
          {
            availableNodes.map((node, index) => {
              const Icon = node.icon
              return (
                <div key={index} className="flex items-center p-2 mb-2 bg-white rounded shadow cursor-pointer hover:bg-gray-200">
                  <Icon/>
                  <div className="ml-2">
                    <p className="text-sm font-medium text-gray-800">{node.name}</p>
                    <p className="text-xs text-gray-600">{node.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </aside>
  )
}

export default WorkflowSidebar