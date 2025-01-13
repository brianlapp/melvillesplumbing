import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Settings, Camera, CheckCircle2, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactCard } from "@/components/services/ContactCard";

const DrainCleaningPage = () => {
  const faqItems = [
    {
      question: "What are the signs that I need professional drain cleaning?",
      answer: "Look for slow-draining sinks or tubs, frequent clogs in the same drains, gurgling sounds coming from pipes, unpleasant odors emanating from drains, and water backing up into sinks, tubs, or toilets. If you notice any of these issues, it's time to call Melville's Plumbing for professional drain cleaning services."
    },
    {
      question: "What methods do you use to clean drains?",
      answer: "We use various methods depending on the severity and location of the clog: Snaking/Augering for minor blockages, Camera Inspections to locate and diagnose blockages accurately, and Chemical-Free Solutions that are safe and eco-friendly for drain cleaning."
    },
    {
      question: "How can I prevent future drain clogs?",
      answer: "Here are some tips to keep your drains clear: Avoid pouring grease or oil down the sink, use drain screens to catch hair and debris, run hot water through the sink after each use, and schedule regular professional drain cleaning to prevent buildup."
    },
    {
      question: "How often should I have my drains professionally cleaned?",
      answer: "It depends on your plumbing usage and the age of your system. For most households, an annual drain cleaning is sufficient to prevent major issues. Homes with heavy usage or older plumbing may benefit from more frequent cleanings."
    },
    {
      question: "What should I do in case of a severe clog?",
      answer: "For severe clogs that cause water backup or flooding, follow these steps: Stop using the affected plumbing fixtures, turn off the water supply to prevent further damage, and call Melville's Plumbing for immediate assistance. Our emergency plumbing services are available 24/7."
    }
  ];

  return (
    <ServicePageLayout
      title="Professional Drain Cleaning & Unclogging Services in Windsor"
      description="Clogged drains are a common and frustrating issue for many homeowners and businesses in Windsor. Whether it's a slow-draining sink or a completely blocked sewer line, these problems can disrupt your daily routine and lead to more severe plumbing issues if left untreated. At Melville's Plumbing, we specialize in professional drain cleaning and unclogging services to ensure your plumbing system functions smoothly."
      backgroundImage="/heros/drain-cleaning.png"
      faqItems={faqItems}
    >
      <div className="container mx-auto px-4 py-20">
        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Drain Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wrench,
                title: "Kitchen Drains",
                description: "Removal of grease, soap, and food debris that accumulate over time."
              },
              {
                icon: Settings,
                title: "Bathroom Drains",
                description: "Clearing blockages caused by hair, soap scum, and other materials."
              },
              {
                icon: Camera,
                title: "Sewer Lines",
                description: "Thorough cleaning of main sewer lines to prevent backups."
              },
              {
                icon: CheckCircle2,
                title: "Outdoor Drains",
                description: "Clearing leaves, dirt, and other debris from exterior drains and gutters."
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
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg" 
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
        </section>

        {/* Why Choose Us Section */}
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

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Common Questions About Drain Cleaning Services
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-8">
              <Button 
                size="lg" 
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
          </div>
        </section>

        {/* Additional Information Sections */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">The Importance of Professional Drain Cleaning</h3>
              <p className="text-gray-600">
                Attempting to clear clogs with DIY methods can often worsen the problem or damage your plumbing system. 
                Professional drain cleaning ensures the blockage is thoroughly removed and helps identify underlying issues 
                like pipe damage or tree root intrusion.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Drain Cleaning for Residential & Commercial Properties</h3>
              <p className="text-gray-600">
                We serve both residential and commercial clients in Windsor and surrounding areas. From small homes to 
                large businesses, our team has the expertise and equipment to handle jobs of any size.
              </p>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Choosing Melville's Plumbing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Long-Term Solutions",
                description: "We don't just fix the symptom; we address the root cause of the problem."
              },
              {
                title: "Affordable Pricing",
                description: "Transparent and competitive rates with no hidden fees."
              },
              {
                title: "Customer Satisfaction",
                description: "We're committed to providing exceptional service and ensuring your complete satisfaction."
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Serving Windsor and Beyond
              </h2>
              <p className="text-gray-600 text-center">
                Melville's Plumbing proudly serves Windsor and the surrounding communities, including Tecumseh, 
                LaSalle, Amherstburg, and more. Our local expertise allows us to provide tailored solutions for 
                the unique plumbing challenges in our region.
              </p>
            </Card>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="bg-primary/5 rounded-lg p-8 my-20">
          <div className="max-w-3xl mx-auto">
            <ContactCard />
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
};

export default DrainCleaningPage;
