import { CheckCircle, Building, HomeIcon, ThumbsUp } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Experienced Leadership",
      description: "Reis Melville's hands-on experience since 2012 ensures every project is managed with expertise and care."
    },
    {
      icon: Building,
      title: "Comprehensive Services",
      description: "From emergency repairs to renovations and new construction, we handle all aspects of plumbing."
    },
    {
      icon: HomeIcon,
      title: "Community Focused",
      description: "As a locally owned business, we understand Windsor's unique plumbing challenges."
    },
    {
      icon: ThumbsUp,
      title: "Guaranteed Satisfaction",
      description: "We're committed to getting the job done right the first time."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex items-start space-x-4">
              <reason.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};