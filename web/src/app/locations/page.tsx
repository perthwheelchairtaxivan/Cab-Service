import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hospital, Plane, Phone } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import PerthLocationsRoadmap from "@/components/locations/PerthLocationsRoadmap";
import JsonLd from "@/components/seo/JsonLd";
import { SUBURBS_DATA } from "@/config/suburbs-data";
import { SITE_URL, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Wheelchair Taxi Service Areas Perth | Girrawheen Base & Metro",
  description:
    "Perth wheelchair accessible taxi and 10-seater maxi cab service coverage. Primary 20 km radius around Girrawheen base plus extended corridors including Fremantle, Perth Hills, and Perth Airport. Book 24/7 on +61 493 252 766.",
  alternates: {
    canonical: `${SITE_URL}/locations`,
  },
  openGraph: {
    title: "Wheelchair Taxi Service Areas Perth | Girrawheen Base & Metro",
    description:
      "Perth wheelchair accessible taxi and 10-seater maxi cab service coverage. Primary 20 km radius around Girrawheen base plus extended corridors including Fremantle, Perth Hills, and Perth Airport. Book 24/7 on +61 493 252 766.",
    url: `${SITE_URL}/locations`,
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Wheelchair Taxi Service Areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheelchair Taxi Service Areas Perth | Girrawheen Base & Metro",
    description:
      "Perth wheelchair accessible taxi coverage: primary 20 km base radius plus extended Greater Perth corridors. 24/7 phone & WhatsApp booking.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

export const suburbs = Object.values(SUBURBS_DATA).map((s) => s.name);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/locations` },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/locations#collection`,
  name: "Perth Wheelchair Taxi & Maxi Cab Service Areas",
  description:
    "Comprehensive service area directory for wheelchair accessible taxis and 10-seater maxi cabs across metropolitan Perth, Western Australia.",
  url: `${SITE_URL}/locations`,
  inLanguage: "en-AU",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${SITE_URL}/#business`,
  },
};

export default function LocationsPage() {
  const suburbList = Object.values(SUBURBS_DATA);

  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white selection:bg-amber-400 selection:text-black overflow-x-hidden">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />

      {/* ── 1. Header Section ── */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center border-b border-zinc-900">
        <div className="relative z-10 max-w-4xl mx-auto">
          <SlideUp>
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-3 block">
              Metropolitan Perth Coverage
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] mb-4 text-white">
              Wheelchair Taxi &amp; Maxi Cab <span className="text-amber-400">Service Areas in Perth</span>
            </h1>
            {/* Answer-first 50-word opening paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto font-normal">
              Based in Girrawheen WA 6064, Perth Wheelchair Taxi Van delivers 24/7 accessible passenger transport centered on our primary 20 km local radius, with scheduled transport extending to major regional destinations including Fremantle, Perth Hills, and Perth Airport Terminals T1–T4 using rear ramp or lift access vans and 10-seater maxi cabs.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-transform hover:scale-105"
              >
                <span>Book / Request Fixed Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-full border border-zinc-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ── 2. Visual Route Map (Directly After Header) ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-zinc-900">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 block">
            Visual Route Map
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
            Metropolitan Hub Connections
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Interactive roadmap showing regional connectors between Girrawheen, coastal hubs, and airport terminals.
          </p>
        </div>
        <PerthLocationsRoadmap />
      </section>

      {/* ── 3. Suburban Hubs & Regional Corridors (Then this section) ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Suburban Hubs &amp; Regional Corridors
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Click any suburb to view hospital transport connections, travel times to Perth Airport, and wheelchair accessibility notes.
            </p>
          </div>
          <span className="text-xs bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {suburbList.length} Dedicated Service Pages
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {suburbList.map((sub) => (
            <Link
              key={sub.slug}
              href={`/locations/${sub.slug}`}
              className="p-6 bg-zinc-950 border-2 border-zinc-800 hover:border-amber-400/60 rounded-2xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-black text-white uppercase group-hover:text-amber-400 transition-colors">
                    {sub.name}
                  </span>
                  <span className="text-[10px] bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-0.5 rounded font-bold uppercase">
                    {sub.distanceFromBaseKm === 0 ? "Dispatch Base" : `${sub.distanceFromBaseKm} km`}
                  </span>
                </div>
                <span className="text-xs text-amber-400 font-semibold block mb-3">
                  {sub.region}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-normal mb-4">
                  {sub.description}
                </p>

                <div className="space-y-1.5 text-[11px] text-zinc-400 border-t border-zinc-900 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Hospital className="w-3.5 h-3.5 text-rose-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">{sub.medicalFacilities[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-sky-400 shrink-0" aria-hidden="true" />
                    <span>~{sub.travelTimeToAirportMin} mins to Perth Airport</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold text-amber-400">
                <span>View {sub.name} Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
