import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url("/lovable-uploads/cta-bg-1.jpg")',
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
          <span className="inline-block px-4 py-1 mb-6 text-white bg-green-600/80 rounded-full text-sm font-medium animate-fade-up">
            Trusted Plumbing Experts in Windsor Since 2012
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Melville's Plumbing
          </h1>
          <p className="text-xl text-gray-200 mb-2">
            Your Trusted Plumbing Experts in Windsor, Ontario
          </p>
          <p className="text-lg text-gray-300 mb-6">Since 2012</p>
          <p className="text-gray-200 mb-8">
            Welcome to Melville's Plumbing! Owned and operated by Reis Melville, we're Windsor's trusted plumbing company. 
            With over a decade of experience since 2012, our honest, reliable, and highly skilled team is here to handle all your plumbing needs.
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white transition-transform hover:scale-105"
          >
            Get A Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};