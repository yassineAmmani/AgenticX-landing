import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookDemoDialog = ({ open, onOpenChange }: BookDemoDialogProps) => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = e.target as HTMLFormElement;
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6d7983a6-117a-457d-b327-39dfecfc6320",
          subject: "New Demo Request - AgenticX",
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
          setFormData({ name: "", email: "", phone: "", role: "" });
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
                {t("bookDemo.title")}
              </DialogTitle>
              <p className="text-muted-foreground">{t("bookDemo.subtitle")}</p>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t("bookDemo.name")}</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("bookDemo.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t("bookDemo.phone")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">{t("bookDemo.role")}</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="vc">{t("bookDemo.roleVC")}</SelectItem>
                    <SelectItem value="angel">{t("bookDemo.roleAngel")}</SelectItem>
                    <SelectItem value="accelerator">{t("bookDemo.roleAccelerator")}</SelectItem>
                    <SelectItem value="other">{t("bookDemo.roleOther")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent" disabled={isLoading}>
                {isLoading ? "Sending..." : t("bookDemo.submit")}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 mx-auto text-green-500" />
            <h3 className="text-2xl font-bold text-foreground">{t("bookDemo.successTitle")}</h3>
            <p className="text-muted-foreground">{t("bookDemo.successMessage")}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoDialog;
