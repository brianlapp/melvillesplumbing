import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, LayoutGrid, Droplet, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BathroomKitchenPage = () => {
  return (
    <ServicePageLayout
      title="Bathroom & Kitchen Renovation Plumbing Services in Windsor"
      description="Transforming your home with a bathroom or kitchen renovation is an exciting process, but it also requires expert plumbing to ensure everything functions seamlessly. Our experienced team works closely with you to bring your dream space to life while ensuring the plumbing is reliable, efficient, and up to code."
      backgroundImage="/lovable-uploads/IMG_2023.jpeg"
    >
      <div className="container mx-auto px-4 pt-16">
        {/* Why Professional Plumbing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why is Professional Plumbing Essential for Renovations?
          </h2>
          <Card className="p-8">
            <p className="text-gray-600 leading-relaxed">
              Bathroom and kitchen renovations often involve more than just aesthetic upgrades. They frequently require modifications to the plumbing system, including reconfiguring pipes, installing new fixtures, and ensuring proper water flow and drainage. Poorly executed plumbing can lead to costly repairs and damage down the line. That's why hiring experienced professionals like Melville's Plumbing is essential to the success of your project.
            </p>
          </Card>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Bathroom & Kitchen Renovation Plumbing Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Fixture Installation",
                description: "Expert installation of sinks, tubs, faucets, and more with proper connections and leak-free operation."
              },
              {
                icon: LayoutGrid,
                title: "Pipe Reconfiguration",
                description: "Professional assessment and modification of existing plumbing to accommodate new layouts."
              },
              {
                icon: Wrench,
                title: "Appliance Hookups",
                description: "Precise installation for all kitchen appliances requiring plumbing connections."
              },
              {
                icon: Droplet,
                title: "Drain Installation",
                description: "Reliable drain and vent systems tailored to your renovation needs."
              },
              {
                icon: CheckCircle,
                title: "Water Line Upgrades",
                description: "Ensuring your water supply meets the demands of modern fixtures and appliances."
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

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tips for a Successful Bathroom or Kitchen Renovation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Plan Ahead",
                description: "Outline your vision, budget, and timeline before starting the project. Include plumbing considerations early to avoid unexpected delays."
              },
              {
                title: "Choose Quality Materials",
                description: "Opt for durable, high-quality fixtures and pipes that will stand the test of time."
              },
              {
                title: "Work with Professionals",
                description: "Collaborate with experienced plumbers and contractors to ensure the work is done correctly and efficiently."
              },
              {
                title: "Consider Energy Efficiency",
                description: "Incorporate water-saving fixtures and appliances to reduce utility costs."
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact Melville's Plumbing today to schedule a consultation and learn how we can make your renovation stress-free and successful.
            </p>
            <Button 
              size="xxl"
              variant="secondary"
              className="group text-2xl px-12 py-8"
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

export default BathroomKitchenPage;
