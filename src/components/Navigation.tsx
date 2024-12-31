import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with proper mobile centering */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link to="/" className="block">
              <img
                src="/lovable-uploads/header-logo.png"
                alt="Melville's Plumbing"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost">Services</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden absolute right-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block">
              <Button variant="ghost" className="w-full text-left justify-start">
                Home
              </Button>
            </Link>
            <Link to="/services" className="block">
              <Button variant="ghost" className="w-full text-left justify-start">
                Services
              </Button>
            </Link>
            <Link to="/about" className="block">
              <Button variant="ghost" className="w-full text-left justify-start">
                About
              </Button>
            </Link>
            <Link to="/contact" className="block">
              <Button variant="ghost" className="w-full text-left justify-start">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};