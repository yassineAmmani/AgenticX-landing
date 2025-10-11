import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import StartTrialDialog from "./StartTrialDialog";
import BookDemoDialog from "./BookDemoDialog";

const CTA = () => {
  const { t } = useLanguage();
  const [showTrial, setShowTrial] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            {t("cta.title").split("Customer Experience")[0]}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("cta.title").includes("Customer Experience") ? "Customer Experience" : t("cta.title").split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg"
              onClick={() => setShowTrial(true)}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transform hover:scale-105 transition-all duration-200 text-lg px-10 py-7 shadow-xl"
            >
              {t("cta.startTrial")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowDemo(true)}
              className="border-2 border-primary text-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-200 text-lg px-10 py-7"
            >
              <Calendar className="mr-2 w-5 h-5" />
              {t("cta.bookDemo")}
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-primary font-semibold">✓ {t("cta.noCreditCard")}</div>
              <p className="text-sm text-muted-foreground">{t("cta.noCreditCardDesc")}</p>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-semibold">✓ {t("cta.quickSetup")}</div>
              <p className="text-sm text-muted-foreground">{t("cta.quickSetupDesc")}</p>
            </div>
            <div className="space-y-2">
              <div className="text-primary font-semibold">✓ {t("cta.support")}</div>
              <p className="text-sm text-muted-foreground">{t("cta.supportDesc")}</p>
            </div>
          </div>
        </div>
      </div>

      <StartTrialDialog open={showTrial} onOpenChange={setShowTrial} />
      <BookDemoDialog open={showDemo} onOpenChange={setShowDemo} />
    </section>
  );
};

export default CTA;
