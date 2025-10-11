import { Bot, Search, QrCode, MessageCircle, BarChart3, Box } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Bot,
      title: t("features.aiDiscovery"),
      description: t("features.aiDiscoveryDesc"),
      color: "from-chart-1 to-chart-2"
    },
    {
      icon: Search,
      title: t("features.smartRecommendations"),
      description: t("features.smartRecommendationsDesc"),
      color: "from-chart-2 to-chart-3"
    },
    {
      icon: QrCode,
      title: t("features.seamlessEngagement"),
      description: t("features.seamlessEngagementDesc"),
      color: "from-chart-3 to-chart-4"
    },
    {
      icon: MessageCircle,
      title: t("features.feedbackSystem"),
      description: t("features.feedbackSystemDesc"),
      color: "from-chart-4 to-chart-5"
    },
    {
      icon: BarChart3,
      title: t("features.businessIntelligence"),
      description: t("features.businessIntelligenceDesc"),
      color: "from-chart-5 to-chart-6"
    },
    {
      icon: Box,
      title: t("features.omnichannelManagement"),
      description: t("features.omnichannelManagementDesc"),
      color: "from-chart-6 to-chart-1"
    }
  ];
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("features.title").split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("features.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card border-border backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
