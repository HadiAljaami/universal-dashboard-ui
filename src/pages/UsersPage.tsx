import DataTablePage from "./DataTablePage";
import { useI18n } from "@/i18n/I18nProvider";

export default function UsersPage() {
  const { t } = useI18n();
  return <DataTablePage title={t("users")} subtitle={t("overviewSubtitle")} />;
}
