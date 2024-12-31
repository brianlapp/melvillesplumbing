import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Services as ServicesList } from "@/components/Services";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/hero-2.jpg")',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: '#030636b0' }} />
        
        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 mb-6 text-white bg-green-600/80 rounded-full text-sm font-medium animate-fade-up">
              Professional Plumbing Services Since 2012
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Plumbing Services in Windsor
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Welcome to the Melville's Plumbing Services page! As Windsor's trusted plumbing experts, 
              we provide a full range of professional services to meet your residential and commercial 
              plumbing needs. Whether you're facing an emergency or planning a renovation, our experienced 
              team delivers reliable, high-quality solutions tailored to you. Since 2012, Melville's Plumbing 
              has been proudly serving Windsor and surrounding areas with honesty, skill, and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Melville's Plumbing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-4">
                <h3 className="font-semibold mb-2">✓ Experienced Team</h3>
                <p className="text-gray-600">With over a decade of hands-on experience, we bring expertise to every job.</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">✓ Honest & Reliable</h3>
                <p className="text-gray-600">Our reputation is built on trust and transparency.</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">✓ Locally Owned</h3>
                <p className="text-gray-600">We understand Windsor's unique plumbing needs and challenges.</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">✓ Guaranteed Satisfaction</h3>
                <p className="text-gray-600">We stand behind our work to ensure your peace of mind.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List Component */}
      <ServicesList />

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-xl mb-8">
                Ready to experience professional plumbing services? Contact us today for a consultation 
                or emergency service. We're here to help with all your plumbing needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p>226-820-2394</p>
                  <p className="text-sm">Available 24/7</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p>melvillesplumbing@gmail.com</p>
                  <p className="text-sm">Quick Response</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p>Mon - Fri: 8am - 6pm</p>
                  <p className="text-sm">24/7 Emergency Service</p>
                </div>
              </div>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Contact Us Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default ServicesPage;