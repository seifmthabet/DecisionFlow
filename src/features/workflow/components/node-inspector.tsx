"use client"

import { SlidersHorizontal, X } from 'lucide-react';
import React from 'react'
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Combobox,ComboboxInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList } from '@/components/ui/combobox';

const NodeInspector = () => {
  const models = [
    "gpt",
    "groq"
  ] as const

  return (
    <div className="w-64 border-l border-gray-200 flex flex-col bg-white">
      <div className="flex items-center justify-between mb-4 bg-secondary p-2">
        <div className="flex items-center justify-between gap-2" >
          <SlidersHorizontal 
            size={20}
            className="text-primary"
          />
          <h2 className="text-lg font-semibold" >Inspector</h2>
        </div>
        <div>
          <Button
            variant="ghost"
          >
            <X />
          </Button>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="mb-4 flex flex-col gap-2"> 
          <Label className="text-sm font-medium text-gray-700" >Node Name</Label>
          <Input className="bg-gray-100" />
        </div>
        <div className="mb-4 flex flex-col gap-2"> 
          <Label className="text-sm font-medium text-gray-700" >Prompt</Label>
          <Textarea className="bg-gray-100" rows={4} />
        </div>
        <div className="mb-4 flex flex-col gap-2"> 
          <Label className="text-sm font-medium text-gray-700" >Model</Label>
          <Combobox items={models} >
            <ComboboxInput placeholder="Select a model" />
            <ComboboxContent>
              <ComboboxEmpty>No models found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </div>
    </div>
  )
}

export default NodeInspector