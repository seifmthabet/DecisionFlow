"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Activity,
  History,
  LayoutGrid,
  Plus,
  UserRound,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

//TODO: Add a type for navigation items, links
const navigationItems = [
  {
    label: "Overview",
    description: "Workspace snapshot",
    icon: LayoutGrid,
    isActive: true,
    badge: "Live",
  },
  {
    label: "Workflow Editor",
    description: "Build and refine logic",
    icon: Workflow,
  },
  {
    label: "Execution History",
    description: "Review runs and outcomes",
    icon: History,
    badge: "12",
  },
];

export const AppSidebar = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const isMobile = useIsMobile();
  const isCompact = isCollapsed || isMobile;

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={isCompact ? "items-center p-2" : "gap-3"}>
        {isCompact ? (
          <Link href="/">
            <div className="flex size-8 items-center justify-center rounded-md border border-sidebar-border bg-primary text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              DF
            </div>
          </Link>
        ) : (
          <Link href="/" className="flex items-center justify-center gap-3 m-0 p-0 " >
            <Image
              src="/logos/logo.png"
              alt="Decision Flow Logo"
              width={150}
              height={150}
            />
          </Link>
        )}
      </SidebarHeader>

      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupAction
            aria-label="Create new flow"
            title="Create new flow"
          >
            <Plus />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      variant={item.isActive ? "outline" : "default"}
                      className="h-10 px-3"
                      aria-current={item.isActive ? "page" : undefined}
                    >
                      <Icon />
                      <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                        <span className="truncate">{item.label}</span>
                      </span>
                    </SidebarMenuButton>

                    {item.badge ? (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    ) : null}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!isCompact ? (
          <>
            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Workspace status</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="grid gap-2 px-2">
                  <div className="rounded-md border border-sidebar-border bg-white px-3 py-2">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-sidebar-foreground/60">
                      <Activity className="size-3.5 text-primary" />
                      Active runs
                    </div>
                    <p className="mt-1 font-display text-lg font-semibold text-sidebar-foreground">
                      03
                    </p>
                    <p className="text-xs text-sidebar-foreground/60">
                      One flow is currently executing.
                    </p>
                  </div>

                  <div className="rounded-md border border-sidebar-border bg-white px-3 py-2">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-sidebar-foreground/60">
                      <History className="size-3.5 text-primary" />
                      Last sync
                    </div>
                    <p className="mt-1 font-display text-lg font-semibold text-sidebar-foreground">
                      2m
                    </p>
                    <p className="text-xs text-sidebar-foreground/60">
                      Updated from the latest execution log.
                    </p>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        ) : null}
      </SidebarContent>

      {!isCompact ? (
        <SidebarFooter className="gap-0 border-t border-sidebar-border">
          <div className="rounded-lg border border-sidebar-border bg-white/80 p-3">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full border border-sidebar-border bg-sidebar-accent text-sm font-semibold text-sidebar-foreground">
                <UserRound className="size-4" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-sidebar-foreground">
                  Saif
                </p>
                <p className="truncate text-xs text-sidebar-foreground/60">
                  Workspace owner
                </p>
              </div>
            </div>
          </div>
        </SidebarFooter>
      ) : null}
      <SidebarRail />
    </Sidebar>
  );
};
