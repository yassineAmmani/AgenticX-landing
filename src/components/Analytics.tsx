import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Users, MessageSquare, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// 6 Months Data - Starting in Casablanca with restaurants
const growth6Month = [
  { month: "Jan", partners: 3, consumers: 15, location: "Casablanca" },
  { month: "Feb", partners: 5, consumers: 28, location: "Casablanca" },
  { month: "Mar", partners: 8, consumers: 42, location: "Casablanca" },
  { month: "Apr", partners: 12, consumers: 65, location: "Casablanca" },
  { month: "May", partners: 17, consumers: 85, location: "Casablanca" },
  { month: "Jun", partners: 20, consumers: 100, location: "Casablanca" }
];

// 1 Year Data - Expanding to other business types in Casablanca
const growth1Year = [
  { month: "Jan", restaurants: 3, barbershops: 0, carwash: 0, gym: 0, spa: 0, consumers: 15 },
  { month: "Mar", restaurants: 8, barbershops: 2, carwash: 1, gym: 0, spa: 0, consumers: 65 },
  { month: "Jun", restaurants: 20, barbershops: 5, carwash: 3, gym: 2, spa: 1, consumers: 180 },
  { month: "Sep", restaurants: 35, barbershops: 12, carwash: 8, gym: 5, spa: 3, consumers: 420 },
  { month: "Dec", restaurants: 50, barbershops: 20, carwash: 15, gym: 10, spa: 8, consumers: 850 }
];

// 3 Years Data - National and international expansion
const growth3Years = [
  { quarter: "Q1 Y1", casablanca: 20, otherCities: 0, international: 0, consumers: 180 },
  { quarter: "Q2 Y1", casablanca: 35, otherCities: 5, international: 0, consumers: 420 },
  { quarter: "Q3 Y1", casablanca: 50, otherCities: 15, international: 0, consumers: 850 },
  { quarter: "Q4 Y1", casablanca: 70, otherCities: 30, international: 0, consumers: 1500 },
  { quarter: "Q1 Y2", casablanca: 90, otherCities: 60, international: 10, consumers: 3200 },
  { quarter: "Q2 Y2", casablanca: 120, otherCities: 100, international: 30, consumers: 6800 },
  { quarter: "Q3 Y2", casablanca: 150, otherCities: 180, international: 70, consumers: 12500 },
  { quarter: "Q4 Y2", casablanca: 200, otherCities: 300, international: 150, consumers: 25000 },
  { quarter: "Q1 Y3", casablanca: 250, otherCities: 450, international: 300, consumers: 45000 },
  { quarter: "Q2 Y3", casablanca: 300, otherCities: 650, international: 550, consumers: 75000 },
  { quarter: "Q3 Y3", casablanca: 350, otherCities: 900, international: 850, consumers: 120000 },
  { quarter: "Q4 Y3", casablanca: 400, otherCities: 1200, international: 1400, consumers: 200000 }
];

// Expected Revenue projections in USD - Target: $100M ARR in 5 years
const revenue6Month = [
  { month: "Jan", revenue: 1500 },
  { month: "Feb", revenue: 3200 },
  { month: "Mar", revenue: 5800 },
  { month: "Apr", revenue: 9500 },
  { month: "May", revenue: 14000 },
  { month: "Jun", revenue: 20000 }
];

const revenue1Year = [
  { month: "Jan", revenue: 0 },
  { month: "Mar", revenue: 15000 },
  { month: "Jun", revenue: 120000 },
  { month: "Sep", revenue: 450000 },
  { month: "Dec", revenue: 1200000 }
];

const revenue5Years = [
  { year: "Y1", revenue: 1200000 },
  { year: "Y2", revenue: 8000000 },
  { year: "Y3", revenue: 25000000 },
  { year: "Y4", revenue: 55000000 },
  { year: "Y5", revenue: 100000000 }
];

const Analytics = () => {
  const { t } = useLanguage();

  // Performance metrics - First month launch metrics (realistic early adopter numbers)
  const performanceData = [
    { metric: "Active Users", value: 45 },
    { metric: "Reservations", value: 28 },
    { metric: "Avg. Rating", value: 4.7 },
    { metric: "Repeat Rate %", value: 62 },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("analytics.title").split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("analytics.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("analytics.subtitle")}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Pre-Launch</span>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">20</div>
            <div className="text-sm text-muted-foreground">{t("analytics.partners")}</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">Active</span>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">100</div>
            <div className="text-sm text-muted-foreground">{t("analytics.consumers")}</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-accent/5 border-secondary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">High</span>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">94%</div>
            <div className="text-sm text-muted-foreground">{t("analytics.engagement")}</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">Goal</span>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">$100M</div>
            <div className="text-sm text-muted-foreground">{t("analytics.arr")}</div>
          </Card>
        </div>

        {/* Growth Projections with Tabs */}
        <Tabs defaultValue="6months" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="6months">{t("analytics.sixMonths")}</TabsTrigger>
            <TabsTrigger value="1year">{t("analytics.oneYear")}</TabsTrigger>
            <TabsTrigger value="3years">{t("analytics.threeYears")}</TabsTrigger>
          </TabsList>

          <TabsContent value="6months" className="space-y-8">
            <Card className="p-4 md:p-6 bg-card backdrop-blur-sm shadow-xl border-2 hover:border-primary/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{t("analytics.plannedPlatformGrowth")} - {t("analytics.sixMonths")}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-6">Starting with restaurants in Casablanca</p>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={growth6Month}>
                  <defs>
                    <linearGradient id="colorPartners" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorConsumers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Area type="monotone" dataKey="partners" stroke="hsl(var(--chart-1))" fillOpacity={1} fill="url(#colorPartners)" strokeWidth={2} />
                  <Area type="monotone" dataKey="consumers" stroke="hsl(var(--chart-2))" fillOpacity={1} fill="url(#colorConsumers)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-4 md:p-6 bg-card backdrop-blur-sm shadow-xl border-2 hover:border-primary/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{t("analytics.expectedRevenueGrowth")} (USD)</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-6">Pre-revenue phase - Building product-market fit</p>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={revenue6Month}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                    formatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--chart-3))" strokeWidth={3} strokeDasharray="5 5" dot={{ fill: "hsl(var(--chart-1))", r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="1year" className="space-y-8">
            <Card className="p-4 md:p-6 bg-card backdrop-blur-sm shadow-xl border-2 hover:border-primary/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{t("analytics.plannedPlatformGrowth")} - {t("analytics.oneYear")}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-6">Expanding to barbershops, car wash, gyms, and spas in Casablanca</p>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={growth1Year}>
                  <defs>
                    <linearGradient id="restaurants" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="barbershops" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-4))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-4))" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="carwash" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-5))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-5))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Area type="monotone" dataKey="restaurants" stackId="1" stroke="hsl(var(--chart-1))" fill="url(#restaurants)" strokeWidth={2} />
                  <Area type="monotone" dataKey="barbershops" stackId="1" stroke="hsl(var(--chart-4))" fill="url(#barbershops)" strokeWidth={2} />
                  <Area type="monotone" dataKey="carwash" stackId="1" stroke="hsl(var(--chart-5))" fill="url(#carwash)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-4 mt-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                  <span className="text-sm text-muted-foreground">Restaurants</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-4"></div>
                  <span className="text-sm text-muted-foreground">Barbershops</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-5"></div>
                  <span className="text-sm text-muted-foreground">Car Wash</span>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 bg-card backdrop-blur-sm shadow-xl border-2 hover:border-primary/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{t("analytics.expectedRevenueGrowth")} (USD)</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-6">Target: $1.2M ARR by end of Year 1</p>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={revenue1Year}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => `$${value/1000}K`} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                    formatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--chart-3))" strokeWidth={3} dot={{ fill: "hsl(var(--chart-1))", r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="3years" className="space-y-8">
            <Card className="p-4 md:p-6 bg-card backdrop-blur-sm shadow-xl border-2 hover:border-primary/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{t("analytics.plannedPlatformGrowth")} - {t("analytics.threeYears")}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-6">From Casablanca to Morocco-wide, then international expansion</p>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={growth3Years}>
                  <defs>
                    <linearGradient id="casa" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="cities" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-6))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-6))" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="intl" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-7))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-7))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="quarter" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Area type="monotone" dataKey="casablanca" stackId="1" stroke="hsl(var(--chart-1))" fill="url(#casa)" strokeWidth={2} />
                  <Area type="monotone" dataKey="otherCities" stackId="1" stroke="hsl(var(--chart-6))" fill="url(#cities)" strokeWidth={2} />
                  <Area type="monotone" dataKey="international" stackId="1" stroke="hsl(var(--chart-7))" fill="url(#intl)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-4 mt-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                  <span className="text-sm text-muted-foreground">Casablanca</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-6"></div>
                  <span className="text-sm text-muted-foreground">Other Cities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-7"></div>
                  <span className="text-sm text-muted-foreground">International</span>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 bg-card backdrop-blur-sm shadow-xl border-2 hover:border-primary/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{t("analytics.expectedRevenueGrowth")} (USD)</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-6">Target: $100M ARR by end of Year 5</p>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={revenue5Years}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(value) => `$${value/1000000}M`} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                    formatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--chart-8))" strokeWidth={3} dot={{ fill: "hsl(var(--chart-1))", r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Performance Metrics */}
        <Card className="p-4 md:p-6 bg-card backdrop-blur-sm shadow-xl border-2 hover:border-primary/50 transition-all">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-6">{t("analytics.performanceMetrics")}</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Bar dataKey="value" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </section>
  );
};

export default Analytics;
