import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Contact } from "@/components/Contact";

const SumpPumpPage = () => {
  return (
    <ServicePageLayout
      title="Sump Pump Installation & Maintenance Services in Windsor"
      description="At Melville's Plumbing, we understand the importance of protecting your property from water damage. Our expert team provides comprehensive sump pump installation and maintenance services, ensuring your home remains dry and safe year-round."
      backgroundImage="/heros/sump-pump-service.png"
    >
      <div className="container mx-auto px-4 py-20">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What is a Sump Pump and Why Do You Need One?
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-4xl mx-auto">
            A sump pump is a device installed in the lowest part of a home, typically the basement, to remove water that collects in a sump basin. This water may come from rain, melting snow, or groundwater. Sump pumps protect your property by preventing water from flooding your basement, which can lead to costly repairs and health hazards like mold growth.
          </p>
        </motion.section>

        {/* Our Services Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Sump Pump Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="xl" 
              variant="secondary"
              className="group"
              asChild
            >
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* Warning Signs Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Signs Your Sump Pump Needs Attention
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 text-gray-600 mb-8">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Unusual noises during operation</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Visible rust or corrosion on the pump</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Frequent cycling on and off</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Water pooling despite the pump being active</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>Foul odors emanating from the sump basin</span>
              </li>
            </ul>
            <p className="text-gray-600 text-center">
              If you notice any of these issues, it's time to call Melville's Plumbing for an inspection and repair.
            </p>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefits of a Well-Maintained Sump Pump
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions About Sump Pump Installation & Maintenance
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">How do I know if I need a sump pump?</h3>
              <p className="text-gray-600 mb-4">You may need a sump pump if you experience:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Frequent basement flooding or dampness</li>
                <li>Signs of water pooling around your foundation</li>
                <li>A history of heavy rainfall or high water tables in your area</li>
                <li>Finished basement areas you want to keep dry and protected</li>
              </ul>
              <p className="mt-4">Our experts can evaluate your property to determine if a sump pump is the right solution for your needs.</p>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">What are the different types of sump pumps?</h3>
              <p className="text-gray-600 mb-4">There are two main types of sump pumps:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Submersible Sump Pumps:</strong> Installed below the waterline in the sump basin, submersible pumps are quieter and more efficient for heavy-duty water removal.</li>
                <li><strong>Pedestal Sump Pumps:</strong> Positioned above the sump basin, pedestal pumps are easier to access for maintenance and are ideal for smaller basements with less severe flooding.</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">How often should I maintain my sump pump?</h3>
              <p className="text-gray-600 mb-4">Routine maintenance is key to ensuring your sump pump operates effectively when needed. We recommend:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Checking the pump every 3-6 months</li>
                <li>Testing the system before rainy seasons</li>
                <li>Scheduling a professional inspection and servicing at least once a year</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">What happens during a sump pump installation?</h3>
              <p className="text-gray-600 mb-4">Our installation process includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Assessing your property's drainage needs</li>
                <li>Selecting the right sump pump for your home</li>
                <li>Preparing the sump basin and installing the pump</li>
                <li>Testing the system to ensure proper operation</li>
                <li>Providing guidance on maintenance and care</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Can I install a sump pump myself?</h3>
              <p className="text-gray-600">While DIY installation may seem tempting, improper installation can lead to system failure and costly damage. Hiring professionals like Melville's Plumbing ensures your sump pump is installed correctly and meets all local building codes.</p>
            </Card>
          </div>
        </motion.section>

        {/* Why Choose Us & Service Area Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Melville's Plumbing?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {[
              {
                title: "Experience",
                description: "Over a decade of expertise in plumbing and drainage solutions."
              },
              {
                title: "Local Knowledge",
                description: "We understand Windsor's unique weather and soil conditions."
              },
              {
                title: "Quality Service",
                description: "Our team is committed to delivering reliable, high-quality work."
              },
              {
                title: "Customer Satisfaction",
                description: "We're dedicated to ensuring your home is safe and dry."
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-6">Serving Windsor and Beyond</h3>
            <div className="flex items-start gap-4 justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-gray-600 text-center">
                Melville's Plumbing proudly serves Windsor and the surrounding communities, including Tecumseh, LaSalle, Lakeshore, and Amherstburg. Our local expertise ensures tailored solutions for your property's needs.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Contact Us for Sump Pump Services</h3>
            <p className="text-gray-600 mb-8">
              Don't wait until it's too late. Protect your home from water damage with professional sump pump installation and maintenance. Contact Melville's Plumbing today to schedule a consultation or service appointment.
            </p>
            <Button 
              size="xl"
              variant="secondary"
              className="group"
              asChild
            >
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>

      {/* Contact Component */}
      <Contact />
    </ServicePageLayout>
  );
};

export default SumpPumpPage;