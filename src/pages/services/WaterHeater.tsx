import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WaterHeaterPage = () => {
  return (
    <ServicePageLayout
      title="Water Heater Services in Windsor"
      description="From installation to repairs and maintenance, Melville's Plumbing provides comprehensive water heater services to ensure your home always has reliable hot water. Our expert team works with all types and brands of water heaters."
    >
      <div className="container mx-auto px-4 pt-16">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional Water Heater Services
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Your water heater is essential for daily comfort and convenience. At Melville's Plumbing, we specialize in all aspects of water heater service, from new installations to maintenance and repairs. Our experienced technicians work with both traditional tank and tankless water heaters to ensure your home has reliable hot water when you need it.
          </p>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Water Heater Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Installation Services",
                description: "Expert installation of new water heaters, including both traditional tank and tankless systems."
              },
              {
                title: "Repair & Maintenance",
                description: "Prompt repair services and regular maintenance to extend your water heater's lifespan."
              },
              {
                title: "Replacement Services",
                description: "Professional guidance on choosing the right replacement when it's time to upgrade."
              },
              {
                title: "Emergency Services",
                description: "24/7 emergency response for urgent water heater issues."
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6">
            {[
              {
                question: "How do I know if I need a new water heater?",
                answer: "Common signs include: age over 10 years, rusty water, unusual noises, leaks, or inconsistent heating. Our technicians can assess your unit and recommend the best course of action."
              },
              {
                question: "Tank vs. Tankless: Which is right for me?",
                answer: "The choice depends on factors like household size, usage patterns, and budget. Tank heaters are more traditional and cost-effective upfront, while tankless systems offer endless hot water and long-term energy savings. We can help you make the best choice for your needs."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-16 bg-primary text-white rounded-lg">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Need Water Heater Service?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don't wait until you're left in cold water. Contact us today for expert water heater services.
            </p>
            <Button 
              size="lg"  
              variant="secondary" 
              className="group text-2xl px-12 py-8"
              asChild
            >
              <Link to="/contact">
                Get In Touch
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