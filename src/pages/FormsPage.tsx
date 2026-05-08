import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { PageHeader } from "@/components/common/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { toast } from "sonner";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function FormsPage() {
  const { t } = useI18n();
  const [emailErr] = useState(true);

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("formsTitle")}
        subtitle={t("formsSubtitle")}
        breadcrumbs={[{ label: t("dashboard"), href: "/" }, { label: t("forms") }]}
      />

      <form
        onSubmit={(e) => { e.preventDefault(); toast.success(t("save")); }}
        className="grid gap-6 lg:grid-cols-2"
      >
        <Card className="shadow-card border-border/60">
          <CardHeader>
            <CardTitle>{t("profileSettings")}</CardTitle>
            <CardDescription>{t("formsSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">{t("fullName")}</Label>
              <Input id="name" placeholder={t("enterFullName")} defaultValue="Sarah Mitchell" />
              <p className="flex items-center gap-1.5 text-xs text-success"><CheckCircle2 className="h-3.5 w-3.5" /> Looks good!</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("email")}</Label>
              <Input id="email" type="email" placeholder={t("enterEmail")} defaultValue="invalid-email"
                className={emailErr ? "border-destructive focus-visible:ring-destructive/30" : ""} />
              {emailErr && (
                <p className="flex items-center gap-1.5 text-xs text-destructive"><AlertCircle className="h-3.5 w-3.5" /> Please enter a valid email.</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="pwd">{t("password")}</Label>
              <Input id="pwd" type="password" placeholder={t("enterPassword")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob">{t("birthDate")}</Label>
              <Input id="dob" type="date" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-border/60">
          <CardHeader>
            <CardTitle>{t("accountSettings")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label>{t("country")}</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder={t("selectCountry")} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="sa">Saudi Arabia</SelectItem>
                  <SelectItem value="ae">UAE</SelectItem>
                  <SelectItem value="eg">Egypt</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>{t("bio")}</Label>
              <Textarea placeholder={t("bioPlaceholder")} rows={4} />
            </div>

            <div className="space-y-3">
              <Label>{t("accountType")}</Label>
              <RadioGroup defaultValue="personal" className="flex gap-6">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="personal" id="r1" />
                  <Label htmlFor="r1" className="font-normal cursor-pointer">{t("personal")}</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="business" id="r2" />
                  <Label htmlFor="r2" className="font-normal cursor-pointer">{t("business")}</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="news" defaultChecked />
              <Label htmlFor="news" className="font-normal cursor-pointer">{t("subscribeNewsletter")}</Label>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-border/60 p-3">
              <div>
                <p className="text-sm font-medium">{t("notifications")}</p>
                <p className="text-xs text-muted-foreground">Email & push</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline">{t("cancel")}</Button>
          <Button type="submit" className="gradient-primary text-primary-foreground border-0 shadow-glow">
            {t("save")}
          </Button>
        </div>
      </form>
    </div>
  );
}
