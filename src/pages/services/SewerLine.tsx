import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Droplet, Wrench, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const SewerLinePage = () => {
  return (
    <ServicePageLayout
      title="Sewer Line Services in Windsor"
      description="When it comes to maintaining the health of your property's plumbing system, your sewer line plays a critical role. Our team provides comprehensive sewer line services, ensuring your system functions efficiently and reliably."
      backgroundImage="/lovable-uploads/IMG_2559.jpeg"
    >
      <div className="container mx-auto px-4 pt-16">
        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Sewer Line Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Sewer Line Inspections",
                description: "Using advanced camera technology, we conduct thorough inspections of your sewer lines to identify issues without unnecessary digging."
              },
              {
                title: "Sewer Line Cleaning",
                description: "Our team uses high-pressure water jetting to remove clogs and restore the flow of your sewer system."
              },
              {
                title: "Sewer Line Repairs",
                description: "From minor cracks to significant damage, our experts perform durable repairs using trenchless methods to minimize disruption."
              },
              {
                title: "Preventative Maintenance",
                description: "Regular maintenance helps prevent costly issues. We schedule routine checks to ensure optimal system condition."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Signs of Sewer Line Problems
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Slow draining sinks or tubs",
              "Frequent backups",
              "Gurgling sounds from drains",
              "Unpleasant odors near fixtures",
              "Soggy areas in your yard",
              "Multiple clogged drains"
            ].map((sign, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{sign}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Melville's Plumbing?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Experience",
                description: "Over a decade of expertise in sewer line services."
              },
              {
                icon: Wrench,
                title: "Advanced Technology",
                description: "State-of-the-art equipment for accurate diagnostics."
              },
              {
                icon: Droplet,
                title: "Comprehensive Solutions",
                description: "From inspection to repair, we handle it all."
              },
              {
                icon: CheckCircle2,
                title: "Local Expertise",
                description: "Understanding Windsor's unique plumbing needs."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Prevention Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Preventing Sewer Line Problems
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Proper Disposal Habits",
                description: "Avoid flushing inappropriate items and never pour grease down drains."
              },
              {
                title: "Regular Maintenance",
                description: "Schedule annual inspections to catch issues early."
              },
              {
                title: "Tree Management",
                description: "Keep trees and large plants away from sewer lines."
              },
              {
                title: "Professional Cleaning",
                description: "Regular professional cleaning prevents buildup and blockages."
              }
            ].map((tip, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-primary text-white rounded-lg mb-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Need Sewer Line Services?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don't wait until a small issue becomes a major problem. Contact Melville's Plumbing today for expert sewer line services in Windsor.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="group"
              asChild
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default SewerLinePage;