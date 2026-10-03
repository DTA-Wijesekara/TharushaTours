import { business } from "@/content/site";

export function whatsappUrl(
  message = "Hi Tharusha, I’d like to discuss a trip in Sri Lanka.",
) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function emailUrl(message?: string) {
  const parameters = new URLSearchParams({
    subject: "Sri Lanka travel enquiry",
  });
  if (message) parameters.set("body", message);
  return `mailto:${business.email}?${parameters.toString()}`;
}
