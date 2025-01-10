import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImageUrl = "/lovable-uploads/hero-3.png";
  
  useEffect(() => {
    // Preload the hero image
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImageUrl;
    document.head.appendChild(link);

    // Create an image object to track loading
    const img = new Image();
    img.src = heroImageUrl;
    img.onload = () => {
      setImageLoaded(true);
    };

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
    >
      {/* Blur-up placeholder */}
      <div 
        className="absolute inset-0 bg-gray-200 transition-opacity duration-500"
        style={{
          opacity: imageLoaded ? 0 : 1,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
          transform: 'scale(1.1)', // Slightly scale up to prevent blur edges
        }}
      />
      
      {/* Main hero image */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: imageLoaded ? 1 : 0,
          backgroundImage: `url("${heroImageUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay - maintained on top of both placeholder and main image */}
      <div className="absolute inset-0 bg-primary/70" />
      
      <div className="container mx-auto px-4 py-12 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-white bg-secondary/80 rounded-full text-sm font-medium">
            Professional Plumbing Services Since 2012
          </span>
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
              className="bg-secondary hover:bg-orange-700 text-white transition-transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};