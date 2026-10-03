import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tharusha Tours Sri Lanka | Airport Transfers & Private Journeys",
  description:
    "Meet Tharusha, your English-speaking local driver in Sri Lanka. Katunayake airport pickups and drop-offs, private day trips and flexible multi-day transport. Contact him for a personalised quote.",
  ...(process.env.NEXT_PUBLIC_SITE_URL &&
  process.env.NEXT_PUBLIC_SITE_URL !== "https://example.com"
    ? {
        metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
        alternates: { canonical: "/" },
      }
    : {}),
  openGraph: {
    title: "Tharusha Tours — Sri Lanka, at your own pace",
    description:
      "A warm welcome. An open road. Airport transfers and private journeys with your local driver, Tharusha.",
    type: "website",
    locale: "en_US",
    siteName: "Tharusha Tours Sri Lanka",
    ...(process.env.NEXT_PUBLIC_SITE_URL &&
    process.env.NEXT_PUBLIC_SITE_URL !== "https://example.com"
      ? {
          images: [
            {
              url: "/images/ella.webp",
              width: 1920,
              height: 2554,
              alt: "Nine Arch Bridge, Sri Lanka",
            },
          ],
        }
      : {}),
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
