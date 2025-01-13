import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const heroImageUrl = "/lovable-uploads/hero-3.png";
  const fallbackImageUrl = "/lovable-uploads/hero-2.jpg";
  
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageError ? fallbackImageUrl : heroImageUrl;
    document.head.appendChild(link);

    const img = new Image();
    img.src = imageError ? fallbackImageUrl : heroImageUrl;
    
    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      console.error('Error loading primary image, falling back to secondary image');
      setImageError(true);
    };

    return () => {
      document.head.removeChild(link);
    };
  }, [imageError]);

  const currentImageUrl = imageError ? fallbackImageUrl : heroImageUrl;

  return (
    <section 
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      role="banner"
      aria-label="Welcome to Melville's Plumbing"
    >
      <div 
        className="absolute inset-0 bg-gray-200 transition-opacity duration-500"
        style={{
          opacity: imageLoaded ? 0 : 1,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
        }}
      />
      
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: imageLoaded ? 1 : 0,
          backgroundImage: `url("${currentImageUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-primary/70" />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-4 sm:mb-6 text-white bg-secondary/80 rounded-full text-xs sm:text-sm font-medium">
            Professional Plumbing Services Since 2012
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
            Welcome to Melville's Plumbing – Your Trusted Plumber in Windsor
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8">
            Since 2012, we have been serving our community with honesty, reliability, and exceptional expertise. 
            Whether it's an emergency repair or a new plumbing installation, our skilled team is here to provide 
            solutions tailored to your needs.
          </p>
          <Link to="/contact">
            <Button 
              size="xxl" 
              className="bg-secondary hover:bg-orange-700 text-white transition-transform hover:scale-105 w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};