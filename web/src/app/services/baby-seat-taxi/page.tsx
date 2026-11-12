import { Baby, CheckCircle2, ShieldCheck, HeartHandshake, Phone, ArrowRight, Car } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SlideUp from "@/components/animations/SlideUp";
import RelatedServices from "@/components/services/RelatedServices";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Perth Taxi with Baby Seat | Fitted Child & Booster Seats",
  description:
    "Perth maxi taxi with professionally fitted baby capsules, child safety seats, and boosters. Safe family transport with luggage room across Perth.",
  alternates: {
    canonical: `${SITE_URL}/services/baby-seat-taxi`,
  },
  openGraph: {
    title: "Perth Taxi with Baby Seat | Fitted Child & Booster Seats",
    description:
      "Perth maxi taxi with professionally fitted baby capsules, child safety seats, and boosters. Safe family transport with luggage room across Perth.",
    url: `${SITE_URL}/services/baby-seat-taxi`,
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Taxi with Fitted Baby and Child Seats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perth Taxi with Baby Seat | Fitted Child & Booster Seats",
    description:
      "Perth maxi taxi with professionally fitted baby capsules, child safety seats, and boosters. Safe family transport across Perth.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/baby-seat-taxi#service`,
      name: "Perth Taxi with Baby & Child Seats",
      description:
        "Family-friendly maxi taxi vans equipped with certified rear-facing capsules, forward-facing child seats, and boosters across Perth WA.",
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
          name: "Baby Seat Taxi",
          item: `${SITE_URL}/services/baby-seat-taxi`,
        },
      ],
    },
  ],
};

export default function BabySeatTaxiPage() {
  const seatOptions = [
    { type: "Rear-Facing Capsule", age: "0 – 6 months", desc: "Designed for newborn infants with secure harness anchoring and head support" },
    { type: "Forward-Facing Child Seat", age: "6 months – 4 years", desc: "Built-in 5-point safety harness for toddlers and young children" },
    { type: "Booster Seat", age: "4 – 7+ years", desc: "Contoured booster seat aligning vehicle sash seatbelt across child's shoulder" },
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
                { label: "Baby Seat Taxi", href: "/services/baby-seat-taxi" },
              ]}
              align="center"
              className="mb-4"
            />
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-3 block">
              Certified Child Safety Restraints
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] mb-4 text-white">
              Perth Taxi <span className="text-amber-400">with Baby Seat</span>
            </h1>
            {/* Answer-first 50-word opening paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto font-normal">
              Looking for a reliable Perth taxi with baby seats? Perth Wheelchair Taxi Van provides clean, spacious 10-seater maxi cabs equipped with professionally fitted infant capsules, forward-facing child seats, and booster seats on request. Compliant with Western Australian road safety laws, we guarantee safe family travel to Perth Airport and across the city.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-transform hover:scale-105"
              >
                <span>Book Family Taxi</span>
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
              Safety First: Never Travel Unsecured in Perth
            </h2>
            <p>
              In Western Australia, children under seven years of age must be secured in an approved, properly fastened child car restraint. Although standard taxis have certain exemptions, no parent wants their baby or toddler travelling without a properly anchored car seat, particularly on busy 100 km/h motorways like the Mitchell Freeway or Tonkin Highway.
            </p>
            <p>
              When you book with us, we pre-install the exact child restraint appropriate for your child&apos;s age and weight before arriving at your doorstep. You don&apos;t have to lug heavy, awkward car seats through airport terminals or worry about installing them yourself in a rush.
            </p>

            <h3 className="text-lg font-black text-white uppercase tracking-tight pt-2">
              Multiple Child Seats &amp; Family Van Space
            </h3>
            <p>
              Have twins, multiple children, or travelling with grandparents? Standard 4-seater cars cannot legally fit two car seats plus three adults. Our 10-seater maxi cabs can comfortably accommodate multiple child restraints alongside adult passengers, prams, strollers, and holiday baggage.
            </p>

            <h3 className="text-lg font-black text-white uppercase tracking-tight pt-2">
              Sanitised &amp; Pre-Inspected Restraints
            </h3>
            <p>
              All our child restraints meet strict Australian Safety Standards (AS/NZS 1754). Harnesses, buckles, and fabrics are routinely cleaned and sanitised between journeys, ensuring your little ones enjoy a clean, hygienic ride.
            </p>
          </div>

          <div className="lg:col-span-5 bg-zinc-950 border-2 border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-black text-white uppercase tracking-wider mb-4 pb-3 border-b border-zinc-800 flex items-center gap-2">
              <Baby className="w-5 h-5 text-amber-400" aria-hidden="true" />
              <span>Available Child Restraint Types</span>
            </h3>

            <div className="space-y-4">
              {seatOptions.map((s, idx) => (
                <div key={idx} className="p-3.5 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-white font-bold">{s.type}</span>
                    <span className="text-[10px] bg-amber-400/20 text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded font-black uppercase">
                      {s.age}
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-300 leading-snug block">
                    {s.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider py-3 rounded-full transition-colors"
              >
                <span>Request Baby Seat Booking</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="baby-seat-taxi" />
    </div>
  );
}
