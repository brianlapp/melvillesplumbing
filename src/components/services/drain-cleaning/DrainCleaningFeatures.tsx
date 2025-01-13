import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const DrainCleaningFeatures = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Why Choose Melville's Plumbing for Drain Cleaning?
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          {
            title: "Experienced Professionals",
            description: "With over a decade of experience, our team has the expertise to tackle even the most stubborn clogs."
          },
          {
            title: "Advanced Equipment",
            description: "We use state-of-the-art tools and techniques, including hydro-jetting and camera inspections, to clear blockages effectively."
          },
          {
            title: "Prompt Service",
            description: "We understand the urgency of a clogged drain and provide fast, reliable solutions."
          },
          {
            title: "Eco-Friendly Solutions",
            description: "Our methods prioritize safety and environmental responsibility."
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-8 h-full hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};