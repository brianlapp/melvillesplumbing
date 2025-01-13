import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FAQ } from "@/components/FAQ";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MaintenanceTips } from "@/components/MaintenanceTips";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

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
      <WhyChooseUs />
      <FAQ />
      <MaintenanceTips />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;