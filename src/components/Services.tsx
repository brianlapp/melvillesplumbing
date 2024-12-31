import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Droplet, Wrench, Home, Shower, Search, Tool, Pipeline, TrashIcon, Shield } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Clock,
    title: "Emergency Plumbing Services",
    description: "24/7 emergency services for burst pipes, major leaks, and sewer backups. We're here when you need us most.",
  },
  {
    icon: Home,
    title: "New Construction Plumbing",
    description: "Complete plumbing solutions for new construction projects, working closely with builders and contractors.",
  },
  {
    icon: Wrench,
    title: "Sump Pump Services",
    description: "Expert installation, maintenance, and repair of sump pumps to protect your property from flooding.",
  },
  {
    icon: Shower,
    title: "Bathroom & Kitchen Renovations",
    description: "Professional plumbing services for your renovation projects, from fixture installation to pipe reconfiguration.",
  },
  {
    icon: Droplet,
    title: "Water Heater Services",
    description: "Specialized installation and repair services for both tank and tankless water heater systems.",
  },
  {
    icon: Search,
    title: "Leak Detection & Repair",
    description: "State-of-the-art leak detection and efficient repair solutions to prevent water damage.",
  },
  {
    icon: Tool,
    title: "Fixture Installation & Repair",
    description: "Expert installation and repair of all plumbing fixtures to enhance your space's functionality.",
  },
  {
    icon: Pipeline,
    title: "Pipe Services",
    description: "Comprehensive pipe repair and replacement services to maintain your plumbing system's efficiency.",
  },
  {
    icon: Shield,
    title: "Backflow Prevention",
    description: "Professional backflow prevention and testing services to protect your water supply.",
  },
  {
    icon: TrashIcon,
    title: "Drain Cleaning",
    description: "Advanced drain cleaning solutions to clear blockages and maintain smooth water flow.",
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
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional plumbing services for all your residential and commercial needs
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
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};