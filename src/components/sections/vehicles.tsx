import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappUrl } from "@/lib/contact";

export function Vehicles() {
  return (
    <section id="vehicles" className="section vehicles">
      <div className="container">
        <div className="section-intro">
          <SectionHeading
            eyebrow="ROOM FOR YOUR JOURNEY"
            title="The right ride for your plans."
          >
            Travelling light or bringing the whole group? Share your passenger
            count, luggage and preferences to discuss a suitable vehicle.
          </SectionHeading>
          <a
            className="text-link"
            href={whatsappUrl(
              "Hi Tharusha, could we discuss a vehicle for my trip? We have __ passengers and __ bags.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discuss your vehicle <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="vehicle-grid">
          <article className="vehicle-card vehicle-photo-card">
            <div className="vehicle-photo">
              <Image
                src="/images/prius.webp"
                alt="Illustrative photo of a white Toyota Prius; not Tharusha’s actual vehicle"
                fill
                sizes="(max-width: 850px) 100vw, 50vw"
              />
              <span className="image-disclaimer">Illustrative vehicle</span>
            </div>
            <div className="vehicle-copy">
              <p className="small-caption">DEFAULT VEHICLE</p>
              <h3>Toyota Prius</h3>
              <p>
                The usual choice for Tharusha’s airport transfers and private
                journeys. Confirm passenger and luggage suitability directly
                with him.
              </p>
            </div>
          </article>
          <article className="vehicle-card vehicle-photo-card">
            <div className="vehicle-photo">
              <Image
                src="/images/hiace.webp"
                alt="Illustrative photo of a white Toyota Hiace van; actual arranged vehicle may differ"
                fill
                sizes="(max-width: 850px) 100vw, 50vw"
              />
              <span className="image-disclaimer">
                Illustrative Hiace · actual vehicle may differ
              </span>
            </div>
            <div className="vehicle-copy">
              <p className="small-caption">ARRANGED FOR YOUR GROUP</p>
              <h3>Toyota KDH & other options</h3>
              <p>
                A larger vehicle or another option can be arranged to suit your
                group and preferences, subject to availability.
              </p>
            </div>
          </article>
        </div>
        <p className="vehicle-image-note">
          Vehicle photographs are examples. Confirm the specific vehicle with
          Tharusha when arranging your trip.
        </p>
        <details className="photo-credits">
          <summary>Vehicle photo credits</summary>
          <p>
            Prius:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:2009_Toyota_Prius_(ZVW30R)_liftback_(2011-12-06)_01.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              OSX / Wikimedia Commons
            </a>
            , public domain. Hiace:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Toyota_Hiace_KDH202L_3.0_Commuter_White_-_front.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ethan Llamas / Wikimedia Commons
            </a>
            ,{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-SA 4.0
            </a>
            . Images resized and converted to WebP; the Hiace image remains
            under CC BY-SA 4.0.
          </p>
        </details>
      </div>
    </section>
  );
}
