import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Wrench, Droplet, Home, ShowerHead, PenLine, Shield, Trash2 } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for your peace of mind.",
  },
  {
    icon: Droplet,
    title: "Leak Detection & Repair",
    description: "Advanced leak detection and efficient repair solutions.",
  },
  {
    icon: Home,
    title: "Residential Services",
    description: "Complete plumbing solutions for your home.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Remodeling",
    description: "Expert bathroom renovation and remodeling services.",
  },
  {
    icon: PenLine,
    title: "Pipe Services",
    description: "Installation, repair, and replacement of all types of pipes.",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Regular maintenance to prevent future plumbing issues.",
  },
  {
    icon: Trash2,
    title: "Drain Cleaning",
    description: "Professional drain cleaning and maintenance services.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Guarantee",
    description: "All our work comes with a satisfaction guarantee.",
  },
];

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional plumbing services for residential and commercial properties in Windsor, Ontario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default ServicesPage;