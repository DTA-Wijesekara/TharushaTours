"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { business } from "@/content/site";
import { emailUrl, whatsappUrl } from "@/lib/contact";

export function Contact() {
  const [service, setService] = useState("Airport pickup");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [route, setRoute] = useState("");
  const message = [
    "Hi Tharusha, I’d like to discuss a trip in Sri Lanka.",
    `Service: ${service}`,
    date && `Travel date: ${date}`,
    passengers && `Passengers: ${passengers}`,
    route.trim() && `Route / destination: ${route.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");
  return (
    <section id="contact" className="contact section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">
            <span />
            LET’S MAKE IT YOURS
          </p>
          <h2>
            Your next chapter
            <br />
            starts with <em>hello.</em>
          </h2>
          <p>
            Tell Tharusha when you’re coming and where you’d like to go. Discuss
            your journey, vehicle and personalised quote directly.
          </p>
          <div className="contact-details">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={21} aria-hidden="true" />
              <span>
                <small>WHATSAPP THARUSHA</small>
                {business.phone}
              </span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a href={emailUrl()}>
              <Mail size={21} aria-hidden="true" />
              <span>
                <small>SEND AN EMAIL</small>
                {business.email}
              </span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <p>
              <MapPin size={20} aria-hidden="true" />
              {business.location} · Travelling islandwide
            </p>
          </div>
        </div>
        <div className="enquiry-panel">
          <p className="small-caption">A FEW DETAILS TO GET STARTED</p>
          <h3>What’s your journey?</h3>
          <p className="panel-description">
            Add what you know, then send your message.
          </p>
          <div className="enquiry-fields">
            <label>
              How can we help?
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option>Airport pickup</option>
                <option>Airport drop-off</option>
                <option>Private day trip</option>
                <option>Multi-day journey</option>
              </select>
            </label>
            <div className="field-row">
              <label>
                Travel date <span>(optional)</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
              <label>
                Passengers <span>(optional)</span>
                <input
                  type="number"
                  min="1"
                  max="99"
                  placeholder="e.g. 2"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                />
              </label>
            </div>
            <label>
              Where would you like to go? <span>(optional)</span>
              <input
                maxLength={500}
                placeholder="e.g. Airport to Tangalle"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
              />
            </label>
          </div>
          <a
            className="button button-gold enquiry-send"
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Continue on WhatsApp
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="email-alternative" href={emailUrl(message)}>
            Prefer email? Send these details{" "}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <p className="panel-footnote">
            These details are only sent when you continue in WhatsApp or your
            email app. Tharusha confirms availability and pricing personally.
          </p>
        </div>
      </div>
    </section>
  );
}
