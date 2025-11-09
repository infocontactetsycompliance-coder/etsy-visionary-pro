import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-foreground">Ethan Matin Consulting</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/case-studies" className="text-foreground hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button asChild className="bg-primary hover:bg-primary-hover">
                <Link to="/contact">Free Audit</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent rounded-md"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent rounded-md"
            >
              Services
            </Link>
            <Link
              to="/case-studies"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent rounded-md"
            >
              Case Studies
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent rounded-md"
            >
              Contact
            </Link>
            <Button asChild onClick={() => setIsOpen(false)} className="w-full bg-primary hover:bg-primary-hover mt-2">
              <Link to="/contact">Free Audit</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
