import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { useI18n } from "@/i18n/I18nProvider";
import { revenueByMonth } from "@/data/sampleData";
import { Target, MousePointerClick, Timer, TrendingDown } from "lucide-react";
import type { TranslationKey } from "@/i18n/translations";

export default function ReportsPage() {
  const { t, dir } = useI18n();
  const data = revenueByMonth.map((d) => ({ ...d, label: t(d.m as TranslationKey) }));

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("reportsTitle")}
        subtitle={t("reportsSubtitle")}
        breadcrumbs={[{ label: t("dashboard"), href: "/" }, { label: t("reports") }]}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label={t("conversion")} value="3.84%" delta={2.1} hint={t("vsLastMonth")} icon={Target} variant="primary" />
        <StatCard label={t("sessions")} value="48,210" delta={12.4} hint={t("vsLastMonth")} icon={MousePointerClick} variant="info" />
        <StatCard label={t("bounceRate")} value="42.1%" delta={-1.8} hint={t("vsLastMonth")} icon={TrendingDown} variant="warning" />
        <StatCard label={t("avgDuration")} value="3m 24s" delta={5.6} hint={t("vsLastMonth")} icon={Timer} variant="success" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-card border-border/60">
          <CardHeader>
            <CardTitle>{t("totalOrders")}</CardTitle>
            <CardDescription>{t("revenueOverviewDesc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="label" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} reversed={dir === "rtl"} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} orientation={dir === "rtl" ? "right" : "left"} />
                  <Tooltip contentStyle={{ background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="orders" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-border/60">
          <CardHeader>
            <CardTitle>{t("totalRevenue")}</CardTitle>
            <CardDescription>{t("revenueOverviewDesc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="label" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} reversed={dir === "rtl"} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} orientation={dir === "rtl" ? "right" : "left"} />
                  <Tooltip contentStyle={{ background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: "hsl(var(--primary))", r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
