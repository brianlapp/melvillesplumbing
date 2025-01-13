import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Wrench, Settings, Camera, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const DrainCleaningServices = () => {
  const services = [
    {
      icon: Wrench,
      title: "Kitchen Drains",
      description: "Removal of grease, soap, and food debris that accumulate over time."
    },
    {
      icon: Settings,
      title: "Bathroom Drains",
      description: "Clearing blockages caused by hair, soap scum, and other materials."
    },
    {
      icon: Camera,
      title: "Sewer Lines",
      description: "Thorough cleaning of main sewer lines to prevent backups."
    },
    {
      icon: CheckCircle2,
      title: "Outdoor Drains",
      description: "Clearing leaves, dirt, and other debris from exterior drains and gutters."
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Comprehensive Drain Cleaning Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-8 h-full hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button 
          size="lg" 
          variant="secondary" 
          className="group"
          asChild
        >
          <Link to="/contact">
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
};