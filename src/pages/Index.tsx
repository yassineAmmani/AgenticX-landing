import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MarketOpportunity from "@/components/MarketOpportunity";
import TargetBusinesses from "@/components/TargetBusinesses";
import CustomerDemo from "@/components/CustomerDemo";
import ManagerDemo from "@/components/ManagerDemo";
import Analytics from "@/components/Analytics";
import CTA from "@/components/CTA";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Language Selector Header */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      
      <Hero />
      <MarketOpportunity />
      <TargetBusinesses />
      <Features />
      <CustomerDemo />
      <ManagerDemo />
      <Analytics />
      <CTA />
    </div>
  );
};

export default Index;
