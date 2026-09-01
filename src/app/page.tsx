import { Header } from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export default function Home() {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar />

        <div className="flex-1">
          <Header title="Decision Flow" status="Not Saved" />
        </div>
      </SidebarProvider>
    </div>
  );
}
