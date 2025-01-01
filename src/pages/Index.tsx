import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { EmergencyCard } from "@/components/EmergencyCard";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <EmergencyCard />
      <Footer />
    </motion.div>
  );
};

export default Index;