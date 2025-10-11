import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Star, Clock, Gift, CreditCard, ThumbsUp, Home, Compass, Calendar, User } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CustomerDemo = () => {
  const { t } = useLanguage();
  const [activeScreen, setActiveScreen] = useState<"home" | "chat">("home");
  const [activeMessage, setActiveMessage] = useState(0);
  
  const messages = [
    { type: "user", text: "Find me a restaurant with vegan options near Marina" },
    { type: "ai", text: "I found 3 excellent restaurants with vegan options in Marina. Here's the top match..." },
    { type: "result", restaurant: true },
    { type: "user", text: "Can I make a reservation?" },
    { type: "ai", text: "Absolutely! I can help you book a table. What date and time works for you?" },
    { type: "reservation", show: true },
    { type: "user", text: "Are there any discounts available?" },
    { type: "ai", text: "Yes! You have a 15% loyalty discount and they're offering a happy hour special!" },
    { type: "discount", show: true }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("customerDemo.title")}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Demo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("customerDemo.subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* iPhone Mockup */}
            <div className="relative mx-auto">
              {/* iPhone Frame */}
              <div className="relative w-[320px] h-[650px] bg-black rounded-[50px] p-3 shadow-2xl border-8 border-gray-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>
                
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[40px] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-primary to-accent px-4 py-3 flex justify-between items-center text-white text-xs">
                    <span>9:41</span>
                    <span className="font-semibold">AgenticX</span>
                    <span>100%</span>
                  </div>

                  {/* App Content */}
                  <Card className="h-[calc(100%-90px)] border-0 rounded-none bg-gradient-to-b from-muted/20 to-background overflow-hidden">
                    {activeScreen === "home" ? (
                      <div className="p-4 space-y-3 h-full overflow-y-auto">
                        {/* Home Screen */}
                        <h3 className="text-lg font-semibold text-foreground mb-3">{t("customerDemo.explore")}</h3>
                        <div className="space-y-3">
                          <Card 
                            className="p-3 bg-gradient-to-br from-chart-1/10 to-chart-2/5 border-chart-1/20 cursor-pointer hover:shadow-lg transition-all"
                            onClick={() => setActiveScreen("chat")}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm">AI Assistant</h4>
                                <p className="text-xs text-muted-foreground">Find perfect restaurants</p>
                              </div>
                            </div>
                          </Card>
                          
                          <Card className="p-3 bg-gradient-to-br from-chart-2/10 to-chart-3/5 border-chart-2/20">
                            <h4 className="font-semibold text-sm mb-2">Nearby Restaurants</h4>
                            <div className="space-y-2">
                              {[
                                { name: "Green Garden Bistro", distance: "0.8 km", rating: "4.8" },
                                { name: "Ocean View Restaurant", distance: "1.2 km", rating: "4.6" }
                              ].map((rest, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs">
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>{rest.name}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Star className="w-3 h-3 fill-accent text-accent" />
                                    <span>{rest.rating}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Card>

                          <Card className="p-3 bg-gradient-to-br from-chart-4/10 to-chart-5/5 border-chart-4/20">
                            <h4 className="font-semibold text-sm mb-2">Your Rewards</h4>
                            <div className="flex items-center justify-between">
                              <span className="text-xs">Loyalty Points</span>
                              <span className="font-bold text-chart-4">1,250 pts</span>
                            </div>
                          </Card>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 space-y-3 h-full overflow-y-auto">
                      {messages.slice(0, activeMessage + 1).map((msg, idx) => (
                        <div key={idx} className="animate-fade-in">
                          {msg.type === "user" && (
                            <div className="flex justify-end">
                              <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-3 py-2 max-w-[75%] text-sm">
                                {msg.text}
                              </div>
                            </div>
                          )}
                          {msg.type === "ai" && (
                            <div className="flex justify-start">
                              <div className="bg-muted text-foreground rounded-2xl rounded-tl-sm px-3 py-2 max-w-[75%] text-sm">
                                {msg.text}
                              </div>
                            </div>
                          )}
                          {msg.type === "result" && msg.restaurant && (
                            <div className="bg-card rounded-xl p-3 border border-border shadow-sm">
                              <div className="flex items-start gap-3">
                                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                                  <Star className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1 space-y-1">
                                  <h4 className="font-semibold text-foreground text-sm">Green Garden Bistro</h4>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <MapPin className="w-3 h-3" />
                                    <span>Marina, 0.8 km</span>
                                  </div>
                                  <div className="flex items-center gap-3 text-xs">
                                    <div className="flex items-center gap-1">
                                      <Star className="w-3 h-3 fill-accent text-accent" />
                                      <span className="font-medium">4.8</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="w-3 h-3 text-muted-foreground" />
                                      <span>Open</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {msg.type === "reservation" && msg.show && (
                            <div className="bg-gradient-to-br from-chart-1/10 to-chart-2/10 rounded-xl p-3 border border-chart-1/30">
                              <div className="flex items-center gap-2 mb-2">
                                <Clock className="w-4 h-4 text-chart-1" />
                                <span className="font-semibold text-sm">Quick Reservation</span>
                              </div>
                              <div className="space-y-2">
                                <Button size="sm" className="w-full bg-chart-1 hover:bg-chart-1/90 text-white text-xs h-8">
                                  Tonight at 7 PM
                                </Button>
                                <Button size="sm" variant="outline" className="w-full border-chart-1 text-chart-1 text-xs h-8">
                                  Choose Another Time
                                </Button>
                              </div>
                            </div>
                          )}
                          {msg.type === "discount" && msg.show && (
                            <div className="bg-gradient-to-br from-chart-4/10 to-chart-5/10 rounded-xl p-3 border border-chart-4/30">
                              <div className="flex items-center gap-2 mb-2">
                                <Gift className="w-4 h-4 text-chart-4" />
                                <span className="font-semibold text-sm">Available Offers</span>
                              </div>
                              <div className="space-y-2 text-xs">
                                <div className="flex items-center justify-between p-2 bg-white/50 rounded">
                                  <span>Loyalty Discount</span>
                                  <span className="font-bold text-chart-4">15% OFF</span>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-white/50 rounded">
                                  <span>Happy Hour Special</span>
                                  <span className="font-bold text-chart-5">20% OFF</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      </div>
                    )}
                  </Card>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-3 left-3 right-3 h-14 bg-white border-t border-gray-200 flex items-center justify-around px-4 rounded-b-[36px]">
                    <button 
                      onClick={() => setActiveScreen("home")}
                      className={`flex flex-col items-center gap-1 ${activeScreen === "home" ? "text-primary" : "text-muted-foreground"}`}
                    >
                      <Home className="w-5 h-5" />
                      <span className="text-[10px]">{t("customerDemo.home")}</span>
                    </button>
                    <button 
                      onClick={() => setActiveScreen("chat")}
                      className={`flex flex-col items-center gap-1 ${activeScreen === "chat" ? "text-primary" : "text-muted-foreground"}`}
                    >
                      <Compass className="w-5 h-5" />
                      <span className="text-[10px]">{t("customerDemo.explore")}</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-muted-foreground">
                      <Calendar className="w-5 h-5" />
                      <span className="text-[10px]">{t("customerDemo.reservations")}</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-muted-foreground">
                      <User className="w-5 h-5" />
                      <span className="text-[10px]">{t("customerDemo.profile")}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <Card className="p-5 bg-gradient-to-br from-chart-1/10 to-chart-2/5 border-chart-1/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("customerDemo.aiSearch")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("customerDemo.aiSearchDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-chart-2/10 to-chart-3/5 border-chart-2/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-2 to-chart-3 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("customerDemo.instantReservations")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("customerDemo.instantReservationsDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-chart-4/10 to-chart-5/5 border-chart-4/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-4 to-chart-5 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("customerDemo.loyaltyDiscounts")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("customerDemo.loyaltyDiscountsDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-chart-5/10 to-chart-6/5 border-chart-5/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-5 to-chart-6 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("customerDemo.billSplitting")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("customerDemo.billSplittingDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-chart-6/10 to-chart-7/5 border-chart-6/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-6 to-chart-7 flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("customerDemo.easyFeedback")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("customerDemo.easyFeedbackDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              {activeScreen === "chat" && activeMessage < messages.length - 1 && (
                <Button 
                  onClick={() => setActiveMessage(prev => prev + 1)}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  {t("customerDemo.continueDemo")}
                </Button>
              )}
              {activeScreen === "chat" && activeMessage === messages.length - 1 && (
                <Button 
                  onClick={() => {
                    setActiveMessage(0);
                    setActiveScreen("home");
                  }}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  {t("customerDemo.restartDemo")}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerDemo;
