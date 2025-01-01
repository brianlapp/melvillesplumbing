import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { CoreValues } from "@/components/about/CoreValues";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { CommunityCommitment } from "@/components/about/CommunityCommitment";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <main className="min-h-screen">
        <AboutHero />
        <OurStory />
        <CoreValues />
        <WhyChooseUs />
        <CommunityCommitment />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default AboutPage;