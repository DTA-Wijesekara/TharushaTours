import Image from "next/image";
import { Languages, MapPin, UserRound } from "lucide-react";
import { business } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactLink } from "@/components/ui/contact-link";

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-visual">
          <Image
            src="/images/coast.webp"
            alt="A peaceful stretch of Sri Lanka’s southern coastline"
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
          />
          <div className="about-image-caption">
            <MapPin size={15} aria-hidden="true" />
            <span>FROM THE SOUTH, ACROSS THE ISLAND</span>
          </div>
          <div className="driver-card">
            <span className="driver-monogram">TS</span>
            <div>
              <strong>{business.driver}</strong>
              <span>YOUR LOCAL DRIVER</span>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow="A PERSON, NOT JUST A PICKUP"
            title="Meet Tharusha."
          >
            <span>Local roots. A personal welcome.</span>
          </SectionHeading>
          <p>
            Based in Hungama, Tharusha Sanketh provides airport transfers and
            private driving for travellers exploring Sri Lanka.
          </p>
          <p>
            He personally drives most journeys. For larger groups or a different
            vehicle preference, other vehicles and drivers can be arranged.
            You’ll discuss the details directly with him.
          </p>
          <p>
            Choose the places you want to visit. Tharusha takes care of getting
            you there, so you can enjoy the journey at your own pace.
          </p>
          <div className="about-facts">
            <span>
              <Languages size={20} aria-hidden="true" />
              English & Sinhala
            </span>
            <span>
              <UserRound size={20} aria-hidden="true" />
              Direct, personal contact
            </span>
          </div>
          <ContactLink>Say hello to Tharusha</ContactLink>
        </div>
      </div>
    </section>
  );
}
