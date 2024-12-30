import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Melville's Plumbing
          </h2>
          <p className="text-gray-600 mb-8">
            At Melville's Plumbing, we pride ourselves on delivering exceptional service with honesty, 
            reliability, and unmatched skill. Reis Melville, a seasoned plumber since 2012, leads a team 
            dedicated to getting the job done right the first time. Whether it's a plumbing emergency or 
            a planned renovation, we're here to help.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};