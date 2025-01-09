import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="h-4 w-4" />
                  <a href="tel:226-820-2394" className="hover:underline">226-820-2394</a>
                </div>
                <div className="flex items-center gap-2 justify-center">
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
              <div className="flex flex-col space-y-2">
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
          </div>
        </div>
      </footer>
      <div className="py-6 text-center text-gray-600 bg-white">
        <p className="text-lg font-medium mb-4">Honest. Reliable. Skilled. Since 2012.</p>
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://www.facebook.com/profile.php?id=61552602717962" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
        <p>© 2024 Melville's Plumbing. All rights reserved.</p>
      </div>
    </>
  );
};