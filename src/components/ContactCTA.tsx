import { Button } from "@/components/ui/button";

export const ContactCTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Us Today!
          </h2>
          <p className="text-xl mb-8">
            Ready to experience the best plumbing services in Windsor? Contact us today for a free quote or emergency service!
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};