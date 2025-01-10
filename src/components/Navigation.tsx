import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: "Emergency Plumbing", path: "/services/emergency-plumbing" },
    { name: "New Construction", path: "/services/new-construction" },
    { name: "Sump Pump Services", path: "/services/sump-pump" },
    { name: "Bathroom & Kitchen", path: "/services/bathroom-kitchen" },
    { name: "Water Heater Services", path: "/services/water-heater" },
    { name: "Leak Detection", path: "/services/leak-detection" },
    { name: "Fixture Installation", path: "/services/fixture-installation" },
    { name: "Pipe Repair", path: "/services/pipe-repair" },
    { name: "Sewer Line Services", path: "/services/sewer-line" },
    { name: "Backflow Prevention", path: "/services/backflow-prevention" },
    { name: "Drain Cleaning", path: "/services/drain-cleaning" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="w-10 md:hidden">
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

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
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="inline-flex items-center">
                  Services <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link to={service.path} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
            <a href="tel:226-820-4264" className="text-primary font-semibold hover:text-secondary transition-colors">
              226-820-4264
            </a>
          </div>

          {/* Mobile phone button */}
          <div className="w-10 md:hidden">
            <a
              href="tel:226-820-4264"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary"
            >
              <Phone className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block">
              <Button variant="ghost" className="w-full text-left justify-start">
                Home
              </Button>
            </Link>
            <div className="space-y-2 pl-4">
              {services.map((service) => (
                <Link key={service.path} to={service.path} className="block">
                  <Button
                    variant="ghost"
                    className="w-full text-left justify-start text-sm"
                  >
                    {service.name}
                  </Button>
                </Link>
              ))}
            </div>
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