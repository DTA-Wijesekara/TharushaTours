import { ArrowUpRight } from "lucide-react";
import { business } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <a className="footer-brand" href="#home">
          Tharusha Tours<span>SRI LANKA, AT YOUR OWN PACE.</span>
        </a>
        <p>
          Based in Hungama.
          <br />
          Journeys across Sri Lanka.
        </p>
        <a href="#home" className="back-top">
          Back to top <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {business.fullName}
        </p>
        <p>
          Website by <span>{business.developer.name}</span>{" "}
          <span className="credit-divider">·</span>{" "}
          <a href={`tel:${business.developer.tel}`}>
            {business.developer.phone}
          </a>
        </p>
      </div>
    </footer>
  );
}
