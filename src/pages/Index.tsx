import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Gallery />
      <Contact />
    </motion.div>
  );
};

export default Index;