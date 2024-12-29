import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/lovable-uploads/cta-bg-1.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-white bg-green-600 rounded-full text-sm font-medium animate-fade-up">
            Professional Plumbing Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
            Expert Plumbing Solutions for Your Home
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-up">
            Available 24/7 for all your plumbing needs
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Emergency Service
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-500 hover:bg-white/20">
              Get a Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};