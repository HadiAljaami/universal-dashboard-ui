import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Table2, FileText, BarChart3, Settings, LogIn, Sparkles } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useI18n } from "@/i18n/I18nProvider";
import type { TranslationKey } from "@/i18n/translations";

type NavItem = { titleKey: TranslationKey; url: string; icon: React.ComponentType<{ className?: string }> };

const mainItems: NavItem[] = [
  { titleKey: "dashboard", url: "/", icon: LayoutDashboard },
  { titleKey: "users", url: "/users", icon: Users },
  { titleKey: "dataTable", url: "/data-table", icon: Table2 },
  { titleKey: "forms", url: "/forms", icon: FileText },
  { titleKey: "reports", url: "/reports", icon: BarChart3 },
];

const systemItems: NavItem[] = [
  { titleKey: "settings", url: "/settings", icon: Settings },
  { titleKey: "login", url: "/login", icon: LogIn },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();
  const { t, dir } = useI18n();

  const isActive = (path: string) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  const renderItem = (item: NavItem) => (
    <SidebarMenuItem key={item.url}>
      <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={t(item.titleKey)}>
        <NavLink to={item.url} end={item.url === "/"} className="flex items-center gap-3">
          <item.icon className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && <span className="truncate">{t(item.titleKey)}</span>}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar side={dir === "rtl" ? "right" : "left"} collapsible="icon" className="border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg gradient-primary shadow-glow">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-sidebar-foreground">{t("appName")}</span>
              <span className="text-[11px] text-muted-foreground">{t("appTagline")}</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-1">
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>{t("dashboard")}</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>{mainItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>{t("settings")}</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>{systemItems.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
