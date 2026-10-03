import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappUrl } from "@/lib/contact";

export function Discover() {
  return (
    <section id="discover" className="section discover">
      <div className="container">
        <div className="section-intro">
          <SectionHeading
            eyebrow="AN ISLAND OF POSSIBILITIES"
            title="Find your kind of Sri Lanka."
          >
            From misty hills to ocean horizons, there’s a different rhythm
            around every bend. Where will yours take you?
          </SectionHeading>
          <span className="small-caption">
            A LITTLE INSPIRATION FOR THE ROAD AHEAD
          </span>
        </div>
        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <article key={destination.name} className="destination-card">
              <div className="destination-image">
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <span className="destination-number">0{index + 1}</span>
                <a
                  className="destination-arrow"
                  href={whatsappUrl(
                    `Hi Tharusha, I’m interested in transport to ${destination.name}. My travel details are:`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Discuss transport to ${destination.name}`}
                >
                  <ArrowUpRight size={22} />
                </a>
              </div>
              <div className="destination-copy">
                <p className="small-caption">{destination.category}</p>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="discover-footnote">
          These are just a few starting points. Your journey can go anywhere in
          Sri Lanka.
        </p>
      </div>
    </section>
  );
}
