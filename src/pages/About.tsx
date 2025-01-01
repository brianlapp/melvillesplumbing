import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Heart, Shield, Star, Users, CheckCircle, Building, HomeIcon, ThumbsUp } from "lucide-react";
import { EmergencyCard } from "@/components/EmergencyCard";
import { ContactCTA } from "@/components/ContactCTA";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <main className="min-h-screen">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are a dedicated plumbing service provider with years of experience in the industry.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Story</h3>
                <p className="text-gray-600 text-center">
                  Our journey began in 2012, and since then, we have been committed to providing top-notch plumbing services.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Core Values</h3>
                <p className="text-gray-600 text-center">
                  We believe in honesty, reliability, and quality workmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team is dedicated to providing the best plumbing solutions tailored to your needs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p className="text-gray-600 text-center">
                  Our skilled professionals have years of experience in the plumbing industry.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Building className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Locally Owned</h3>
                <p className="text-gray-600 text-center">
                  We understand the unique plumbing needs of our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <EmergencyCard />
        <ContactCTA />
        <Footer />
      </main>
    </motion.div>
  );
};

export default AboutPage;