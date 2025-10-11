import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, TrendingUp, Instagram, Target, Zap, Brain, DollarSign, Activity } from "lucide-react";
import { useState } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { useLanguage } from "@/contexts/LanguageContext";

const ManagerDemo = () => {
  const { t } = useLanguage();
  const [activeView, setActiveView] = useState(0);
  
  const revenueData = [
    { day: "Mon", revenue: 2400 },
    { day: "Tue", revenue: 2800 },
    { day: "Wed", revenue: 3200 },
    { day: "Thu", revenue: 2900 },
    { day: "Fri", revenue: 4100 },
    { day: "Sat", revenue: 4800 },
    { day: "Sun", revenue: 3900 }
  ];

  const customerData = [
    { segment: "VIP", value: 25, color: "hsl(var(--chart-1))" },
    { segment: "Regular", value: 45, color: "hsl(var(--chart-2))" },
    { segment: "New", value: 30, color: "hsl(var(--chart-4))" }
  ];

  const profitData = [
    { month: "Jan", profit: 12000, cost: 8000 },
    { month: "Feb", profit: 15000, cost: 9000 },
    { month: "Mar", profit: 18000, cost: 10000 },
    { month: "Apr", profit: 22000, cost: 11000 }
  ];

  const views = [
    {
      title: "Business Intelligence Dashboard",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-3 bg-gradient-to-br from-chart-1/10 to-chart-2/5 border-chart-1/20">
              <div className="text-xs text-muted-foreground mb-1">Today's Revenue</div>
              <div className="text-2xl font-bold text-foreground">$4,832</div>
              <div className="text-xs text-green-600 mt-1">↑ 12.5%</div>
            </Card>
            <Card className="p-3 bg-gradient-to-br from-chart-2/10 to-chart-3/5 border-chart-2/20">
              <div className="text-xs text-muted-foreground mb-1">Active Customers</div>
              <div className="text-2xl font-bold text-foreground">248</div>
              <div className="text-xs text-green-600 mt-1">↑ 8.3%</div>
            </Card>
          </div>
          <Card className="p-3 bg-card">
            <div className="text-sm font-semibold mb-2">Weekly Revenue</div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={revenueData}>
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" style={{fontSize: '10px'}} />
                <YAxis stroke="hsl(var(--muted-foreground))" style={{fontSize: '10px'}} />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--chart-1))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      )
    },
    {
      title: "AI-Powered Insights",
      content: (
        <div className="space-y-3">
          <Card className="p-3 bg-gradient-to-br from-chart-4/10 to-chart-5/5 border-chart-4/20">
            <div className="flex items-start gap-2">
              <Brain className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold mb-1">AI Recommendation</div>
                <p className="text-xs text-muted-foreground">
                  Your Friday dinner rush peaks at 7:30 PM. Consider staffing 2 more servers from 7-9 PM to improve service speed by 23%
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-3 bg-gradient-to-br from-chart-5/10 to-chart-6/5 border-chart-5/20">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-chart-5 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold mb-1">Trend Alert</div>
                <p className="text-xs text-muted-foreground">
                  "Vegan burger" searches increased 45% this month. Add 2 new vegan items to boost orders by estimated $2.8K/month
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-3 bg-gradient-to-br from-chart-6/10 to-chart-1/5 border-chart-6/20">
            <div className="flex items-start gap-2">
              <Target className="w-5 h-5 text-chart-6 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold mb-1">Customer Insight</div>
                <p className="text-xs text-muted-foreground">
                  25% of your customers are repeat visitors. Launch a loyalty program to increase retention by 40%
                </p>
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      title: "Profit Analysis",
      content: (
        <div className="space-y-3">
          <Card className="p-3 bg-card">
            <div className="text-sm font-semibold mb-2">Monthly Profit & Costs</div>
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart data={profitData}>
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" style={{fontSize: '10px'}} />
                <YAxis stroke="hsl(var(--muted-foreground))" style={{fontSize: '10px'}} />
                <Tooltip />
                <Area type="monotone" dataKey="profit" stackId="1" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.6} />
                <Area type="monotone" dataKey="cost" stackId="1" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" fillOpacity={0.4} />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
          <div className="grid grid-cols-2 gap-2">
            <Card className="p-3 bg-gradient-to-br from-chart-1/10 to-chart-2/5 border-chart-1/20">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="w-4 h-4 text-chart-1" />
                <span className="text-xs font-semibold">Net Profit</span>
              </div>
              <div className="text-xl font-bold">$67K</div>
              <div className="text-xs text-green-600">↑ 18.5%</div>
            </Card>
            <Card className="p-3 bg-gradient-to-br from-chart-3/10 to-chart-4/5 border-chart-3/20">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-chart-3" />
                <span className="text-xs font-semibold">Margin</span>
              </div>
              <div className="text-xl font-bold">42%</div>
              <div className="text-xs text-green-600">↑ 3.2%</div>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: "Loyalty Program Manager",
      content: (
        <div className="space-y-3">
          <Card className="p-3 bg-gradient-to-br from-chart-6/10 to-chart-7/5 border-chart-6/20">
            <div className="text-sm font-semibold mb-2">Active Campaigns</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs p-2 bg-white/50 rounded">
                <span>Summer Special</span>
                <span className="font-bold text-chart-6">342 members</span>
              </div>
              <div className="flex items-center justify-between text-xs p-2 bg-white/50 rounded">
                <span>VIP Rewards</span>
                <span className="font-bold text-chart-7">125 members</span>
              </div>
            </div>
          </Card>
          <Card className="p-3 bg-gradient-to-br from-chart-1/10 to-chart-2/5 border-chart-1/20">
            <div className="flex items-start gap-2">
              <Brain className="w-4 h-4 text-chart-1 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold mb-1">AI Suggestion</div>
                <p className="text-xs text-muted-foreground">
                  Launch a "Friend Referral" campaign. Predicted to increase member base by 28% in 2 months
                </p>
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      title: "Customer Segmentation",
      content: (
        <div className="space-y-3">
          <Card className="p-3 bg-card">
            <div className="text-sm font-semibold mb-2">Customer Distribution</div>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={customerData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {customerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Card>
          <div className="grid grid-cols-3 gap-2">
            <Card className="p-2 text-center bg-chart-1/10">
              <div className="text-xs text-muted-foreground">VIP</div>
              <div className="text-lg font-bold">25%</div>
            </Card>
            <Card className="p-2 text-center bg-chart-2/10">
              <div className="text-xs text-muted-foreground">Regular</div>
              <div className="text-lg font-bold">45%</div>
            </Card>
            <Card className="p-2 text-center bg-chart-4/10">
              <div className="text-xs text-muted-foreground">New</div>
              <div className="text-lg font-bold">30%</div>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: "Social Media Management",
      content: (
        <div className="space-y-3">
          <Card className="p-3 bg-gradient-to-br from-chart-4/10 to-chart-5/5 border-chart-4/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-chart-4" />
                <span className="text-xs font-semibold">Instagram</span>
              </div>
              <span className="text-xs text-green-600">Active</span>
            </div>
            <div className="text-xs text-muted-foreground mb-2">Latest post: 2 hours ago</div>
            <div className="flex gap-2 text-xs">
              <div className="bg-white/50 rounded px-2 py-1">
                <div className="font-semibold">2.4K</div>
                <div className="text-muted-foreground">Likes</div>
              </div>
              <div className="bg-white/50 rounded px-2 py-1">
                <div className="font-semibold">147</div>
                <div className="text-muted-foreground">Comments</div>
              </div>
            </div>
          </Card>
          <Card className="p-3 bg-gradient-to-br from-chart-5/10 to-chart-6/5 border-chart-5/20">
            <div className="flex items-start gap-2">
              <Zap className="w-4 h-4 text-chart-5 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold mb-1">AI Content Suggestion</div>
                <p className="text-xs text-muted-foreground">
                  Post your new vegan menu at 6 PM today for 34% higher engagement
                </p>
              </div>
            </div>
          </Card>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background" data-section="manager-demo">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("managerDemo.title")}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Demo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("managerDemo.subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Browser Mockup */}
            <div className="relative scale-75 md:scale-90 lg:scale-100 origin-top">
              {/* Browser Frame */}
              <div className="bg-gray-200 rounded-t-xl p-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-muted-foreground">
                  app.agenticx.com/dashboard
                </div>
              </div>
              
              {/* Browser Content */}
              <div className="bg-white rounded-b-xl shadow-2xl border border-gray-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-accent px-4 py-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-white" />
                    <span className="font-semibold text-white">AgenticX Manager</span>
                  </div>
                  <div className="text-xs text-white">Green Garden Bistro</div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {views[activeView].title}
                  </h3>
                  {views[activeView].content}
                </div>

                {/* Navigation Tabs */}
                <div className="border-t border-gray-200 p-2 flex gap-2 overflow-x-auto">
                  {views.map((view, idx) => (
                    <Button
                      key={idx}
                      size="sm"
                      variant={activeView === idx ? "default" : "ghost"}
                      onClick={() => setActiveView(idx)}
                      className="text-xs whitespace-nowrap"
                    >
                      {view.title.split(' ')[0]}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <Card className="p-5 bg-gradient-to-br from-chart-1/10 to-chart-2/5 border-chart-1/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("managerDemo.biDashboard")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("managerDemo.biDashboardDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-chart-2/10 to-chart-3/5 border-chart-2/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-2 to-chart-3 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("managerDemo.aiInsights")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("managerDemo.aiInsightsDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-chart-4/10 to-chart-5/5 border-chart-4/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-4 to-chart-5 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("managerDemo.customerSegmentation")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("managerDemo.customerSegmentationDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-chart-5/10 to-chart-6/5 border-chart-5/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-5 to-chart-6 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("managerDemo.socialMedia")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("managerDemo.socialMediaDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-chart-6/10 to-chart-7/5 border-chart-6/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-6 to-chart-7 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("managerDemo.loyaltyManagement")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("managerDemo.loyaltyManagementDesc")}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-chart-7/10 to-chart-8/5 border-chart-7/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-7 to-chart-8 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t("managerDemo.aiConsulting")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("managerDemo.aiConsultingDesc")}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerDemo;
