import { CheckCircle2, ShieldCheck, ArrowRight, Phone, Sliders, Calendar, Accessibility, HeartPulse, HelpCircle } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { Metadata } from "next";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import RelatedServices from "@/components/services/RelatedServices";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG, CONFIG_FLAGS } from "@/config/site";

export const metadata: Metadata = {
  title: "Wheelchair Taxi Service Perth | Accessible Transport 24/7",
  description:
    "Perth wheelchair accessible taxi vans with rear ramp or hydraulic lift. Travel seated in your wheelchair. Up to 10 passengers. WA PTSS (formerly TUSS) & NDIS transport options 24/7.",
  alternates: {
    canonical: `${SITE_URL}/services/wheelchair-accessible-taxi`,
  },
  openGraph: {
    title: "Wheelchair Taxi Service Perth | Accessible Transport 24/7",
    description:
      "Perth wheelchair accessible taxi vans with rear ramp or hydraulic lift. Travel seated in your wheelchair. Up to 10 passengers. WA PTSS (formerly TUSS) & NDIS transport options 24/7.",
    url: `${SITE_URL}/services/wheelchair-accessible-taxi`,
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Wheelchair Accessible Taxi Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheelchair Taxi Service Perth | Accessible Transport 24/7",
    description:
      "Perth wheelchair accessible taxi vans with rear ramp or hydraulic lift. WA PTSS (formerly TUSS) & NDIS transport options 24/7.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/wheelchair-accessible-taxi#service`,
      name: "Wheelchair Accessible Taxi Service Perth",
      description:
        "Wheelchair accessible taxi vans in Perth with rear foldout ramp or hydraulic lift, carrying up to 10 passengers. WA PTSS (formerly TUSS) smartcard and NDIS transport options 24/7.",
      provider: {
        "@type": "TaxiService",
        "@id": `${SITE_URL}/#business`,
      },
      areaServed: {
        "@type": "City",
        name: "Perth",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Accessible Passenger Services",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wheelchair Accessible Taxi",
          item: `${SITE_URL}/services/wheelchair-accessible-taxi`,
        },
      ],
    },
  ],
};

export default function WheelchairTaxiPage() {
  const specs = [
    { title: "Ramp & Lift System", detail: "Rear foldout aluminium ramp or hydraulic lift for smooth, dignified boarding" },
    { title: "Vertical Door Clearance", detail: "1,550 mm entrance height accommodates tall powerchairs, tilt chairs, and headrests" },
    { title: "4-Point Floor Anchors", detail: "Heavy-duty commercial Q'Straint floor restraints lock the wheelchair chassis solidly" },
    { title: "Occupant Seatbelt", detail: "Fitted independent commercial lap/sash belt across the passenger's torso" },
    { title: "Wheelchair Types", detail: "Accommodates manual wheelchairs, powered electric wheelchairs, and mobility scooters" },
    { title: "Passenger Seating", detail: "Van carries up to 10 passengers in total, with ample space for carers and family alongside" },
  ];

  return (
    <div className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={serviceSchema} />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-3 block">
              Accredited Accessible Transport
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] mb-4 text-white">
              Wheelchair Taxi <span className="text-amber-400">Service in Perth</span>
            </h1>
            {/* Answer-first 50-word opening paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto font-normal">
              Perth Wheelchair Taxi Van provides dedicated wheelchair accessible transport across the Perth metropolitan area 24/7. Equipped with rear foldout ramps or hydraulic lifts and heavy-duty four-point floor tie-downs, our long-wheelbase vans carry manual chairs, electric powerchairs, and mobility scooters. We support WA PTSS smartcards (formerly TUSS) and provide NDIS invoices. {CONFIG_FLAGS.ptssSubsidyAccepted && CONFIG_FLAGS.ndisBillingAccepted ? "" : "[TODO: owner to confirm licence/registration for PTSS card & NDIS billing]."}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-transform hover:scale-105"
              >
                <span>Book Wheelchair Taxi</span>
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

      {/* ── Comprehensive Specs & Details ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Dignified Travel Seated in Your Wheelchair
            </h2>
            <p>
              Transferring out of a wheelchair into a standard car seat is uncomfortable, stressful, and often medically unsafe. Our purpose-built <strong>wheelchair accessible taxi vans</strong> eliminate the need to transfer. You remain comfortably seated in your own chair throughout the journey.
            </p>
            <p>
              Our accredited drivers assist with the entire boarding procedure. We lower the rear ramp or hydraulic lift, assist you into the cabin, anchor all four floor tie-downs directly to your wheelchair chassis, and fasten your commercial safety lap/sash belt. We verify everything is locked firmly before setting off.
            </p>

            <h3 className="text-lg font-black text-white uppercase tracking-tight pt-2">
              Wheelchair Compatibility &amp; Requirements
            </h3>
            <p>
              We carry standard manual wheelchairs, heavy motorized electric powerchairs, transit chairs, and four-wheel mobility scooters. If your chair has specialized lateral supports, headrests, or elevated leg rests, our generous vertical entrance clearance (approx. 1,500–1,550 mm [TODO: confirm exact dimensions with owner]) ensures room. Please inform us of your chair dimensions when booking so we allocate the best vehicle configuration.
            </p>

            <h3 className="text-lg font-black text-white uppercase tracking-tight pt-2">
              WA PTSS &amp; NDIS Billing Options {CONFIG_FLAGS.ptssSubsidyAccepted ? "" : "[TODO: owner to confirm licence/registration]"}
            </h3>
            <p>
              Effective 1 October 2025, paper TUSS vouchers have been replaced by the WA Department of Transport&apos;s electronic Passenger Transport Subsidy Scheme (PTSS) card. The standard subsidy covers 50% up to $25 per trip, and the wheelchair subsidy covers 75% up to $35 per trip in an authorized wheelchair-accessible taxi. If you are an NDIS participant funded under Core Supports — Transport, we issue formal tax invoices with registered ABN and trip details. {CONFIG_FLAGS.ptssSubsidyAccepted && CONFIG_FLAGS.ndisBillingAccepted ? "" : "[TODO: owner to confirm licence/registration for PTSS card & NDIS billing]."}
            </p>
          </div>

          <div className="lg:col-span-5 bg-zinc-950 border-2 border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-black text-white uppercase tracking-wider mb-4 pb-3 border-b border-zinc-800 flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-amber-400" aria-hidden="true" />
              <span>Vehicle Specifications</span>
            </h3>

            <div className="space-y-4">
              {specs.map((s, idx) => (
                <div key={idx} className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block mb-0.5">
                    {s.title}
                  </span>
                  <span className="text-xs text-zinc-200 leading-snug font-medium block">
                    {s.detail}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider py-3 rounded-full transition-colors"
              >
                <span>Book This Vehicle</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <RelatedServices currentSlug="wheelchair-accessible-taxi" />
    </div>
  );
}
