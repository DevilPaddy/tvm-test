import { ReactNode, Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { PrivacyPolicyProvider } from "@/context/PrivacyPolicyContext";

// Lazy load non-critical components
const PromotionPopup = lazy(() => import("./PromotionPopup"));
const PrivacyPolicyModal = lazy(() => import("./PrivacyPolicyModal"));
const ENABLE_OLD_PROMO = false;
// Type for structured data to ensure type safety
interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className = "",
  title = "TVM IT Solutions | Affordable IT Services & Web Development in Aurangabad",
  description = "Affordable IT solutions with rapid delivery. We offer website development, Android apps, digital marketing, SEO, and end-to-end IT support for businesses in Aurangabad.",
  keywords = "IT solutions, affordable IT services, web development, Android app developers, budget website design, SEO services, IT maintenance, Aurangabad IT services",
  canonicalUrl = "https://tvmitsolution.com",
  ogImage = "./img/tvm_main_logo.png",
}) => {
  // Consolidated and optimized structured data
  const structuredData: StructuredData[] = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "TVM IT Solutions",
      "url": "https://tvmitsolution.com",
      "logo": ogImage,
      "image": ogImage,
      "telephone": "+91-9309917269",
      "email": "futuretech@tvmitsolution.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chandan Apartment, Rana Nagar, Seven Hills",
        "addressLocality": "Aurangabad",
        "addressRegion": "Maharashtra",
        "postalCode": "431001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.8762",
        "longitude": "75.3433",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00",
        },
      ],
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
      "areaServed": ["Aurangabad", "Pune", "Mumbai", "Nashik", "Maharashtra"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9309917269",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi", "Marathi"],
      },
      "sameAs": [
        "https://www.linkedin.com/in/tvm-it-solutions-91544a355",
        "https://www.facebook.com/tvmitsolutions",
        "https://twitter.com/tvmitsolutions",
        "https://www.instagram.com/tvmitsolutions",
        "https://pinterest.com/tvmitsolutions",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Android App Development",
              "description": "Custom Android app development for businesses",
            },
            "price": "25000",
            "priceCurrency": "INR",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development",
              "description": "Professional responsive website development",
            },
            "price": "15000",
            "priceCurrency": "INR",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing",
              "description": "SEO, PPC, and social media marketing",
            },
            "price": "10000",
            "priceCurrency": "INR",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Services",
              "description": "Search engine optimization services",
            },
            "price": "7500",
            "priceCurrency": "INR",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Maintenance",
              "description": "Ongoing IT support and maintenance",
            },
            "price": "5000",
            "priceCurrency": "INR",
          },
        ],
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "124",
        "reviewCount": "87",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tvmitsolution.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://tvmitsolution.com/services",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "About",
          "item": "https://tvmitsolution.com/about",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://tvmitsolution.com/contact",
        },
      ],
    },
  ];

  return (
    <PrivacyPolicyProvider>
      <div className="flex flex-col min-h-screen" role="document">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <link rel="canonical" href={canonicalUrl} />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="TVM IT Solutions" />
          <meta name="geo.region" content="IN-MH" />
          <meta name="geo.placename" content="Aurangabad" />
          {/* Open Graph meta tags */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:site_name" content="TVM IT Solutions" />
          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={ogImage} />
          <meta name="twitter:site" content="@tvmitsolutions" />
          {structuredData.map((data, i) => (
            <script
              key={i}
              type="application/ld+json"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: Structured data requires raw JSON
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
          ))}
        </Helmet>

        <header role="banner">
          <Navigation />
        </header>
        <main className={`flex-grow ${className}`} role="main">
          {children}
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
        <Suspense fallback={null}>
          {ENABLE_OLD_PROMO && <PromotionPopup />}
          <PrivacyPolicyModal />
        </Suspense>
      </div>
    </PrivacyPolicyProvider>
  );
};

export default PageLayout;