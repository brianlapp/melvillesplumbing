import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Wrench, Clock, Shield, Wrench2 } from "lucide-react";
import { motion } from "framer-motion";

const LeakDetectionPage = () => {
  return (
    <ServicePageLayout
      title="Leak Detection & Repair Services in Windsor"
      description="Using state-of-the-art detection methods, we quickly locate and repair leaks to prevent costly water damage to your home or business. Our expert team ensures your plumbing system operates efficiently and safely."
    >
      <div className="container mx-auto px-4 pt-16">
        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Comprehensive Leak Detection Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
              },
              {
                icon: Wrench2,
                title: "Complete Assessment",
                description: "Thorough inspection of your entire plumbing system."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Signs of Leaks Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common Signs of Water Leaks
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
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
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{sign.title}</h3>
                <p className="text-gray-600">{sign.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-primary text-white rounded-lg mb-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Suspect a Leak? Don't Wait!
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact Melville's Plumbing today for fast, reliable leak detection and repair services.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="group"
              asChild
            >
              <Link to="/contact">
                Get Expert Help Now
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default LeakDetectionPage;
