import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export function FloatingContact() {
  return (
    <a
      className="floating-contact"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tharusha on WhatsApp"
    >
      <MessageCircle size={23} aria-hidden="true" />
      <span>Chat with Tharusha</span>
    </a>
  );
}
