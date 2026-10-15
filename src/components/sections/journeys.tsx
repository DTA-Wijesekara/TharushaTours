import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { journeys } from "@/content/journeys";
import { SectionHeading } from "@/components/ui/section-heading";

export function Journeys() {
  return (
    <section
      id="journeys"
      className="section journeys"
      aria-labelledby="journeys-heading"
    >
      <div className="container">
        <div className="section-intro">
          <SectionHeading
            id="journeys-heading"
            eyebrow="FROM OUR CUSTOMERS’ TRAVELS"
            title="Journeys with Tharusha."
          >
            A welcome at arrivals. A view to remember. A few moments from our
            customers’ time in Sri Lanka.
          </SectionHeading>
        </div>
        <div className="journeys-grid">
          {journeys.map((journey) => (
            <figure className="journey-card" key={journey.id}>
              <div className={`journey-photo journey-photo-${journey.id}`}>
                <Image
                  src={journey.image}
                  alt={journey.alt}
                  width={journey.width}
                  height={journey.height}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <figcaption className="journey-caption">
                <p className="small-caption">{journey.category}</p>
                <h3>{journey.title}</h3>
                <p>{journey.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="journeys-invitation">
          <p>Your own Sri Lankan story is waiting.</p>
          <a className="text-link" href="#contact">
            Discuss your journey <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
