import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Heart, Shield, Star, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Melville's Plumbing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Founded by Reis Melville, Melville's Plumbing began with a mission to provide 
                quality plumbing services that customers can trust. With over a decade of experience 
                in the industry, Reis has built a reputation for integrity, professionalism, and a 
                commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center p-6">
                <CardHeader>
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Honesty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Transparency in our work and communication.
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
                    We're there when you need us most.
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
                    With years of experience, our team delivers superior results.
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
                    Your satisfaction is our priority.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-gray-600 mb-8">
                We're proud to have a team of skilled professionals who share a passion for 
                delivering exceptional service.
              </p>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Community Commitment</h2>
              <p className="text-gray-600 mb-8">
                As a locally owned business, we understand Windsor's unique plumbing challenges 
                and are dedicated to serving our community.
              </p>
              <Button size="lg">
                Contact us today
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </motion.div>
  );
};

export default AboutPage;