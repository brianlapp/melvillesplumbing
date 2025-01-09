import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const EmergencyPlumbing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Emergency Plumbing Services
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Plumbing emergencies can happen at any time, and when they do, you need a team you can count on. 
              We offer 24/7 emergency plumbing services to address urgent issues like burst pipes, major leaks, 
              and sewer backups. No matter the time, we'll be there to protect your property and restore your plumbing.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Emergency Services Include:
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  • Burst Pipe Repair
                </li>
                <li className="flex items-start gap-2">
                  • Major Leak Detection and Repair
                </li>
                <li className="flex items-start gap-2">
                  • Sewer Backup Resolution
                </li>
                <li className="flex items-start gap-2">
                  • Water Damage Prevention
                </li>
                <li className="flex items-start gap-2">
                  • 24/7 Emergency Response
                </li>
              </ul>
            </div>

            <div className="flex gap-4 mb-12">
              <Button size="lg" asChild>
                <Link to="/contact">Get Emergency Help</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </motion.div>
  );
};

export default EmergencyPlumbing;