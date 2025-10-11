import { Card } from "@/components/ui/card";
import { TrendingUp, Target, AlertCircle, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MarketOpportunity = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t("marketOpportunity.title").split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("marketOpportunity.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Massive TAM in rapidly growing markets with urgent pain points
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Market Size Cards */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-chart-1/10 to-chart-2/5 border-chart-1/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-start gap-3 md:gap-4 mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center flex-shrink-0 shadow-lg">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">$12B → $48B</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{t("marketOpportunity.aiMarket")} (2024-2030)</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              The AI-powered customer service market is experiencing explosive growth at 31.5% CAGR, 
              driven by businesses seeking to automate and enhance customer interactions.
            </p>
          </Card>

          <Card className="p-6 md:p-8 bg-gradient-to-br from-chart-2/10 to-chart-3/5 border-chart-2/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-start gap-3 md:gap-4 mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-chart-2 to-chart-3 flex items-center justify-center flex-shrink-0 shadow-lg">
                <DollarSign className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">$5.3B → $12B</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{t("marketOpportunity.restaurantMarket")} (2025-2030)</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Restaurant management solutions growing at 17.7% CAGR as businesses digitize operations 
              and seek better customer engagement tools.
            </p>
          </Card>
        </div>

        {/* Problem Statement */}
        <Card className="p-6 md:p-8 bg-gradient-to-br from-chart-8/10 to-chart-4/5 border-chart-8/20 shadow-xl max-w-4xl mx-auto mb-6 md:mb-8">
          <div className="flex items-start gap-3 md:gap-4 mb-6">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-chart-8 to-chart-4 flex items-center justify-center flex-shrink-0 shadow-lg">
              <AlertCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t("marketOpportunity.problem")}</h3>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
                Traditional business discovery is broken and inefficient
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm md:text-base text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-chart-8"></span>
                  {t("marketOpportunity.customerProblem")}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {t("marketOpportunity.customerProblemDesc")}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm md:text-base text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-chart-4"></span>
                  {t("marketOpportunity.businessProblem")}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {t("marketOpportunity.businessProblemDesc")}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Solution/Value Prop */}
        <Card className="p-6 md:p-8 bg-gradient-to-br from-chart-7/10 to-chart-1/5 border-chart-7/20 shadow-xl max-w-4xl mx-auto">
          <div className="flex items-start gap-3 md:gap-4 mb-6">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-chart-7 to-chart-1 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Target className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t("marketOpportunity.solution")}</h3>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
                AI-powered platform that transforms customer discovery and business intelligence
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-4 bg-white/50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-chart-1 mb-2">10x</div>
              <p className="text-xs md:text-sm text-muted-foreground">Faster business discovery</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-chart-7 mb-2">40%</div>
              <p className="text-xs md:text-sm text-muted-foreground">Increase in customer retention</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-chart-1 mb-2">95%</div>
              <p className="text-xs md:text-sm text-muted-foreground">AI recommendation accuracy</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MarketOpportunity;
