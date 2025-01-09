import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BathroomKitchenPage = () => {
  return (
    <ServicePageLayout
      title="Bathroom & Kitchen Renovation Services in Windsor"
      description="Transform your bathroom or kitchen with Melville's Plumbing expert renovation services. From fixture upgrades to complete remodels, we bring your vision to life with quality craftsmanship and attention to detail."
    >
      <div className="container mx-auto px-4 pt-16">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Expert Bathroom & Kitchen Renovation Services
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Whether you're dreaming of a luxurious new bathroom or a modern, functional kitchen, Melville's Plumbing has the expertise to make it happen. Our comprehensive renovation services cover everything from initial design consultation to final installation, ensuring your project is completed to the highest standards.
          </p>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Renovation Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Bathroom Renovations",
                description: "Complete bathroom remodels, fixture upgrades, shower/tub installations, vanity replacements, and more."
              },
              {
                title: "Kitchen Renovations",
                description: "Sink installations, faucet upgrades, dishwasher hookups, garbage disposal systems, and plumbing relocations."
              },
              {
                title: "Custom Solutions",
                description: "Tailored designs and solutions to match your specific needs and preferences."
              },
              {
                title: "Project Management",
                description: "End-to-end project coordination, including permits, inspections, and timeline management."
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
                question: "How long does a typical renovation take?",
                answer: "The timeline varies depending on the scope of work. A basic bathroom renovation might take 1-2 weeks, while a complete kitchen remodel could take 3-4 weeks. We'll provide a detailed timeline during the consultation."
              },
              {
                question: "Do you handle all aspects of the renovation?",
                answer: "Yes, we manage all plumbing-related aspects of your renovation, including fixture selection, installation, and ensuring everything meets local building codes. We can also coordinate with other contractors if needed."
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
              Ready to Start Your Renovation Project?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today to schedule a consultation and take the first step toward your dream bathroom or kitchen.
            </p>
            <Button 
              size="xxl"  
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

export default BathroomKitchenPage;