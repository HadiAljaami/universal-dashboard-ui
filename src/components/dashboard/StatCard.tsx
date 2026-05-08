import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight, LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  delta?: number;
  hint?: string;
  icon: LucideIcon;
  variant?: "primary" | "success" | "warning" | "info";
}

const variantClasses: Record<NonNullable<StatCardProps["variant"]>, string> = {
  primary: "gradient-primary",
  success: "gradient-success",
  warning: "gradient-warning",
  info: "gradient-info",
};

export function StatCard({ label, value, delta, hint, icon: Icon, variant = "primary" }: StatCardProps) {
  const positive = (delta ?? 0) >= 0;
  return (
    <Card className="overflow-hidden border-border/60 shadow-card transition-smooth hover:shadow-elevated">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-medium text-muted-foreground truncate">{label}</p>
            <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{value}</p>
            {typeof delta === "number" && (
              <div className="mt-2 flex items-center gap-1.5 text-xs">
                <span
                  className={cn(
                    "inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-semibold",
                    positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                  )}
                >
                  {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {Math.abs(delta)}%
                </span>
                {hint && <span className="text-muted-foreground">{hint}</span>}
              </div>
            )}
          </div>
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-glow",
              variantClasses[variant]
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
