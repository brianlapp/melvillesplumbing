import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const DrainCleaningFAQ = () => {
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
  );
};