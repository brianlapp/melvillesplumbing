import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ServicesList } from "./services/ServicesList";
import { ServiceFeatures } from "./services/ServiceFeatures";
import { ContactCard } from "./services/ContactCard";

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
            Comprehensive Plumbing Services in Windsor
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Welcome to the Melville's Plumbing Services page! As Windsor's trusted plumbing experts, 
            we provide a full range of professional services to meet your residential and commercial 
            plumbing needs. Whether you're facing an emergency or planning a renovation, our experienced 
            team delivers reliable, high-quality solutions tailored to you.
          </p>
          
          <ServiceFeatures />
          
          <Button size="lg" asChild className="mb-12">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </motion.div>

        <ServicesList />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          {/* Get In Touch Card */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <ContactCard />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};