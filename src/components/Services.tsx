import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, FileText, Package, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Etsy Shop Optimization",
      description: "Advanced keyword clustering, tag rewriting, and algorithm mapping to boost your shop's visibility.",
      features: ["Keyword research & clustering", "SEO tag optimization", "Algorithm compliance"],
    },
    {
      icon: TrendingUp,
      title: "Shop Visibility Audit",
      description: "Deep analysis of ranking gaps, buyer intent, and conversion leaks to identify growth opportunities.",
      features: ["Comprehensive ranking analysis", "Competitor benchmarking", "Conversion optimization"],
    },
    {
      icon: FileText,
      title: "Product Listing Enhancements",
      description: "Compelling descriptions, SEO structure, and trust signals that convert browsers into buyers.",
      features: ["SEO-optimized descriptions", "Title optimization", "Trust signal implementation"],
    },
    {
      icon: Package,
      title: "Bundle & Pricing Strategy",
      description: "Create high-value offers that increase average order value and customer lifetime value.",
      features: ["Product bundling strategy", "Pricing optimization", "Upsell opportunities"],
    },
    {
      icon: Rocket,
      title: "Growth Accelerator Program",
      description: "Full 30-day implementation roadmap for traffic and revenue growth with ongoing support.",
      features: ["30-day action plan", "Weekly progress reviews", "Ongoing optimization"],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-section">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Comprehensive Etsy Optimization Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven strategies designed to increase your shop's visibility, traffic, and revenue
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8"
          >
            <Link to="/contact">
              Book Your Free Shop Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
