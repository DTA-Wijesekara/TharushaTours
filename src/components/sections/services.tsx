import {
  ArrowUpRight,
  PlaneLanding,
  Route,
  MapPin,
  Clock3,
  Signpost,
  Compass,
} from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappUrl } from "@/lib/contact";

export function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-intro">
          <SectionHeading
            eyebrow="THE WAY YOU TRAVEL"
            title="From your first hello to your last stop."
          >
            A simple arrival. A day of exploring. A longer escape. Choose the
            journey, and let Tharusha take care of the driving.
          </SectionHeading>
          <p className="side-note">
            Less planning around transport.
            <br />
            <em>More room for the experience.</em>
          </p>
        </div>
        <div className="service-grid">
          <article className="service-card airport-card">
            <div className="service-image service-vehicle-image">
              <Image
                src="/images/prius.webp"
                alt="Illustrative Toyota Prius for private airport transport"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <span className="image-disclaimer">Illustrative vehicle</span>
            </div>
            <div className="card-top">
              <PlaneLanding size={32} strokeWidth={1.2} aria-hidden="true" />
              <span>01 / A WARM WELCOME</span>
            </div>
            <h3>Airport transfers</h3>
            <p>
              Start your Sri Lankan journey with a familiar face waiting for
              you. Arrivals and departures at Katunayake International Airport,
              to and from anywhere on the island.
            </p>
            <ul className="service-features">
              <li>
                <Signpost size={17} aria-hidden="true" />A welcome sign with
                your name
              </li>
              <li>
                <Clock3 size={17} aria-hidden="true" />
                Any-time pickups, arranged in advance
              </li>
              <li>
                <MapPin size={17} aria-hidden="true" />
                Your hotel, your destination
              </li>
            </ul>
            <a
              href={whatsappUrl(
                "Hi Tharusha, I’d like to arrange an airport transfer. My date, flight details and destination are:",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Discuss your airport transfer{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
          <article className="service-card tour-card">
            <div className="service-image">
              <Image
                src="/images/island-drive.webp"
                alt="A car travelling along a tree-lined road in Nuwara Eliya, Sri Lanka"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <span className="image-disclaimer">
                Sri Lanka road inspiration
              </span>
            </div>
            <div className="card-top">
              <Route size={32} strokeWidth={1.2} aria-hidden="true" />
              <span>02 / THE OPEN ROAD</span>
            </div>
            <h3>Private journeys</h3>
            <p>
              A coastal day trip or several days on the road. Travel between the
              places you choose, with the flexibility to make the journey your
              own.
            </p>
            <ul className="service-features">
              <li>
                <Compass size={17} aria-hidden="true" />
                Day trips & multi-day transport
              </li>
              <li>
                <Route size={17} aria-hidden="true" />
                Your route, your stops, your pace
              </li>
              <li>
                <MapPin size={17} aria-hidden="true" />
                Destinations across Sri Lanka
              </li>
            </ul>
            <a
              href={whatsappUrl(
                "Hi Tharusha, I’d like to discuss a private journey. My travel dates and destinations are:",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Tell us where you’d like to go{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
