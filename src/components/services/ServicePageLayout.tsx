import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  title: string;
  description: string;
  backgroundImage: string;
  children: React.ReactNode;
  faqItems?: FAQItem[];
}

export const ServicePageLayout = ({
  title,
  description,
  backgroundImage,
  children,
  faqItems,
}: ServicePageLayoutProps) => {
  const location = useLocation();
  const currentUrl = `https://melvillesplumbing.ca${location.pathname}`;
  const imageUrl = `https://melvillesplumbing.ca${backgroundImage}`;

  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://melvillesplumbing.ca"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://melvillesplumbing.ca/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": currentUrl
      }
    ]
  };

  // Generate service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Melville's Plumbing",
      "image": "https://melvillesplumbing.ca/lovable-uploads/IMG_8857.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Windsor",
        "addressRegion": "Ontario",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "42.3149",
        "longitude": "-83.0364"
      },
      "url": "https://melvillesplumbing.ca",
      "telephone": "226-820-2394",
      "priceRange": "$$",
      "areaServed": ["Windsor", "Tecumseh", "LaSalle", "Amherstburg"]
    },
    "areaServed": ["Windsor", "Tecumseh", "LaSalle", "Amherstburg"],
    "url": currentUrl,
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://melvillesplumbing.ca/contact",
        "inLanguage": "en-CA",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Plumbing Service Appointment"
      }
    }
  };

  // Generate FAQ schema if FAQs are present
  const faqSchema = faqItems ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{`${title} | Melville's Plumbing Windsor`}</title>
        <meta name="title" content={`${title} | Melville's Plumbing Windsor`} />
        <meta name="description" content={description} />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={`${title} | Melville's Plumbing Windsor`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Melville's Plumbing" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={`${title} | Melville's Plumbing Windsor`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Reis Melville" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Windsor" />
        <meta name="geo.position" content="42.3149;-83.0364" />
        <meta name="ICBM" content="42.3149, -83.0364" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[30vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
        role="banner"
        aria-label={title}
      >
        <div className="absolute inset-0 bg-primary/70" />
        
        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 mb-6 text-white bg-secondary/80 rounded-full text-sm font-medium">
              Professional Plumbing Services Since 2012
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {children}
      
      <Footer />
    </>
  );
};