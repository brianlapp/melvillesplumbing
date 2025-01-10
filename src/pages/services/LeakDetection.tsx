import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Wrench, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const LeakDetectionPage = () => {
  return (
    <ServicePageLayout
      title="Leak Detection & Repair Services in Windsor"
      description="Using state-of-the-art detection methods, we quickly locate and repair leaks to prevent costly water damage to your home or business. Our expert team ensures your plumbing system operates efficiently and safely."
      backgroundImage="/heros/water-leak-detection.png"
    >
      <div className="container mx-auto px-4 pt-8 md:pt-16">
        {/* Services Section */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Our Comprehensive Leak Detection Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Search,
                title: "Advanced Detection",
                description: "Using state-of-the-art technology to locate even the most hidden leaks."
              },
              {
                icon: Wrench,
                title: "Professional Repairs",
                description: "Expert repairs using high-quality materials and proven techniques."
              },
              {
                icon: Clock,
                title: "24/7 Emergency Service",
                description: "Available around the clock for urgent leak detection and repairs."
              },
              {
                icon: Shield,
                title: "Preventive Solutions",
                description: "Identifying potential issues before they become major problems."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <Card className="p-4 md:p-6 h-full hover:shadow-lg transition-shadow">
                  <service.icon className="w-8 h-8 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Signs of Leaks Section */}
        <section className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Common Signs of Water Leaks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "Increased Water Bills",
                description: "Unexplained increases in your monthly water bills could indicate hidden leaks."
              },
              {
                title: "Water Stains",
                description: "Visible water stains on walls, ceilings, or floors often point to concealed leaks."
              },
              {
                title: "Musty Odors",
                description: "Persistent musty smells can indicate water damage and potential mold growth."
              },
              {
                title: "Running Water Sounds",
                description: "The sound of running water when no fixtures are in use may signal a leak."
              }
            ].map((sign, index) => (
              <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">{sign.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{sign.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-8 md:py-16 bg-primary text-white rounded-lg mb-8 md:mb-16 px-4 md:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Suspect a Leak? Don't Wait!
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-6 md:mb-8">
              Contact Melville's Plumbing today for fast, reliable leak detection and repair services.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="group text-lg md:text-2xl px-6 md:px-12 py-6 md:py-8 w-full md:w-auto"
              asChild
            >
              <Link to="/contact">
                Get Expert Help Now
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default LeakDetectionPage;