import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Top Questions About Plumbing Services in Windsor
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger>What plumbing services do you offer?</AccordionTrigger>
              <AccordionContent>
                At Melville's Plumbing, we cover a wide range of services to ensure your plumbing system runs smoothly. 
                Our offerings include emergency plumbing, drain cleaning, water heater installation and repair, sump pump 
                installation, bathroom and kitchen renovations, and more. We also specialize in new construction plumbing 
                and backflow prevention device installation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How quickly can you respond to plumbing emergencies?</AccordionTrigger>
              <AccordionContent>
                We understand the urgency of plumbing emergencies. That's why our team is available to provide prompt, 
                efficient solutions to minimize damage and restore your system as quickly as possible. Call us anytime 
                for emergency assistance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why choose Melville's Plumbing over other plumbers in Windsor?</AccordionTrigger>
              <AccordionContent>
                Our experience, commitment to quality, and customer-first approach set us apart. With over a decade of 
                experience, we deliver services that are both reliable and affordable. Our team is licensed, insured, 
                and dedicated to providing exceptional workmanship.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer free estimates?</AccordionTrigger>
              <AccordionContent>
                Yes! We provide free, no-obligation estimates to help you make informed decisions. Whether you're planning 
                a renovation or need a quick repair, we're here to guide you every step of the way.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I know if I need professional plumbing help?</AccordionTrigger>
              <AccordionContent>
                If you're experiencing persistent leaks, clogged drains, inconsistent water pressure, or any other plumbing 
                issue, it's time to call a professional. Don't wait for small problems to escalate into costly repairs—contact 
                Melville's Plumbing for expert help.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-orange-700">Get In Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};