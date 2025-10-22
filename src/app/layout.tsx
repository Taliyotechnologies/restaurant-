import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ViewportFix from "@/components/ViewportFix";
import FixedBottomCTAs from "@/components/FixedBottomCTAs";
import logoImg from "@/assets/logo.png";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://budas-pub.example.com"),
  title: {
    default: "Buda's Pub | Neighborhood Bar & Grill",
    template: "%s | Buda's Pub",
  },
  description:
    "Buda's Pub: events, menu, blog, book a table, and contact us. Local neighborhood bar & grill.",
  applicationName: "Buda's Pub",
  icons: {
    icon: logoImg.src,
  },
  openGraph: {
    title: "Buda's Pub",
    description:
      "Local pub with weekly events, fresh menu and easy table booking. Join us tonight!",
    url: "https://budas-pub.example.com",
    siteName: "Buda's Pub",
    images: [
      {
        url:
          "https://images.unsplash.com/photo-1541542684-4a676a16c2e8?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Buda's Pub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buda's Pub",
    description: "Events, Menu and Booking at Buda's Pub.",
    images: [
      "https://images.unsplash.com/photo-1541542684-4a676a16c2e8?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Buda's Pub",
    image:
      "https://images.unsplash.com/photo-1541542684-4a676a16c2e8?q=80&w=1200&auto=format&fit=crop",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "12345",
      addressCountry: "US",
    },
    url: "https://budas-pub.example.com",
    servesCuisine: "Pub, Bar, American",
    priceRange: "$$",
  } as const;

  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter bg-charcoal text-white min-h-screen`}>
        <ViewportFix />
        <Navbar />
        <main className="container-max mx-auto px-4 overflow-visible">{children}</main>
        <FixedBottomCTAs />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
