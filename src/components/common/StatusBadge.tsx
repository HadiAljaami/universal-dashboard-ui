import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

type StatusValue = "active" | "inactive" | "pending" | "completed" | "cancelled";

const styles: Record<StatusValue, string> = {
  active: "bg-success/10 text-success hover:bg-success/15 border-success/20",
  completed: "bg-success/10 text-success hover:bg-success/15 border-success/20",
  pending: "bg-warning/10 text-warning hover:bg-warning/15 border-warning/20",
  inactive: "bg-muted text-muted-foreground hover:bg-muted border-border",
  cancelled: "bg-destructive/10 text-destructive hover:bg-destructive/15 border-destructive/20",
};

export function StatusBadge({ status }: { status: StatusValue }) {
  const { t } = useI18n();
  return (
    <Badge variant="outline" className={cn("capitalize font-medium", styles[status])}>
      <span className="me-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {t(status)}
    </Badge>
  );
}
