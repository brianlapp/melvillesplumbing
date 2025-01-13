import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ChevronRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      category: "View All Services",
      items: [
        { 
          name: "Services Overview", 
          path: "/services",
          icon: LayoutGrid,
          description: "Browse our complete range of plumbing services"
        },
      ]
    },
    {
      category: "Emergency & Installation",
      items: [
        { 
          name: "Emergency Plumbing", 
          path: "/services/emergency-plumbing",
          description: "24/7 emergency plumbing services"
        },
        { 
          name: "Water Heater Services", 
          path: "/services/water-heater",
          description: "Installation and repair services"
        },
        { 
          name: "Fixture Installation", 
          path: "/services/fixture-installation",
          description: "Professional fixture installations"
        },
      ]
    },
    {
      category: "Maintenance & Repair",
      items: [
        { 
          name: "Leak Detection", 
          path: "/services/leak-detection",
          description: "Advanced leak detection services"
        },
        { 
          name: "Pipe Repair", 
          path: "/services/pipe-repair",
          description: "Expert pipe repair solutions"
        },
        { 
          name: "Drain Cleaning", 
          path: "/services/drain-cleaning",
          description: "Professional drain cleaning"
        },
      ]
    },
    {
      category: "Specialized Services",
      items: [
        { 
          name: "Sewer Line Services", 
          path: "/services/sewer-line",
          description: "Complete sewer line solutions"
        },
        { 
          name: "Backflow Prevention", 
          path: "/services/backflow-prevention",
          description: "Backflow testing and installation"
        },
        { 
          name: "Sump Pump Services", 
          path: "/services/sump-pump",
          description: "Installation and maintenance"
        },
      ]
    },
    {
      category: "Construction",
      items: [
        { 
          name: "New Construction", 
          path: "/services/new-construction",
          description: "New construction plumbing"
        },
        { 
          name: "Bathroom & Kitchen", 
          path: "/services/bathroom-kitchen",
          description: "Remodeling and upgrades"
        },
      ]
    },
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
                <Button variant="ghost" className="inline-flex items-center group">
                  Services 
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-80 bg-white p-2 max-h-[calc(100vh-80px)] overflow-y-auto"
                sideOffset={8}
              >
                {services.map((category, index) => (
                  <div key={category.category}>
                    {index > 0 && <DropdownMenuSeparator className="my-2" />}
                    <div className="px-2 py-1.5 text-sm font-semibold text-primary">
                      {category.category}
                    </div>
                    {category.items.map((service) => (
                      <DropdownMenuItem
                        key={service.path}
                        className="p-0 focus:bg-gray-50"
                      >
                        <Link
                          to={service.path}
                          className="flex items-start px-2 py-2 w-full hover:text-primary transition-colors"
                        >
                          <div>
                            <div className="flex items-center">
                              {service.icon && <service.icon className="h-4 w-4 mr-2" />}
                              <span className="font-medium">{service.name}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {service.description}
                            </p>
                          </div>
                          <ChevronRight className="ml-auto h-4 w-4 opacity-50 self-center" />
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link to="/" className="block">
                  <Button variant="ghost" className="w-full text-left justify-start">
                    Home
                  </Button>
                </Link>
                
                {services.map((category) => (
                  <div key={category.category} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-semibold text-primary">
                      {category.category}
                    </div>
                    {category.items.map((service) => (
                      <Link key={service.path} to={service.path} className="block">
                        <Button
                          variant="ghost"
                          className="w-full text-left justify-start pl-8"
                        >
                          <div>
                            <div className="flex items-center">
                              {service.icon && <service.icon className="h-4 w-4 mr-2" />}
                              <span>{service.name}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5 pl-6">
                              {service.description}
                            </p>
                          </div>
                        </Button>
                      </Link>
                    ))}
                  </div>
                ))}

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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
