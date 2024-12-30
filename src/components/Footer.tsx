import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:226-820-2394" className="hover:underline">226-820-2394</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:melvillesplumbing@gmail.com" className="hover:underline">melvillesplumbing@gmail.com</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
              <p>Saturday: 9:00 AM – 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <Link to="/">
                <Button variant="link" className="text-white p-0 h-auto hover:underline">Home</Button>
              </Link>
              <Link to="/services">
                <Button variant="link" className="text-white p-0 h-auto hover:underline">Services</Button>
              </Link>
              <Link to="/about">
                <Button variant="link" className="text-white p-0 h-auto hover:underline">About Us</Button>
              </Link>
              <Link to="/contact">
                <Button variant="link" className="text-white p-0 h-auto hover:underline">Contact</Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-sm">Honest. Reliable. Skilled. Since 2012.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};