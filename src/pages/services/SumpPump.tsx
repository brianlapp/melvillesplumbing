import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SumpPumpPage = () => {
  return (
    <ServicePageLayout
      title="Sump Pump Installation & Maintenance Services in Windsor"
      description="At Melville's Plumbing, we understand the importance of protecting your property from water damage. Our expert team provides comprehensive sump pump installation and maintenance services, ensuring your home remains dry and safe year-round."
    >
      <div className="container mx-auto px-4 pt-16">
        {/* What is a Sump Pump Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is a Sump Pump and Why Do You Need One?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            A sump pump is a device installed in the lowest part of a home, typically the basement, to remove water that collects in a sump basin. This water may come from rain, melting snow, or groundwater. Sump pumps protect your property by preventing water from flooding your basement, which can lead to costly repairs and health hazards like mold growth.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6">
            {[
              {
                question: "How do I know if I need a sump pump?",
                answer: (
                  <div>
                    <p className="mb-4">You may need a sump pump if you experience:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Frequent basement flooding or dampness</li>
                      <li>Signs of water pooling around your foundation</li>
                      <li>A history of heavy rainfall or high water tables in your area</li>
                      <li>Finished basement areas you want to keep dry and protected</li>
                    </ul>
                  </div>
                )
              },
              {
                question: "What are the different types of sump pumps?",
                answer: (
                  <div>
                    <p className="mb-4">There are two main types of sump pumps:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Submersible Sump Pumps: Installed below the waterline in the sump basin, these pumps are quieter and more efficient for heavy-duty water removal.</li>
                      <li>Pedestal Sump Pumps: Positioned above the sump basin, these pumps are easier to access for maintenance and are ideal for smaller basements with less severe flooding.</li>
                    </ul>
                  </div>
                )
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <div className="text-gray-600">{faq.answer}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Sump Pump Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Sump Pump Installation",
                description: "Whether you're installing a sump pump for the first time or upgrading an existing system, we provide expert installation tailored to your property's needs."
              },
              {
                title: "Sump Pump Maintenance",
                description: "Regular maintenance keeps your sump pump in top working condition, including cleaning, testing, and inspecting all components."
              },
              {
                title: "Emergency Repairs",
                description: "If your sump pump fails, our emergency repair services are available to get your system back up and running quickly."
              },
              {
                title: "Battery Backup Systems",
                description: "We install battery backup systems to ensure your pump continues to protect your home even during power outages."
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-16 bg-primary text-white rounded-lg">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Contact Us for Sump Pump Services
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don't wait until it's too late. Protect your home from water damage with professional sump pump installation and maintenance.
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

export default SumpPumpPage;
