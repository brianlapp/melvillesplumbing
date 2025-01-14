import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { navigationServices } from "@/constants/services";
import { type NavigationProps } from "@/types/navigation";

export const MobileNav = ({ className }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`w-10 md:hidden ${className || ''}`}>
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <div className="w-10 md:hidden">
        <a
          href="tel:226-820-4264"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary"
        >
          <Phone className="h-5 w-5 text-white" />
        </a>
      </div>

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
              
              {navigationServices.map((category) => (
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
    </>
  );
};