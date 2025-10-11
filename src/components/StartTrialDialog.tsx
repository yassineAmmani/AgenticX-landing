import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";

interface StartTrialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StartTrialDialog = ({ open, onOpenChange }: StartTrialDialogProps) => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    company: "",
    businessType: "",
    website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6d7983a6-117a-457d-b327-39dfecfc6320",
          subject: "New Trial Request - AgenticX",
          from_name: "AgenticX Landing Page",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onOpenChange(false);
          setFormData({ email: "", phone: "", company: "", businessType: "", website: "" });
        }, 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("startTrial.title")}
              </DialogTitle>
              <p className="text-muted-foreground">{t("startTrial.subtitle")}</p>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t("startTrial.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t("startTrial.phone")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">{t("startTrial.company")}</Label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessType">{t("startTrial.businessType")}</Label>
                <Select value={formData.businessType} onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="restaurant">{t("startTrial.businessTypeRestaurant")}</SelectItem>
                    <SelectItem value="barber">{t("startTrial.businessTypeBarber")}</SelectItem>
                    <SelectItem value="carwash">{t("startTrial.businessTypeCarWash")}</SelectItem>
                    <SelectItem value="gym">{t("startTrial.businessTypeGym")}</SelectItem>
                    <SelectItem value="spa">{t("startTrial.businessTypeSpa")}</SelectItem>
                    <SelectItem value="other">{t("startTrial.businessTypeOther")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">{t("startTrial.website")}</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder={t("startTrial.websitePlaceholder")}
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent" disabled={isLoading}>
                {isLoading ? "Sending..." : t("startTrial.submit")}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 mx-auto text-green-500" />
            <h3 className="text-2xl font-bold text-foreground">{t("startTrial.successTitle")}</h3>
            <p className="text-muted-foreground">{t("startTrial.successMessage")}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StartTrialDialog;
