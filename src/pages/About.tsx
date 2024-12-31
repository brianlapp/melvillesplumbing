import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Heart, Shield, Star, Users, CheckCircle, Building, HomeIcon, ThumbsUp } from "lucide-react";
import { Contact } from "@/components/Contact";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Melville's Plumbing
              </h1>
              <p className="text-xl text-gray-600">
                Windsor's trusted name in plumbing services since 2012, delivering honest, reliable, 
                and skilled plumbing solutions to homes and businesses throughout Windsor and the surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-8">
                Founded by Reis Melville, Melville's Plumbing began with a mission to provide quality 
                plumbing services that customers can trust. With over a decade of experience in the 
                industry, Reis has built a reputation for integrity, professionalism, and a commitment 
                to excellence. Today, our team embodies those same values, striving to exceed 
                expectations with every job we take on.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Honesty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Transparency in our work and communication is at the heart of what we do.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We're there when you need us most, offering prompt and dependable service.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Skill</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    With years of experience and continuous training, our team delivers superior results.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Customer Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your satisfaction is our priority. We work with you every step of the way.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experienced Leadership</h3>
                  <p className="text-gray-600">
                    Reis Melville's hands-on experience since 2012 ensures every project is managed with expertise and care.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Building className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Services</h3>
                  <p className="text-gray-600">
                    From emergency repairs to renovations and new construction, we handle all aspects of plumbing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <HomeIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
                  <p className="text-gray-600">
                    As a locally owned business, we understand Windsor's unique plumbing challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <ThumbsUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Guaranteed Satisfaction</h3>
                  <p className="text-gray-600">
                    We're committed to getting the job done right the first time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Commitment Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to the Community</h2>
              <p className="text-gray-600 mb-8">
                We're more than just a plumbing company; we're a part of the Windsor community. 
                We're committed to supporting local homeowners and businesses with dependable 
                plumbing services and building long-lasting relationships based on trust and respect.
              </p>
              <p className="text-gray-600">
                As Melville's Plumbing continues to grow, we remain focused on our mission to 
                provide top-quality plumbing services while staying true to our core values. 
                We're excited to serve Windsor and the surrounding areas for many years to come.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
        <Footer />
      </main>
    </motion.div>
  );
};

export default AboutPage;