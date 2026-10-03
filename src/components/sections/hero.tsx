import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Plane,
  Route,
  MessageCircle,
} from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <Image
        src="/images/ella.webp"
        alt="Nine Arch Bridge surrounded by the lush hills of Sri Lanka"
        fill
        sizes="100vw"
        priority
        className="hero-image"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">
          <span />
          YOUR JOURNEY. YOUR PACE.
        </p>
        <h1 id="hero-title">
          A beautiful island.
          <br />A journey that’s
          <br />
          <em>yours.</em>
        </h1>
        <p className="hero-description">
          Airport transfers and private journeys across Sri Lanka,
          <br className="desktop-break" /> with Tharusha, your local driver.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="button button-gold">
            Plan your journey <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="hero-secondary" href="#discover">
            Explore the island <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-location">
          <MapPin size={15} aria-hidden="true" /> NINE ARCH BRIDGE · ELLA, SRI
          LANKA
        </div>
      </div>
      <div className="hero-note">
        <span className="hero-note-line" />
        <p>
          A warm welcome.
          <br />
          <em>An open road.</em>
        </p>
      </div>
      <div className="hero-bottom">
        <div className="container hero-bottom-inner">
          <span>
            <Plane size={19} aria-hidden="true" />
            Airport pickups & drop-offs
          </span>
          <span>
            <Route size={19} aria-hidden="true" />
            Flexible private journeys
          </span>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={19} aria-hidden="true" />
            Talk directly with Tharusha{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
