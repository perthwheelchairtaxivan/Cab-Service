import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "lenis/dist/lenis.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileContactBar from "@/components/layout/MobileContactBar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL, SITE_CONFIG, CONFIG_FLAGS } from "@/config/site";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wheelchair Taxi & Maxi Taxi Perth | Accessible Vans 24/7",
    template: "%s | Perth Wheelchair Taxi Van",
  },
  description:
    "Perth wheelchair accessible taxi vans and 10-seater maxi cabs with rear ramp or lift access. WA PTSS (formerly TUSS) & NDIS transport options. Call or WhatsApp +61 493 252 766.",
  applicationName: "Perth Wheelchair Taxi Van",
  authors: [{ name: "Perth Wheelchair Taxi Van" }],
  generator: "Next.js",
  keywords: [
    "wheelchair taxi perth",
    "accessible taxi perth",
    "ndis wheelchair taxi perth",
    "wa ptss taxi perth",
    "wa tuss taxi perth (formerly tuss)",
    "perth maxi taxi",
    "perth airport maxi taxi",
    "maxi cab girrawheen",
    "disabled transport perth",
    "10 seater taxi perth",
  ],
  creator: "Perth Wheelchair Taxi Van",
  publisher: "Perth Wheelchair Taxi Van",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Perth Wheelchair Taxi Van",
    locale: "en_AU",
    url: SITE_URL,
    title: "Wheelchair Taxi & Maxi Taxi Perth | Accessible Vans 24/7",
    description:
      "Perth wheelchair accessible taxi vans and 10-seater maxi cabs with rear ramp or lift access. WA PTSS (formerly TUSS) & NDIS transport options. Call or WhatsApp +61 493 252 766.",
    images: [
      {
        url: `${SITE_URL}/images/perth-wheelchair-taxi-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Wheelchair Taxi Van and Maxi Cab Service",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheelchair Taxi & Maxi Taxi Perth | Accessible Vans 24/7",
    description:
      "Perth wheelchair accessible taxi vans and 10-seater maxi cabs with rear ramp or lift access. WA PTSS (formerly TUSS) & NDIS transport options. Call or WhatsApp +61 493 252 766.",
    images: [`${SITE_URL}/images/perth-wheelchair-taxi-hero.jpg`],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TaxiService", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_CONFIG.name,
      legalName: SITE_CONFIG.legalName,
      alternateName: ["Perth Wheelchair Taxi", "Perth Accessible Maxi Cab", "Girrawheen Maxi Taxi"],
      description: SITE_CONFIG.description,
      url: SITE_URL,
      telephone: SITE_CONFIG.phoneRaw,
      email: SITE_CONFIG.email,
      logo: `${SITE_URL}/images/logo-transparent.png`,
      image: `${SITE_URL}/images/og-image.jpg`,
      priceRange: "$$",
      currenciesAccepted: "AUD",
      paymentAccepted: CONFIG_FLAGS.ptssSubsidyAccepted && CONFIG_FLAGS.ndisBillingAccepted
        ? "Cash, Credit Card, EFTPOS, WA PTSS Smartcard, NDIS Itemized Invoice"
        : "Cash, Credit Card, EFTPOS [PTSS Smartcard and NDIS invoicing pending owner licence confirmation]",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_CONFIG.baseLocation.suburb,
        addressRegion: SITE_CONFIG.baseLocation.state,
        postalCode: SITE_CONFIG.baseLocation.postcode,
        addressCountry: SITE_CONFIG.baseLocation.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE_CONFIG.baseLocation.latitude,
        longitude: SITE_CONFIG.baseLocation.longitude,
      },
      areaServed: [
        { "@type": "City", name: "Perth", "@id": "https://en.wikipedia.org/wiki/Perth" },
        { "@type": "AdministrativeArea", name: "Girrawheen" },
        { "@type": "AdministrativeArea", name: "Joondalup" },
        { "@type": "AdministrativeArea", name: "Fremantle" },
        { "@type": "AdministrativeArea", name: "Scarborough" },
        { "@type": "AdministrativeArea", name: "Nedlands" },
        { "@type": "AdministrativeArea", name: "Perth CBD" },
        { "@type": "AdministrativeArea", name: "Perth Airport" },
        { "@type": "AdministrativeArea", name: "Swan Valley" },
        { "@type": "AdministrativeArea", name: "Perth Hills" },
        { "@type": "AdministrativeArea", name: "Subiaco" },
        { "@type": "AdministrativeArea", name: "Morley" },
        { "@type": "AdministrativeArea", name: "Midland" },
        { "@type": "AdministrativeArea", name: "Cottesloe" },
        { "@type": "AdministrativeArea", name: "Victoria Park" },
      ],
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Wheelchair Accessible Rear Ramp or Hydraulic Lift [TODO: confirm exact model with owner]",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "4-Point Heavy-Duty Floor Tie-Down Anchors [TODO: confirm system with owner]",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Baby Capsules and Child Booster Seats Available",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "10 Passenger Seating Capacity",
          value: true,
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Perth Accessible Transport Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wheelchair Accessible Taxi Perth",
              url: `${SITE_URL}/services/wheelchair-accessible-taxi`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "NDIS & Medical Appointment Transport",
              url: `${SITE_URL}/services/medical-ndis-transport`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "10 Seater Group Maxi Cab",
              url: `${SITE_URL}/services/group-maxi-cab`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Perth Airport Transfers (T1-T4)",
              url: `${SITE_URL}/services/airport-transfers`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Taxi with Baby and Booster Seats",
              url: `${SITE_URL}/services/baby-seat-taxi`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Swan Valley Tours & Special Event Charters",
              url: `${SITE_URL}/services/tours-and-events-transport`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_CONFIG.name,
      publisher: {
        "@id": `${SITE_URL}/#business`,
      },
      inLanguage: "en-AU",
    },
  ],
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} h-full antialiased`}>
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-black pb-[calc(60px+env(safe-area-inset-bottom))] sm:pb-0"
      >
        {/* WCAG 2.2 AA Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-amber-400 focus:text-black focus:font-black focus:rounded-full focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-black uppercase text-xs tracking-wider"
        >
          Skip to main content
        </a>

        <JsonLd data={businessSchema} />
        <SmoothScrollProvider>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <MobileContactBar />
          <FloatingWhatsApp />
          <Analytics />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
