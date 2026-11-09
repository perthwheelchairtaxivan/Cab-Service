import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Clock,
  Plane,
  Hospital,
  Navigation,
  ArrowRight,
  Phone,
  FileText,
  Accessibility,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import SlideUp from "@/components/animations/SlideUp";
import JsonLd from "@/components/seo/JsonLd";
import { SUBURBS_DATA } from "@/config/suburbs-data";
import { SITE_URL, SITE_CONFIG } from "@/config/site";

export function generateStaticParams() {
  return Object.keys(SUBURBS_DATA).map((slug) => ({
    suburb: slug,
  }));
}

type Props = {
  params: Promise<{ suburb: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const data = SUBURBS_DATA[resolvedParams.suburb.toLowerCase()];
  if (!data) return {};

  const title = `${data.name} Wheelchair Taxi | Perth Maxi Cab 24/7`;
  const description = `Wheelchair accessible taxi vans in ${data.name}, WA. Rear ramp & lift access, up to 10 passengers. PTSS (formerly TUSS) & NDIS transport options 24/7. Call or WhatsApp +61 493 252 766.`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `${SITE_URL}/locations/${data.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/locations/${data.slug}`,
      type: "website",
      siteName: SITE_CONFIG.name,
      locale: "en_AU",
      images: [
        {
          url: `${SITE_URL}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Wheelchair Accessible Taxi in ${data.name} WA`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
  };
}

export default async function SuburbPage({ params }: Props) {
  const resolvedParams = await params;
  const data = SUBURBS_DATA[resolvedParams.suburb.toLowerCase()];
  if (!data) notFound();

  const suburbSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/locations/${data.slug}#service`,
        name: `Wheelchair Accessible Taxi in ${data.name}`,
        description: `Wheelchair accessible commercial passenger taxi and maxi cab service in ${data.name}, Western Australia.`,
        provider: {
          "@type": "TaxiService",
          name: SITE_CONFIG.name,
          url: SITE_URL,
          telephone: SITE_CONFIG.phoneRaw,
          email: SITE_CONFIG.email,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: data.name,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
          {
            "@type": "ListItem",
            position: 3,
            name: data.name,
            item: `${SITE_URL}/locations/${data.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={suburbSchema} />

      {/* ── Suburb Hero ── */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Serving {data.name} &amp; Surrounds</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] text-white mb-4">
              Wheelchair Accessible <span className="text-amber-400">Taxi in {data.name}</span>
            </h1>

            {/* Answer-first 50-word opening paragraph unique to this suburb */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto font-normal">
              {data.localIntro}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl(
                  `Hi, I need to book a wheelchair accessible taxi / maxi cab in ${data.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4" aria-hidden="true" />
                <span>Book via WhatsApp</span>
              </a>

              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-full border border-zinc-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>

              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider px-5 py-3.5 rounded-full transition-colors"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ── Local Highlights & Route Specifications ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Healthcare & Medical Corridors */}
          <div className="p-6 bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
                <Hospital className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                Medical &amp; Hospital Transit
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                Frequent clinic and hospital routes servicing {data.name} residents:
              </p>
              <ul className="space-y-2 text-xs text-zinc-300">
                {data.medicalFacilities.map((hosp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{hosp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-400">
              WA PTSS smartcards (formerly TUSS) and itemised NDIS invoices supported [TODO: owner to confirm licence/registration].
            </div>
          </div>

          {/* Card 2: Transit Times & Perth Airport Links */}
          <div className="p-6 bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <Plane className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                Airport &amp; Arterial Links
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <div className="flex justify-between items-center py-1.5 border-b border-zinc-800">
                  <span className="text-zinc-400">Est. Time to Perth Airport:</span>
                  <span className="font-bold text-amber-400">~{data.travelTimeToAirportMin} minutes</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-zinc-800">
                  <span className="text-zinc-400">Distance from Base:</span>
                  <span className="font-bold text-white">{data.distanceFromBaseKm} km</span>
                </div>
                <div>
                  <span className="text-zinc-400 block mb-1">Key Travel Corridors:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {data.primaryRoads.map((road, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-zinc-900 border border-zinc-700/80 px-2 py-0.5 rounded text-zinc-300"
                      >
                        {road}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-400">
              Fixed upfront pricing available for all Terminals (T1–T4).
            </div>
          </div>

          {/* Card 3: Key Destinations & Local Trips */}
          <div className="p-6 bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                <Navigation className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                Common Local Destinations
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                Frequent passenger journeys in and around {data.name}:
              </p>
              <ul className="space-y-2 text-xs text-zinc-300">
                {data.typicalTrips.map((trip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{trip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-400">
              Up to 10 passengers can travel together in our maxi cab fleet.
            </div>
          </div>
        </div>

        {/* Detailed Accessibility & Safety Description */}
        <div className="mt-12 p-8 bg-zinc-950 border border-zinc-800 rounded-3xl">
          <div className="max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
              Accessibility Features for {data.name} Passengers
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              {data.accessibilityFeatures}
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
              Our taxi vans are equipped with certified rear foldout ramps or hydraulic lifts, heavy-duty 4-point floor tie-down anchor straps, and independent lap/sash seatbelts. Passengers remain safely and comfortably seated in their manual or powered wheelchairs for the entire journey.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/fares"
                className="inline-flex items-center gap-1.5 text-xs font-black text-amber-400 hover:text-amber-300 uppercase tracking-wider"
              >
                <span>View Fares &amp; PTSS Rules</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
              <Link
                href="/services/wheelchair-accessible-taxi"
                className="inline-flex items-center gap-1.5 text-xs font-black text-amber-400 hover:text-amber-300 uppercase tracking-wider"
              >
                <span>Wheelchair Specs &amp; Van Details</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 text-xs font-black text-white hover:text-amber-400 uppercase tracking-wider"
              >
                <span>All Service Areas</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
