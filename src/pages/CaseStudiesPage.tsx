import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <CaseStudies />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
