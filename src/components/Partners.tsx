import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Package, BarChart3, Search, TrendingUp, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  const partners = [
    {
      name: "Shopify",
      description: "Store setup and conversion enhancement",
      icon: ShoppingBag,
    },
    {
      name: "Printify",
      description: "Product integration and automation",
      icon: Package,
    },
    {
      name: "Alura",
      description: "Etsy keyword analytics and growth tracking",
      icon: BarChart3,
    },
    {
      name: "Marmalead",
      description: "SEO keyword intelligence",
      icon: Search,
    },
    {
      name: "eRank",
      description: "Listing ranking and competitor insights",
      icon: TrendingUp,
    },
    {
      name: "Etsy Ads Team",
      description: "Advanced ad performance optimization",
      icon: Megaphone,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Partnering with Global eCommerce Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with the best platforms to deliver comprehensive Etsy optimization solutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{partner.name}</h3>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-accent border border-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to Integrate Your Platform?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm always looking to partner with innovative eCommerce and Etsy-focused platforms.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
