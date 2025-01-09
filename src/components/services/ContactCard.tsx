import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactCard = () => {
  return (
    <div className="space-y-6 bg-primary rounded-lg p-8 text-white">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Contact Us for Expert Service
        </h3>
        <p className="text-gray-100 mb-6">
          Ready to schedule a service or get a free quote? Contact Melville's Plumbing today!
        </p>
      </div>

      <div className="space-y-4">
        <Button 
          size="lg" 
          variant="secondary"
          asChild 
          className="w-full hover:bg-secondary/90 transition-colors"
        >
          <Link to="/contact">Get In Touch</Link>
        </Button>
        
        <div className="space-y-3 pt-4 border-t border-white/20">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-secondary" />
            <p className="text-white font-semibold">
              Call/Text: <a href="tel:226-820-4264" className="hover:text-secondary transition-colors">226-820-4264</a>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-secondary" />
            <p className="text-white font-semibold">
              Email: <a href="mailto:melvillesplumbing@gmail.com" className="hover:text-secondary transition-colors">melvillesplumbing@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};