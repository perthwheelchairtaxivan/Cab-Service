import { Users, CheckCircle2, ShieldCheck, Luggage, Phone, ArrowRight, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SlideUp from "@/components/animations/SlideUp";
import RelatedServices from "@/components/services/RelatedServices";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Maxi Taxi Perth | 10 Seater Group Maxi Cab Booking 24/7",
  description:
    "Book a 10-seater maxi taxi in Perth for groups, airport luggage, and events. Upfront fixed quotes, dual air conditioning, 24/7 availability. Call now.",
  alternates: {
    canonical: `${SITE_URL}/services/group-maxi-cab`,
  },
  openGraph: {
    title: "Maxi Taxi Perth | 10 Seater Group Maxi Cab Booking 24/7",
    description:
      "Perth 10-seater maxi taxi vans for airport departures, corporate events, wedding transfers, and group charters. Fixed quotes and 24/7 service.",
    url: `${SITE_URL}/services/group-maxi-cab`,
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth 10-Seater Maxi Cab Group Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxi Taxi Perth | 10 Seater Group Maxi Cab Booking 24/7",
    description:
      "Book a 10-seater maxi taxi in Perth for groups, airport luggage, and events. Upfront fixed quotes & 24/7 booking.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/group-maxi-cab#service`,
      name: "10-Seater Group Maxi Cab Perth",
      description:
        "High-capacity 10-seater maxi taxi van in Perth for group travel, event charters, and airport transfers with generous luggage space.",
      provider: {
        "@type": "TaxiService",
        "@id": `${SITE_URL}/#business`,
      },
      areaServed: {
        "@type": "City",
        name: "Perth",
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
          name: "Group Maxi Cab",
          item: `${SITE_URL}/services/group-maxi-cab`,
        },
      ],
    },
  ],
};

export default function GroupMaxiCabPage() {
  const perks = [
    { title: "10 Passenger Seating", desc: "Keep your entire travel party together without splitting into two separate cars" },
    { title: "Generous Luggage Cargo", desc: "High-roof van volume accommodating up to 10 suitcases, carry-ons, and prams" },
    { title: "Dual Zone Air-Conditioning", desc: "Front and rear independent air-conditioning keeping all rows cool in WA heat" },
    { title: "Upfront Fixed Quotes", desc: "Guaranteed all-inclusive group quote with no meter anxiety or hidden arrival surcharges" },
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
                { label: "Group Maxi Cab", href: "/services/group-maxi-cab" },
              ]}
              align="center"
              className="mb-4"
            />
            <span className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-3 block">
              High-Capacity Group Transport
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] mb-4 text-white">
              10-Seater Maxi Taxi <span className="text-amber-400">in Perth</span>
            </h1>
            {/* Answer-first 50-word opening paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto font-normal">
              Need a 10-seater maxi taxi in Perth? Perth Wheelchair Taxi Van delivers high-capacity group transport across the Perth metropolitan area 24/7. Ideal for airport departures with heavy luggage, corporate events, Optus Stadium match days, and weddings, our spacious vans carry up to 10 passengers with guaranteed upfront fixed quotes.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-transform hover:scale-105"
              >
                <span>Book 10-Seater Maxi Cab</span>
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
              One Van, One Fare: Travel Together Across Perth
            </h2>
            <p>
              When travelling with a group of 5 to 10 people, ordering two standard 4-seater sedans or rideshare vehicles doubles your flagfall fees, doubles your airport parking tolls, and risks one car getting stuck in traffic while the other waits. Booking a single <strong>10-seater maxi taxi</strong> keeps your party together, cuts your total travel costs, and simplifies arrival logistics.
            </p>
            <p>
              Our maxi cabs are maintained in immaculate condition, featuring clean upholstered seats, dual air-conditioning throughout the cabin, and wide windows for sightseeing trips. Whether heading from Joondalup to Perth Airport, Girrawheen to Fremantle, or touring the Swan Valley, you travel in absolute comfort.
            </p>

            <h3 className="text-lg font-black text-white uppercase tracking-tight pt-2">
              Massive Luggage Capacity for Airport Flights
            </h3>
            <p>
              Flying with extensive luggage, surfboards, sporting equipment, or baby gear? Standard sedans quickly run out of trunk space. Our long-wheelbase high-roof van offers expansive rear cargo volume that swallows up to 10 full-sized suitcases without forcing passengers to cram bags into footwells.
            </p>

            <h3 className="text-lg font-black text-white uppercase tracking-tight pt-2">
              Optus Stadium, RAC Arena &amp; Wedding Charters
            </h3>
            <p>
              Attending an AFL match at Optus Stadium, a concert at RAC Arena, or a wedding celebration in the Swan Valley? Public transport and rideshare surge pricing can quickly spoil an evening out. We offer fixed-rate charter bookings with pre-arranged return pickups so your entire group arrives together and returns home safely.
            </p>
          </div>

          <div className="lg:col-span-5 bg-zinc-950 border-2 border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-black text-white uppercase tracking-wider mb-4 pb-3 border-b border-zinc-800 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-400" aria-hidden="true" />
              <span>Group Transport Advantages</span>
            </h3>

            <div className="space-y-4">
              {perks.map((p, idx) => (
                <div key={idx} className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block mb-0.5">
                    {p.title}
                  </span>
                  <span className="text-xs text-zinc-200 leading-snug font-medium block">
                    {p.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider py-3 rounded-full transition-colors"
              >
                <span>Request Group Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="group-maxi-cab" />
    </div>
  );
}
