import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/layout/floating-contact";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Discover } from "@/components/sections/discover";
import { About } from "@/components/sections/about";
import { Vehicles } from "@/components/sections/vehicles";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { business } from "@/content/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.fullName,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hungama",
      addressCountry: "LK",
    },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    description:
      "Airport transfers and private tourist transport across Sri Lanka.",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Discover />
        <About />
        <Vehicles />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
