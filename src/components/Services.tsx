import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ServicesList } from "./services/ServicesList";
import { ServiceFeatures } from "./services/ServiceFeatures";
import { LocationsCard } from "./services/LocationsCard";
import { ContactCard } from "./services/ContactCard";

export const Services = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Plumbing Services in Windsor
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8">
            Welcome to the Melville's Plumbing Services page! As Windsor's trusted plumbing experts, 
            we provide a full range of professional services to meet your residential and commercial 
            plumbing needs. Whether you're facing an emergency or planning a renovation, our experienced 
            team delivers reliable, high-quality solutions tailored to you.
          </p>
          
          <ServiceFeatures />
          
          <Button size="lg" asChild className="mb-8 md:mb-12 bg-secondary">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </motion.div>

        <ServicesList />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <Card className="bg-white shadow-lg">
            <CardContent className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
              {/* Left Section */}
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                    Serving Windsor and Beyond
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Melville's Plumbing proudly serves Windsor and surrounding communities. 
                    We understand the unique plumbing challenges in our region, and we're here 
                    to provide personalized solutions that last.
                  </p>
                </div>
                
                <LocationsCard />
              </div>

              {/* Right Section */}
              <ContactCard />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};