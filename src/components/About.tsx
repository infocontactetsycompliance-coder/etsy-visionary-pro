import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import ethanPhoto from "@/assets/ethan-martin.jpg";

const About = () => {
  const credentials = [
    "Certified Etsy Visibility & Optimization Specialist",
    "Years of experience with top-performing Etsy brands",
    "Data-driven optimization strategies",
    "Proven results for hundreds of sellers",
  ];

  const badges = [
    "Trusted by 500+ Etsy Sellers",
    "Etsy Growth Partner 2025",
    "Visibility Expert Certified",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ethanPhoto}
                alt="Ethan Martin - Etsy Optimization Specialist"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Shops Helped</div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Meet Ethan Martin
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a certified <strong>Etsy Visibility & Optimization Specialist</strong>, I've spent years helping creative entrepreneurs and Etsy shop owners scale their businesses through proven, data-driven strategies.
              </p>
            </div>

            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{credential}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I work closely with leading eCommerce and Etsy-related companies including <strong>Shopify, Printify, Alura, Marmalead, eRank, InsightFactory,</strong> and the <strong>Etsy Ads Team</strong> to deliver comprehensive optimization solutions that drive real results.
              </p>
            </div>

            {/* Badge Pills */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-accent text-accent-foreground border border-border"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
