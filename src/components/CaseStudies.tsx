import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import proofStats1 from "@/assets/proof-stats-1.jpg";
import proofStats2 from "@/assets/proof-stats-2.jpg";
import proofVideo from "@/assets/proof-video.mp4";

const CaseStudies = () => {
  const cases = [
    {
      shopName: "Doll Supply Shop",
      category: "Craft Supplies",
      challenge: "Low visibility in competitive keyword space",
      result: "450% Traffic Growth in 6 Weeks",
      metrics: [
        { label: "Traffic Increase", value: "+450%", icon: TrendingUp },
        { label: "New Customers", value: "2,340", icon: Users },
        { label: "Revenue Growth", value: "+380%", icon: DollarSign },
      ],
      testimonial: "Ethan completely transformed our shop visibility. We now rank on page one for our most competitive keywords.",
    },
    {
      shopName: "Printable Store",
      category: "Digital Products",
      challenge: "Stagnant sales at $2K/month",
      result: "$2K to $12K in 30 Days",
      metrics: [
        { label: "Revenue Growth", value: "+500%", icon: DollarSign },
        { label: "Conversion Rate", value: "+215%", icon: TrendingUp },
        { label: "Daily Visitors", value: "1,200+", icon: Users },
      ],
      testimonial: "The optimization strategy was incredibly thorough. Our sales skyrocketed within the first month.",
    },
    {
      shopName: "Handmade Jewelry Co.",
      category: "Jewelry & Accessories",
      challenge: "High traffic but low conversion rates",
      result: "Triple Conversion Rate in 45 Days",
      metrics: [
        { label: "Conversion Rate", value: "+300%", icon: TrendingUp },
        { label: "Average Order", value: "+85%", icon: DollarSign },
        { label: "Return Customers", value: "+120%", icon: Users },
      ],
      testimonial: "Ethan helped us fix critical conversion issues we didn't even know existed. Game changer.",
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real success stories from Etsy sellers who transformed their businesses
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="border-border overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-3 gap-6">
                <CardHeader className="md:col-span-1 bg-accent">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-primary">{caseStudy.category}</div>
                    <CardTitle className="text-2xl text-foreground">{caseStudy.shopName}</CardTitle>
                    <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                    <div className="pt-4">
                      <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                        {caseStudy.result}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="md:col-span-2 pt-6">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {caseStudy.metrics.map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <div key={idx} className="text-center">
                          <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Testimonial */}
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-foreground italic">"{caseStudy.testimonial}"</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Sales Proof Section */}
        <div className="mt-16 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Real Store Sales Proof
            </h3>
            <p className="text-muted-foreground">
              Verified Etsy shop statistics showing actual results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Stats Images */}
            <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src={proofStats1} 
                  alt="Etsy shop statistics showing 18.9K visits, 372 orders, and $5,831.13 revenue"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>

            <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src={proofStats2} 
                  alt="Etsy shop statistics showing 4,595 visits, 97 orders, and $1,471 revenue"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>

            {/* Video Proof */}
            <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow md:col-span-2">
              <CardContent className="p-0">
                <video 
                  controls 
                  className="w-full h-auto max-h-[600px]"
                  preload="metadata"
                >
                  <source src={proofVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
