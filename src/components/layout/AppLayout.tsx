import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { AppTopbar } from "./AppTopbar";
import { useI18n } from "@/i18n/I18nProvider";

export function AppLayout() {
  const { dir } = useI18n();
  // `side` is set explicitly so the sidebar flips for RTL.
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background" dir={dir}>
        <AppSidebar />
        <div className="flex flex-1 flex-col min-w-0">
          <AppTopbar />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 animate-fade-in">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
