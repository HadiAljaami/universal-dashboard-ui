import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const NotFound = () => {
  const { t, dir } = useI18n();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6" dir={dir}>
      <div className="text-center space-y-6 animate-fade-in">
        <p className="text-[120px] sm:text-[180px] font-bold leading-none bg-clip-text text-transparent gradient-primary">
          404
        </p>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">{t("pageNotFound")}</h1>
          <p className="text-muted-foreground max-w-md mx-auto">{t("pageNotFoundDesc")}</p>
        </div>
        <Button asChild className="gradient-primary text-primary-foreground border-0 shadow-glow">
          <Link to="/"><Home className="me-2 h-4 w-4" />{t("goHome")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
