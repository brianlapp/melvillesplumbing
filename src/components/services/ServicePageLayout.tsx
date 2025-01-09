import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServicePageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  backgroundImage?: string;
}

export const ServicePageLayout = ({
  children,
  title,
  description,
  backgroundImage = "/lovable-uploads/hero-2.jpg",
}: ServicePageLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <span className="inline-block px-6 py-2 mb-6 text-white bg-secondary/80 rounded-full text-sm font-medium animate-fade-up">
              Professional Plumbing Services Since 2012
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow">
        {children}
      </div>

      <Contact />
      <Footer />
    </motion.div>
  );
};