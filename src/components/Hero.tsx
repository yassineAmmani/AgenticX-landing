import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import StartTrialDialog from "./StartTrialDialog";
import BookDemoDialog from "./BookDemoDialog";

const Hero = () => {
  const { t } = useLanguage();
  const [showTrial, setShowTrial] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-accent/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-glow">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AgenticX
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            {t("hero.title")}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("hero.title-highlighted")}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={() => setShowTrial(true)}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transform hover:scale-105 transition-all duration-200 text-lg px-8 py-6 shadow-lg hover:shadow-xl"
            >
              {t("hero.getStarted")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setShowDemo(true)}
              className="border-2 border-primary text-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-200 text-lg px-8 py-6"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              {t("hero.scheduleDemo")}
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-sm text-muted-foreground">{t("hero.matchAccuracy")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                10x
              </div>
              <div className="text-sm text-muted-foreground">{t("hero.fasterDiscovery")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">{t("hero.aiAssistant")}</div>
            </div>
          </div>
        </div>
      </div>

      <StartTrialDialog open={showTrial} onOpenChange={setShowTrial} />
      <BookDemoDialog open={showDemo} onOpenChange={setShowDemo} />
    </section>
  );
};

export default Hero;
