import { Plane, CheckCircle2, ShieldCheck, Clock, Luggage, ArrowRight, Phone, Navigation } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SlideUp from "@/components/animations/SlideUp";
import RelatedServices from "@/components/services/RelatedServices";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Perth Airport Maxi Taxi | Wheelchair Airport Transfers",
  description:
    "24/7 Perth Airport maxi taxi transfers for Terminals T1, T2, T3 & T4. Wheelchair accessible vans with ramp or lift, 10 passengers & luggage. Book online.",
  alternates: {
    canonical: `${SITE_URL}/services/airport-transfers`,
  },
  openGraph: {
    title: "Perth Airport Maxi Taxi | Wheelchair Airport Transfers",
    description:
      "24/7 airport maxi cabs and wheelchair taxi transfers across all Perth Airport terminals (T1-T4). Flight tracking and upfront fixed quotes.",
    url: `${SITE_URL}/services/airport-transfers`,
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Airport Maxi Taxi and Wheelchair Transfers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perth Airport Maxi Taxi | Wheelchair Airport Transfers",
    description:
      "24/7 Perth Airport maxi taxi transfers for Terminals T1, T2, T3 & T4. Wheelchair accessible vans with ramp or lift, 10 passengers & luggage.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/airport-transfers#service`,
      name: "Perth Airport Maxi Taxi & Wheelchair Transfers",
      description:
        "Specialised airport transfer service connecting metropolitan Perth to Terminals T1, T2, T3, and T4 with wheelchair accessible ramps and 10-seater capacity.",
      provider: {
        "@type": "TaxiService",
        "@id": `${SITE_URL}/#business`,
      },
      areaServed: [
        { "@type": "City", name: "Perth" },
        { "@type": "Place", name: "Perth Airport" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Perth Airport Transfers",
          item: `${SITE_URL}/services/airport-transfers`,
        },
      ],
    },
  ],
};

export default function AirportTransfersPage() {
  const terminals = [
    { code: "T1", name: "Terminal 1", desc: "International Departures/Arrivals & Virgin Domestic" },
    { code: "T2", name: "Terminal 2", desc: "Regional Alliance, Virgin Regional & FIFO Mining Hub" },
    { code: "T3", name: "Terminal 3", desc: "Domestic Inter-state & Jetstar Operations" },
    { code: "T4", name: "Terminal 4", desc: "Dedicated Qantas Domestic & Regional Terminal" },
  ];

  return (
    <div className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={serviceSchema} />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Perth Airport Transfers", href: "/services/airport-transfers" },
              ]}
              align="center"
              className="mb-4"
            />
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-3 block">
              24/7 Airport Gateway Service
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] mb-4 text-white">
              Perth Airport Maxi Taxi <span className="text-amber-400">&amp; Wheelchair Transfers</span>
            </h1>
            {/* Answer-first 50-word opening paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto font-normal">
              Need a 24/7 Perth Airport maxi taxi or wheelchair accessible airport transfer? Perth Wheelchair Taxi Van provides direct curbside drop-offs and pickups across Terminals T1, T2, T3, and T4. With flight monitoring, rear foldout ramps, space for 10 passengers, and ample luggage volume, we guarantee punctual airport transport.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-transform hover:scale-105"
              >
                <span>Book Airport Transfer</span>
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

      {/* ── Content ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Stress-Free Travel for All 4 Perth Airport Terminals
            </h2>
            <p>
              Navigating Perth Airport with a wheelchair, family members, or heavy luggage can be challenging. Standard rideshares and sedans often fail to show up, cannot accommodate powerchairs, or lack trunk room for luggage. We operate dedicated <strong>long-wheelbase maxi taxi vans</strong> built specifically to handle high-capacity airport transfers.
            </p>
            <p>
              For departures, we pick you up directly from your home, hotel, or retirement village with time to spare before your check-in deadline. For arrivals, we track your inbound flight number in real time. If your flight is delayed or lands early, your pickup time is adjusted automatically so your driver is waiting outside curbside.
            </p>

            <h3 className="text-lg font-black text-white uppercase tracking-tight pt-2">
              Accessible Wheelchair Drop-Offs &amp; Pickups
            </h3>
            <p>
              We drop off and collect passengers right at the designated disability bays outside Terminal 1 International, Terminal 2 Regional, Terminal 3, and Terminal 4 Qantas Domestic. You never have to push your chair across long open-air parking lots or wait in uncovered queues.
            </p>

            <h3 className="text-lg font-black text-white uppercase tracking-tight pt-2">
              FIFO Workers &amp; Family Holiday Travel
            </h3>
            <p>
              Western Australia&apos;s mining industry relies on dependable FIFO transfers. Our vans carry FIFO crews with large gear bags to Terminal 2 with zero fuss. Travelling families also enjoy pre-installed baby capsules, child seats, and booster seats upon request, ensuring complete compliance with WA road safety legislation.
            </p>
          </div>

          <div className="lg:col-span-5 bg-zinc-950 border-2 border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-black text-white uppercase tracking-wider mb-4 pb-3 border-b border-zinc-800 flex items-center gap-2">
              <Plane className="w-5 h-5 text-amber-400" aria-hidden="true" />
              <span>Terminals Served 24 Hours</span>
            </h3>

            <div className="space-y-3">
              {terminals.map((t, idx) => (
                <div key={idx} className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-amber-400 text-black font-black text-xs flex items-center justify-center shrink-0">
                    {t.code}
                  </span>
                  <div>
                    <span className="text-xs text-white font-bold block">{t.name}</span>
                    <span className="text-[11px] text-zinc-400 leading-snug block">{t.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider py-3 rounded-full transition-colors"
              >
                <span>Book Airport Taxi Van</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="airport-transfers" />
    </div>
  );
}
