import { Header } from "@/components/layout/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import WorkflowEditor from "@/components/workflow/WorkflowEditor";

export default function Home() {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar />

        <div className="flex-1">
          <Header title="Decision Flow" status="Not Saved" />

          <WorkflowEditor />
        </div>
      </SidebarProvider>
    </div>
  );
}
