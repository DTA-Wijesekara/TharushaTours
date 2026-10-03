export const business = {
  name: "Tharusha Tours",
  fullName: "Tharusha Tours Sri Lanka",
  driver: "Tharusha Sanketh",
  location: "Hungama, Sri Lanka",
  phone: "+94 70 367 8956",
  whatsapp: "94703678956",
  email: "tharushatourssrilanka@gmail.com",
  developer: {
    name: "Dasun Theekshana",
    phone: "+94 71 853 3408",
    tel: "+94718533408",
  },
} as const;

export const navigation = [
  { label: "Our services", href: "#services" },
  { label: "Discover Sri Lanka", href: "#discover" },
  { label: "Meet Tharusha", href: "#about" },
  { label: "Your ride", href: "#vehicles" },
] as const;

export const destinations = [
  {
    name: "Ella & the hill country",
    category: "SLOW DOWN IN THE HILLS",
    image: "/images/ella.webp",
    alt: "Nine Arch Bridge winding through green hills in Ella, Sri Lanka",
    description: "Green hills, tea-country roads and a little room to breathe.",
  },
  {
    name: "The southern coast",
    category: "FOLLOW THE OCEAN",
    image: "/images/coast.webp",
    alt: "Palm-lined coastline and ocean at Mirissa, Sri Lanka",
    description: "Coastal roads, beach days and stops at your own pace.",
  },
  {
    name: "Sri Lanka’s wildlife",
    category: "MAKE ROOM FOR NATURE",
    image: "/images/wildlife.webp",
    alt: "Elephants beside a river in Sri Lanka",
    description:
      "Add a wildlife destination to your journey. Discuss park transfers with Tharusha.",
  },
] as const;

export const faqs = [
  {
    question: "Can you pick me up from the airport?",
    answer:
      "Yes. Tharusha offers pickups and drop-offs at Katunayake International Airport (Bandaranaike International Airport), with transport to destinations anywhere in Sri Lanka. For arrivals, he greets you with a sign showing your name.",
  },
  {
    question: "What if my flight arrives late at night?",
    answer:
      "Airport transfers can be arranged at any time, including late-night and early-morning arrivals. Contact Tharusha with your flight details to agree on the pickup arrangements.",
  },
  {
    question: "Can I choose my own route and stops?",
    answer:
      "Absolutely. Choose your destinations, stops and travel dates for a day trip or multi-day journey. Tharusha mainly provides the driving, giving you the flexibility to travel your way.",
  },
  {
    question: "Which vehicle will I travel in?",
    answer:
      "A Toyota Prius is the usual option. A Toyota KDH or another vehicle can be arranged according to your group size and preference. Share your passenger and luggage details so the right vehicle can be discussed.",
  },
  {
    question: "How do I get a price and confirm my trip?",
    answer:
      "Send your trip details through WhatsApp or email. Tharusha will discuss the price, vehicle and availability with you directly. Payment and any changes are also arranged directly with him.",
  },
] as const;
