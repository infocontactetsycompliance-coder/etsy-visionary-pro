import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      shop: "Vintage Haven",
      rating: 5,
      text: "Ethan helped us triple our visibility and reach page one for competitive keywords. Our sales have never been better!",
      revenue: "$8K to $28K/month",
    },
    {
      name: "James Rodriguez",
      shop: "Digital Art Studio",
      rating: 5,
      text: "The optimization process was thorough and professional. We saw results within the first two weeks. Highly recommend!",
      revenue: "300% traffic increase",
    },
    {
      name: "Emily Chen",
      shop: "Handcrafted Home",
      rating: 5,
      text: "Working with Ethan was the best investment for our Etsy business. His insights and strategies are invaluable.",
      revenue: "450% revenue growth",
    },
    {
      name: "Michael Thompson",
      shop: "Printables Pro",
      rating: 5,
      text: "Ethan's expertise in Etsy SEO is unmatched. He identified issues we didn't even know existed and fixed them quickly.",
      revenue: "$3K to $15K/month",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-section">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What Etsy Sellers Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of successful shop owners who've transformed their businesses
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>

                {/* Author Info */}
                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.shop}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">{testimonial.revenue}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
