import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Heart, Shield, Star, Users, CheckCircle, Building, HomeIcon, ThumbsUp } from "lucide-react";

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
        <section 
          className="relative min-h-[30vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: 'url("/lovable-uploads/hero-2.jpg")',
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: '#030636D9' }} />
          
          <div className="container mx-auto px-4 py-12 md:py-32 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1 mb-6 text-white bg-green-600/80 rounded-full text-sm font-medium">
                Trusted Plumbing Experts in Windsor Since 2012
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                Welcome to Melville's Plumbing, Windsor's trusted name in plumbing services. 
                Since 2012, we've been delivering honest, reliable, and skilled plumbing 
                solutions to homes and businesses throughout Windsor and the surrounding areas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-8">
                  Founded by Reis Melville, Melville's Plumbing began with a mission to provide quality 
                  plumbing services that customers can trust. With over a decade of experience in the 
                  industry, Reis has built a reputation for integrity, professionalism, and a commitment 
                  to excellence.
                </p>
                <div className="relative">
                  <img
                    src="/lovable-uploads/IMG_8857.jpg"
                    alt="Melville's Plumbing Work"
                    className="rounded-lg w-full object-cover"
                  />
                  <svg
                    className="absolute -bottom-4 -right-4 -z-10 text-blue-50"
                    width="196"
                    height="196"
                    viewBox="0 0 196 196"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M196 0V196H0C0 87.775 87.775 0 196 0Z" />
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative mt-8 md:mt-0"
              >
                <img
                  src="/lovable-uploads/IMG_8960.jpeg"
                  alt="Melville's Plumbing Team"
                  className="rounded-lg w-full object-cover"
                />
                <svg
                  className="absolute -top-4 -left-4 -z-10 text-blue-50"
                  width="196"
                  height="196"
                  viewBox="0 0 196 196"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V196H196C196 87.775 108.225 0 0 0Z" />
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <motion.section 
          className="py-16 bg-blue-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
          </div>
        </motion.section>

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

        <Footer />
      </main>
    </motion.div>
  );
};

export default AboutPage;
