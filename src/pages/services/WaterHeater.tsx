import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Settings, Plug } from "lucide-react";
import { motion } from "framer-motion";

const WaterHeaterPage = () => {
  return (
    <ServicePageLayout
      title="Water Heater Installation & Repair Services in Windsor"
      description="When it comes to reliable hot water for your home or business, having a well-maintained and efficient water heater is essential. With over a decade of experience, we ensure that your water heating system operates efficiently and meets your household's needs."
      backgroundImage="/heros/water-heater-service.png"
    >
      <div className="container mx-auto px-4 py-20">
        {/* Why Choose Us Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Melville's Plumbing for Water Heater Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expertise You Can Trust",
                description: "With over 10 years of plumbing experience, our team delivers top-quality service."
              },
              {
                title: "Prompt & Reliable",
                description: "Whether you need a repair or a new installation, we're here to help quickly and efficiently."
              },
              {
                title: "Comprehensive Solutions",
                description: "We handle all types of water heaters, including tank and tankless models."
              },
              {
                title: "Satisfaction Guaranteed",
                description: "Your comfort and convenience are our top priorities."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Water Heater Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Settings,
                title: "Installation",
                description: "Expert installation of new water heaters, including both traditional tank and tankless systems."
              },
              {
                icon: Wrench,
                title: "Repairs",
                description: "Professional diagnosis and repair of all water heater issues, from minor fixes to major repairs."
              },
              {
                icon: Plug,
                title: "Maintenance",
                description: "Regular maintenance services to extend your water heater's lifespan and prevent unexpected breakdowns."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Common Questions About Water Heater Installation & Repair
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How do I know if I need to replace my water heater?",
                answer: "Signs include age over 8-12 years, inefficiency, leaks, rusty water, or frequent repairs. If you notice these signs, it may be time for a replacement."
              },
              {
                question: "What are the benefits of upgrading to a tankless water heater?",
                answer: "Tankless water heaters offer energy efficiency, space-saving design, unlimited hot water supply, and typically have a longer lifespan than traditional models."
              },
              {
                question: "How long does it take to install a water heater?",
                answer: "Traditional tank models typically take 2-3 hours, while tankless models may take 4-6 hours or longer due to additional requirements."
              },
              {
                question: "How can I maintain my water heater?",
                answer: "Regular maintenance includes annual tank flushing, anode rod inspection, leak checks, and professional inspections to ensure optimal performance."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-primary text-white rounded-lg mb-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Expert Water Heater Service?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don't let water heater issues disrupt your daily life. Contact us today for professional installation, repair, or maintenance services.
            </p>
            <Button 
              size="xxl"
              variant="secondary"
              className="group"
              asChild
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default WaterHeaterPage;