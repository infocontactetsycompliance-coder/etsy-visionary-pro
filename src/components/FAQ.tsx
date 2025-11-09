import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to see results from Etsy SEO optimization?",
      answer: "Most clients start seeing improvements in visibility within 2-4 weeks, with significant sales growth typically occurring within 2-3 months. However, results can vary based on your niche, competition, and how consistently you implement the recommendations."
    },
    {
      question: "What's included in the free shop audit?",
      answer: "The free audit includes a comprehensive analysis of your shop's SEO health, listing quality, pricing strategy, product photography, and competitive positioning. You'll receive a detailed report with actionable recommendations to improve your shop's performance."
    },
    {
      question: "Do I need to know technical SEO to work with you?",
      answer: "Not at all! I provide clear, step-by-step guidance that anyone can follow. All recommendations are explained in simple terms, and I'm available to answer any questions throughout the optimization process."
    },
    {
      question: "Will optimization work for my specific niche?",
      answer: "Yes! I've successfully optimized shops across various niches including jewelry, home decor, digital products, vintage items, and more. Each strategy is customized to your specific market and competition."
    },
    {
      question: "How is this different from other Etsy SEO services?",
      answer: "My approach combines data-driven SEO with marketplace psychology. I don't just optimize for search—I optimize for conversions. Plus, you get personalized 1-on-1 support rather than generic templates or courses."
    },
    {
      question: "What if I'm just starting my Etsy shop?",
      answer: "Perfect timing! Starting with proper SEO foundations is much easier than fixing problems later. I'll help you set up your shop correctly from day one, avoiding common mistakes that hold back new sellers."
    },
    {
      question: "Do you offer ongoing support or just one-time optimization?",
      answer: "I offer both! You can choose a one-time optimization package or ongoing monthly support to continuously improve your shop's performance, adapt to algorithm changes, and scale your business."
    },
    {
      question: "What's your success rate with clients?",
      answer: "Over 90% of my clients see significant improvements in their shop visibility and sales within the first 90 days. Many have doubled or tripled their monthly revenue after implementing my strategies."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? I've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? I'm here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
