import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function LoginPage() {
  const { t, dir } = useI18n();
  const navigate = useNavigate();
  const Arrow = dir === "rtl" ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 sm:p-6" dir={dir}>
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        <div className="text-center space-y-3">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-glow">
            <Sparkles className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{t("signInTitle")}</h1>
          <p className="text-sm text-muted-foreground">{t("signInSubtitle")}</p>
        </div>

        <Card className="shadow-elevated border-border/60">
          <CardContent className="p-6">
            <form
              onSubmit={(e) => { e.preventDefault(); navigate("/"); }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="li-email">{t("email")}</Label>
                <Input id="li-email" type="email" placeholder={t("enterEmail")} required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="li-pwd">{t("password")}</Label>
                  <Link to="#" className="text-xs text-primary hover:underline">{t("forgotPassword")}</Link>
                </div>
                <Input id="li-pwd" type="password" placeholder={t("enterPassword")} required />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">{t("rememberMe")}</Label>
              </div>
              <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0 shadow-glow">
                {t("signIn")}
              </Button>
            </form>

            <p className="mt-5 text-center text-sm text-muted-foreground">
              {t("noAccount")} <Link to="#" className="text-primary font-medium hover:underline">{t("signUp")}</Link>
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth">
            <Arrow className="h-4 w-4" /> {t("backToDashboard")}
          </Link>
        </div>
      </div>
    </div>
  );
}
