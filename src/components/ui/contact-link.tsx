import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export function ContactLink({
  children = "Let’s talk about your trip",
  message,
  variant = "dark",
  className = "",
}: {
  children?: React.ReactNode;
  message?: string;
  variant?: "dark" | "gold" | "outline";
  className?: string;
}) {
  return (
    <a
      className={`button button-${variant} ${className}`}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
