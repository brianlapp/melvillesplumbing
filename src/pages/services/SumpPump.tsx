import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SumpPumpPage = () => {
  return (
    <ServicePageLayout
      title="Sump Pump Installation & Maintenance Services in Windsor"
      description="At Melville's Plumbing, we understand the importance of protecting your property from water damage. Our expert team provides comprehensive sump pump installation and maintenance services, ensuring your home remains dry and safe year-round."
      backgroundImage="/heros/sump-pump-service.png"
    >
      <div className="container mx-auto px-4 py-20">
        {/* What is a Sump Pump Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What is a Sump Pump and Why Do You Need One?
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            A sump pump is a device installed in the lowest part of a home, typically the basement, to remove water that collects in a sump basin. This water may come from rain, melting snow, or groundwater. Sump pumps protect your property by preventing water from flooding your basement, which can lead to costly repairs and health hazards like mold growth.
          </p>
        </section>

        {/* Our Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Sump Pump Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sump Pump Installation",
                description: "Whether you're installing a sump pump for the first time or upgrading an existing system, we provide expert installation tailored to your property's needs. Our team uses high-quality equipment and ensures seamless integration into your home's drainage system."
              },
              {
                title: "Sump Pump Maintenance",
                description: "Regular maintenance keeps your sump pump in top working condition. Our maintenance services include: Cleaning the sump basin, Checking and testing the pump's operation, Inspecting electrical connections and float switches, Ensuring the discharge line is clear and functioning."
              },
              {
                title: "Emergency Repairs",
                description: "If your sump pump fails, our emergency repair services are available to get your system back up and running quickly, minimizing water damage and stress."
              },
              {
                title: "Battery Backup Systems",
                description: "Power outages during storms can render your sump pump useless. We install battery backup systems to ensure your pump continues to protect your home even when the power is out."
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="group"
              asChild
            >
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Signs Your Sump Pump Needs Attention
          </h2>
          <ul className="space-y-4 text-gray-600 mb-8">
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              Unusual noises during operation
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              Visible rust or corrosion on the pump
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              Frequent cycling on and off
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              Water pooling despite the pump being active
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              Foul odors emanating from the sump basin
            </li>
          </ul>
          <p className="text-gray-600">
            If you notice any of these issues, it's time to call Melville's Plumbing for an inspection and repair.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Benefits of a Well-Maintained Sump Pump
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Prevents Flooding",
                description: "Keeps your basement dry and free from water damage."
              },
              {
                title: "Preserves Property Value",
                description: "Protects your home's foundation and structural integrity."
              },
              {
                title: "Reduces Health Risks",
                description: "Prevents mold growth and other water-related hazards."
              },
              {
                title: "Offers Peace of Mind",
                description: "Ensures you're prepared for heavy rain or storms."
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions About Sump Pump Installation & Maintenance
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "How do I know if I need a sump pump?",
                answer: (
                  <>
                    <p className="mb-4">You may need a sump pump if you experience:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Frequent basement flooding or dampness</li>
                      <li>Signs of water pooling around your foundation</li>
                      <li>A history of heavy rainfall or high water tables in your area</li>
                      <li>Finished basement areas you want to keep dry and protected</li>
                    </ul>
                    <p className="mt-4">Our experts can evaluate your property to determine if a sump pump is the right solution for your needs.</p>
                  </>
                )
              },
              {
                question: "What are the different types of sump pumps?",
                answer: (
                  <>
                    <p className="mb-4">There are two main types of sump pumps:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Submersible Sump Pumps:</strong> Installed below the waterline in the sump basin, submersible pumps are quieter and more efficient for heavy-duty water removal.</li>
                      <li><strong>Pedestal Sump Pumps:</strong> Positioned above the sump basin, pedestal pumps are easier to access for maintenance and are ideal for smaller basements with less severe flooding.</li>
                    </ul>
                  </>
                )
              },
              {
                question: "How often should I maintain my sump pump?",
                answer: (
                  <>
                    <p className="mb-4">Routine maintenance is key to ensuring your sump pump operates effectively when needed. We recommend:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Checking the pump every 3-6 months</li>
                      <li>Testing the system before rainy seasons</li>
                      <li>Scheduling a professional inspection and servicing at least once a year</li>
                    </ul>
                  </>
                )
              },
              {
                question: "What happens during a sump pump installation?",
                answer: (
                  <>
                    <p className="mb-4">Our installation process includes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Assessing your property's drainage needs</li>
                      <li>Selecting the right sump pump for your home</li>
                      <li>Preparing the sump basin and installing the pump</li>
                      <li>Testing the system to ensure proper operation</li>
                      <li>Providing guidance on maintenance and care</li>
                    </ul>
                  </>
                )
              },
              {
                question: "Can I install a sump pump myself?",
                answer: "While DIY installation may seem tempting, improper installation can lead to system failure and costly damage. Hiring professionals like Melville's Plumbing ensures your sump pump is installed correctly and meets all local building codes."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <div className="text-gray-600">{faq.answer}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <Button 
            size="lg" 
            className="group"
            asChild
          >
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default SumpPumpPage;