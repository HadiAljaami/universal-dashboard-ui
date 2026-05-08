import { DollarSign, Users as UsersIcon, ShoppingBag, TrendingUp, UserPlus, FileText, Receipt, MessageSquare, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { StatusBadge } from "@/components/common/StatusBadge";
import { useI18n } from "@/i18n/I18nProvider";
import { recentActivity, recentOrders, revenueByMonth, trafficSources } from "@/data/sampleData";
import type { TranslationKey } from "@/i18n/translations";

export default function DashboardPage() {
  const { t, locale, dir } = useI18n();

  const chartData = revenueByMonth.map((d) => ({ ...d, label: t(d.m as TranslationKey) }));
  const fmt = new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US");

  const quickActions = [
    { icon: UserPlus, label: t("addUser"), variant: "primary" as const },
    { icon: FileText, label: t("createReport"), variant: "info" as const },
    { icon: Receipt, label: t("newInvoice"), variant: "success" as const },
    { icon: MessageSquare, label: t("sendMessage"), variant: "warning" as const },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title={`${t("welcomeBack")}, Sarah 👋`} subtitle={t("overviewSubtitle")} />

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label={t("totalRevenue")} value={`$${fmt.format(284392)}`} delta={12.5} hint={t("vsLastMonth")} icon={DollarSign} variant="primary" />
        <StatCard label={t("totalUsers")} value={fmt.format(8245)} delta={8.2} hint={t("vsLastMonth")} icon={UsersIcon} variant="info" />
        <StatCard label={t("totalOrders")} value={fmt.format(1429)} delta={-3.4} hint={t("vsLastMonth")} icon={ShoppingBag} variant="warning" />
        <StatCard label={t("growthRate")} value="24.8%" delta={4.1} hint={t("vsLastMonth")} icon={TrendingUp} variant="success" />
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 shadow-card border-border/60">
          <CardHeader>
            <CardTitle>{t("revenueOverview")}</CardTitle>
            <CardDescription>{t("revenueOverviewDesc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 5, right: 8, left: 8, bottom: 0 }}>
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="label" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} reversed={dir === "rtl"} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} orientation={dir === "rtl" ? "right" : "left"} />
                  <Tooltip
                    contentStyle={{ background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2.5} fill="url(#rev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-border/60">
          <CardHeader>
            <CardTitle>{t("trafficSources")}</CardTitle>
            <CardDescription>{t("trafficSourcesDesc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[220px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={trafficSources} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={3} strokeWidth={0}>
                    {trafficSources.map((s) => <Cell key={s.name} fill={s.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 space-y-2">
              {trafficSources.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                    <span className="text-muted-foreground">{s.name}</span>
                  </div>
                  <span className="font-medium">{fmt.format(s.value)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity + Quick actions */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="shadow-card border-border/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Activity className="h-4 w-4 text-primary" />{t("recentActivity")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((a) => (
              <div key={a.id} className="flex items-start gap-3 rounded-lg p-2 transition-smooth hover:bg-muted/50">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card border-border/60">
          <CardHeader>
            <CardTitle>{t("quickActions")}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            {quickActions.map((q) => (
              <button
                key={q.label}
                className="group flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card p-4 text-center transition-smooth hover:border-primary/40 hover:shadow-card"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg gradient-${q.variant} text-white`}>
                  <q.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">{q.label}</span>
              </button>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card border-border/60 lg:col-span-1">
          <CardHeader>
            <CardTitle>{t("recentOrders")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentOrders.slice(0, 5).map((o) => (
              <div key={o.id} className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{o.customer}</p>
                  <p className="text-xs text-muted-foreground">{o.id}</p>
                </div>
                <div className="text-end">
                  <p className="text-sm font-semibold">${fmt.format(o.amount)}</p>
                  <StatusBadge status={o.status} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Table preview */}
      <Card className="shadow-card border-border/60">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{t("recentOrders")}</CardTitle>
            <CardDescription>{t("overviewSubtitle")}</CardDescription>
          </div>
          <Button variant="outline" size="sm">{t("viewAll")}</Button>
        </CardHeader>
        <CardContent className="px-0 sm:px-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>{t("name")}</TableHead>
                  <TableHead>{t("date")}</TableHead>
                  <TableHead>{t("amount")}</TableHead>
                  <TableHead>{t("status")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((o) => (
                  <TableRow key={o.id}>
                    <TableCell className="font-mono text-xs">{o.id}</TableCell>
                    <TableCell className="font-medium">{o.customer}</TableCell>
                    <TableCell className="text-muted-foreground">{o.date}</TableCell>
                    <TableCell>${fmt.format(o.amount)}</TableCell>
                    <TableCell><StatusBadge status={o.status} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
