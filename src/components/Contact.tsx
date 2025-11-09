import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shopUrl: "",
    salesRange: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/xzzypjlk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Request Received!",
          description: "I'll review your shop and get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", shopUrl: "", salesRange: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-section">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Scale Your Etsy Shop?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's identify your visibility gaps and boost your sales performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                    className="border-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="border-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Etsy Shop URL</label>
                  <Input
                    value={formData.shopUrl}
                    onChange={(e) => setFormData({ ...formData, shopUrl: e.target.value })}
                    placeholder="https://www.etsy.com/shop/YourShop"
                    required
                    className="border-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Monthly Sales Range</label>
                  <Select value={formData.salesRange} onValueChange={(value) => setFormData({ ...formData, salesRange: value })}>
                    <SelectTrigger className="border-input">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1k">$0 - $1,000</SelectItem>
                      <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k+">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your shop and goals..."
                    rows={4}
                    className="border-input"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  Request Free Audit
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                Have questions? I'm here to help. Reach out directly through any of these channels or fill out the form to request your free shop audit.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="mailto:etsyoptimizerethanmatin@gmail.com"
                className="flex items-center gap-4 p-4 bg-accent rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">etsyoptimizerethanmatin@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-accent rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">Quick response guaranteed</div>
                </div>
              </a>
            </div>

            {/* Trust Signal */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <div className="text-sm text-foreground">
                <strong>Response Time:</strong> I typically respond to all inquiries within 24 hours. Free audits are delivered within 48-72 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
