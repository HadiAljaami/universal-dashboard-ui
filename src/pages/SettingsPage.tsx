import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PageHeader } from "@/components/common/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/theme/ThemeProvider";
import { Moon, Sun, Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const { t, locale, setLocale } = useI18n();
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("settingsTitle")}
        subtitle={t("settingsSubtitle")}
        breadcrumbs={[{ label: t("dashboard"), href: "/" }, { label: t("settings") }]}
      />

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="w-full justify-start overflow-x-auto sm:w-auto">
          <TabsTrigger value="profile">{t("profileSettings")}</TabsTrigger>
          <TabsTrigger value="account">{t("accountSettings")}</TabsTrigger>
          <TabsTrigger value="appearance">{t("appearance")}</TabsTrigger>
          <TabsTrigger value="language">{t("languageRegion")}</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="shadow-card border-border/60">
            <CardHeader>
              <CardTitle>{t("profileSettings")}</CardTitle>
              <CardDescription>{t("settingsSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">SM</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">Change avatar</Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label>{t("fullName")}</Label><Input defaultValue="Sarah Mitchell" /></div>
                <div className="space-y-2"><Label>{t("email")}</Label><Input defaultValue="sarah@example.com" /></div>
              </div>
              <div className="flex justify-end"><Button>{t("save")}</Button></div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card className="shadow-card border-border/60">
            <CardHeader><CardTitle>{t("accountSettings")}</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {[t("notifications"), "Two-factor auth", "Email alerts"].map((label) => (
                <div key={label} className="flex items-center justify-between rounded-lg border border-border/60 p-4">
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-muted-foreground">Manage your preferences</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card className="shadow-card border-border/60">
            <CardHeader>
              <CardTitle>{t("theme")}</CardTitle>
              <CardDescription>{t("themeDesc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {([
                  { value: "light", label: t("lightMode"), icon: Sun },
                  { value: "dark", label: t("darkMode"), icon: Moon },
                ] as const).map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTheme(opt.value)}
                    className={cn(
                      "relative flex items-center gap-3 rounded-xl border-2 p-4 text-start transition-smooth",
                      theme === opt.value ? "border-primary bg-accent" : "border-border/60 hover:border-border"
                    )}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted"><opt.icon className="h-5 w-5" /></div>
                    <div className="flex-1"><p className="font-medium">{opt.label}</p></div>
                    {theme === opt.value && <Check className="h-5 w-5 text-primary" />}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="language">
          <Card className="shadow-card border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Globe className="h-4 w-4" />{t("language")}</CardTitle>
              <CardDescription>{t("settingsSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {([
                  { value: "en", label: t("english"), flag: "🇬🇧", dir: "LTR" },
                  { value: "ar", label: t("arabic"), flag: "🇸🇦", dir: "RTL" },
                ] as const).map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setLocale(opt.value)}
                    className={cn(
                      "relative flex items-center gap-3 rounded-xl border-2 p-4 text-start transition-smooth",
                      locale === opt.value ? "border-primary bg-accent" : "border-border/60 hover:border-border"
                    )}
                  >
                    <span className="text-2xl">{opt.flag}</span>
                    <div className="flex-1">
                      <p className="font-medium">{opt.label}</p>
                      <p className="text-xs text-muted-foreground">{opt.dir}</p>
                    </div>
                    {locale === opt.value && <Check className="h-5 w-5 text-primary" />}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
