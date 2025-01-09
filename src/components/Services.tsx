import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Droplet, Wrench, Home, Droplets, Search, PenLine, Shield, Trash2, Pipe, Construction } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Clock,
    title: "Emergency Plumbing Services",
    description: "Available 24/7 to tackle burst pipes, major leaks, and other emergencies. When you need us most, we'll be there.",
    link: "/services/emergency-plumbing"
  },
  {
    icon: Construction,
    title: "New Construction Plumbing",
    description: "Comprehensive plumbing solutions for new builds, from initial planning to installation.",
    link: "/services/new-construction"
  },
  {
    icon: Wrench,
    title: "Sump Pump Services",
    description: "Keep your basement dry and prevent flooding with our reliable sump pump services.",
    link: "/services/sump-pump"
  },
  {
    icon: Droplets,
    title: "Bathroom & Kitchen Renovations",
    description: "Expert plumbing for remodels and new construction projects.",
    link: "/services/renovations"
  },
  {
    icon: Droplet,
    title: "Water Heater Services",
    description: "Expert installation, repair, and replacement for tank and tankless water heaters.",
    link: "/services/water-heater"
  },
  {
    icon: Search,
    title: "Leak Detection & Repair",
    description: "Quickly find and fix leaks to prevent costly water damage.",
    link: "/services/leak-detection"
  },
  {
    icon: PenLine,
    title: "Fixture Installation & Repair",
    description: "Upgrade your kitchen or bathroom with stylish and functional fixtures.",
    link: "/services/fixtures"
  },
  {
    icon: Pipe,
    title: "Pipe Repair & Replacement",
    description: "Handle minor repairs or full replacements with precision.",
    link: "/services/pipe-repair"
  },
  {
    icon: Shield,
    title: "Backflow Prevention",
    description: "Protect your water supply with professional backflow prevention systems.",
    link: "/services/backflow-prevention"
  },
  {
    icon: Trash2,
    title: "Drain Cleaning",
    description: "Efficiently restore flow to your plumbing with professional drain cleaning.",
    link: "/services/drain-cleaning"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Plumbing Solutions for Windsor Homes and Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Melville's Plumbing, we pride ourselves on offering a full spectrum of plumbing services 
            designed to meet the unique needs of Windsor residents. Our team of experts is equipped to 
            handle jobs of all sizes, from routine maintenance to complex installations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>
                  <div className="flex gap-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                    <Button variant="default" className="w-full" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};