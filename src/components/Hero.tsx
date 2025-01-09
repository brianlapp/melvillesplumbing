import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url("/lovable-uploads/hero-2.jpg")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: '#030636b0' }} />
      
      <div className="container mx-auto px-4 py-12 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Melville's Plumbing – Your Trusted Plumber in Windsor
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Since 2012, we have been serving our community with honesty, reliability, and exceptional expertise. 
            Whether it's an emergency repair or a new plumbing installation, our skilled team is here to provide 
            solutions tailored to your needs.
          </p>
          <Link to="/contact">
            <Button 
              size="xxl" 
              className="bg-secondary hover:bg-green-700 text-white transition-transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};