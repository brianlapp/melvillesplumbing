import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { DrainCleaningServices } from "@/components/services/drain-cleaning/DrainCleaningServices";
import { DrainCleaningFeatures } from "@/components/services/drain-cleaning/DrainCleaningFeatures";
import { DrainCleaningFAQ } from "@/components/services/drain-cleaning/DrainCleaningFAQ";
import { Card } from "@/components/ui/card";
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
        <DrainCleaningServices />
        <DrainCleaningFeatures />
        <DrainCleaningFAQ />

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