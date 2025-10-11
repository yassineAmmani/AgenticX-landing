import { Coffee, Users, Utensils, Store, Building2, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import StartTrialDialog from "./StartTrialDialog";

const TargetBusinesses = () => {
  const { t } = useLanguage();
  const [showStartTrial, setShowStartTrial] = useState(false);
  
  const businesses = [
    {
      icon: Utensils,
      title: t("targetBusinesses.restaurant"),
      benefit: t("targetBusinesses.restaurantBenefit"),
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: t("targetBusinesses.coworking"),
      benefit: t("targetBusinesses.coworkingBenefit"),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Coffee,
      title: t("targetBusinesses.cafe"),
      benefit: t("targetBusinesses.cafeBenefit"),
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Store,
      title: t("targetBusinesses.retail"),
      benefit: t("targetBusinesses.retailBenefit"),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Building2,
      title: t("targetBusinesses.services"),
      benefit: t("targetBusinesses.servicesBenefit"),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Sparkles,
      title: t("targetBusinesses.more"),
      benefit: t("targetBusinesses.moreBenefit"),
      color: "from-indigo-500 to-violet-500"
    }
  ];

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("targetBusinesses.title")}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("targetBusinesses.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {businesses.map((business, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-card border-border"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${business.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <business.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {business.title}
                </h3>
                <p className="text-muted-foreground">
                  {business.benefit}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("targetBusinesses.ctaTitle")}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {t("targetBusinesses.ctaSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => setShowStartTrial(true)}
                >
                  {t("targetBusinesses.startButton")}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    document.querySelector('[data-section="manager-demo"]')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  {t("targetBusinesses.seeDemoButton")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StartTrialDialog open={showStartTrial} onOpenChange={setShowStartTrial} />
    </>
  );
};

export default TargetBusinesses;
