import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section 
      className="relative min-h-[30vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url("/lovable-uploads/hero-2.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-primary/75" />
      
      <div className="container mx-auto px-4 py-12 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-white bg-green-600/80 rounded-full text-sm font-medium">
            Trusted Plumbing Experts in Windsor Since 2012
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            Welcome to Melville's Plumbing, Windsor's trusted name in plumbing services. 
            Since 2012, we've been delivering honest, reliable, and skilled plumbing 
            solutions to homes and businesses throughout Windsor and the surrounding areas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};