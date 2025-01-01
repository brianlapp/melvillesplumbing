import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

// Add this hidden form for Netlify form detection
const NetlifyFormDetectionHTML = () => (
  <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <input type="tel" name="phone" />
    <input type="text" name="address" />
    <textarea name="message"></textarea>
  </form>
);

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    // Use the native form submission for Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as any).toString(),
    })
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        form.reset();
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
    <section>
      <NetlifyFormDetectionHTML />
      {/* Hero Section */}
      <div 
        className="relative min-h-[30vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/hero-2.jpg")',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: '#030636D9' }} />
        
        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1 mb-4 text-white bg-green-600/80 rounded-full text-sm font-medium">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6">
              At Melville's Plumbing, we're here to help with all your plumbing needs. Whether you're dealing with an emergency, 
              planning a renovation, or just have questions about our services, our friendly and knowledgeable team is ready to assist you.
            </p>
            <p className="text-gray-200">
              We're just a call or click away! Reach out to us via phone, email, or by using our convenient contact form.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Contact Us</h2>
          <Card className="p-6">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Your Phone Number</Label>
                <Input type="tel" id="phone" name="phone" required placeholder="(226) 123-4567" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Your Address</Label>
                <Input type="text" id="address" name="address" placeholder="123 Main St, Windsor, ON" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Please describe how we can help you..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Submit Message
              </Button>
            </form>
          </Card>
        </div>

        <div className="text-center mb-12">
          <div className="bg-primary rounded-lg p-4 mb-6">
            <img 
              src="/lovable-uploads/6b4d1817-8c91-4db5-9784-737b0347e368.png" 
              alt="Company Logo" 
              className="mx-auto h-44 w-auto md:h-44 sm:h-32" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">Available 24/7 for emergencies</p>
            <a href="tel:226-820-2394">
              <Button variant="link" className="mt-4">
                226-820-2394
              </Button>
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">Quick Response</p>
            <a href="mailto:melvillesplumbing@gmail.com">
              <Button variant="link" className="mt-4">
                melvillesplumbing@gmail.com
              </Button>
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Clock className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <div className="text-gray-600">
              <p>Mon - Fri: 8am - 6pm</p>
              <p>Sat: 9am - 2pm</p>
              <p>Sun: Closed</p>
              <p className="mt-2 font-medium">24/7 Emergency Service</p>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Location & Service Area</h3>
            <div className="flex items-start gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Windsor, Ontario</p>
                <p className="text-gray-600 mt-2">We proudly serve Windsor and surrounding communities, including:</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Tecumseh</li>
                  <li>LaSalle</li>
                  <li>Amherstburg</li>
                  <li>And more!</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Emergency Services</h3>
            <p className="text-gray-600 mb-4">
              For emergency plumbing services, we're available 24/7. Don't hesitate to call us anytime you need urgent assistance.
            </p>
            <a href="tel:226-820-2394">
              <Button className="w-full">
                Call Now for Emergency Service
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};