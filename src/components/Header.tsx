"use client";

import { Circle, PlayIcon, Save, SettingsIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

function SidebarToggleButton() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="size-9 rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      <span className="flex items-center justify-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="size-4"
        >
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Button>
  );
}

export const Header = ({
  title,
  status,
}: {
  title: string;
  status: string;
}) => {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <SidebarToggleButton />

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="truncate font-display text-headline-md text-foreground">
                {title}
              </h1>
              <span className="text-muted-foreground/70">/</span>
              <span className="text-label-caps uppercase text-muted-foreground">
                FlowAI
              </span>
            </div>

            <div className="mt-1 flex items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[12px] font-medium",
                  "border-border bg-muted text-muted-foreground",
                )}
              >
                <Circle className="size-2 fill-emerald-500 text-emerald-500" />
                {status}
              </span>
              <span className="hidden text-body-sm text-muted-foreground sm:inline">
                High-density workflow editor
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-xl border border-border bg-card p-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] sm:flex">
            <Button variant="outline" size="sm" className="gap-1.5">
              <Save className="size-4" />
              Save
            </Button>
            <Button size="sm" className="gap-1.5">
              <PlayIcon className="size-4" />
              Run
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5">
              Export
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon-sm"
            className="border border-border bg-card text-muted-foreground shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:text-foreground"
            aria-label="Settings"
          >
            <SettingsIcon className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
