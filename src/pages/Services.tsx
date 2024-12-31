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
            <p className="text-xl text-gray-200 mb-8">
              Welcome to the Melville's Plumbing Services page! As Windsor's trusted plumbing experts, 
              we provide a full range of professional services to meet your residential and commercial 
              plumbing needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto mb-12"
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

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving Windsor and Beyond
            </h2>
            <p className="text-gray-600 mb-8">
              Melville's Plumbing proudly serves Windsor and surrounding communities. 
              We understand the unique plumbing challenges in our region, and we're here 
              to provide personalized solutions that last.
            </p>
            <p className="text-gray-600 mb-8">
              <strong>Local Areas Served:</strong> Windsor, Tecumseh, LaSalle, Amherstburg, and more.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default ServicesPage;