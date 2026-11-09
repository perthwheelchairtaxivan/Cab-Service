import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Clock, Accessibility, HelpCircle } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Do Taxis Take Wheelchairs in Perth? | Accessible Taxi Guide",
  description:
    "Do Perth taxis carry wheelchairs? Learn which vehicles accept wheelchairs, rear ramp requirements, PTSS smartcards (formerly TUSS), and how to book an accessible taxi van 24/7.",
  alternates: {
    canonical: `${SITE_URL}/guides/do-taxis-take-wheelchairs-perth`,
  },
  openGraph: {
    title: "Do Taxis Take Wheelchairs in Perth? | Accessible Taxi Guide",
    description:
      "Everything you need to know about wheelchair transport in Perth: ramp access, vehicle types, and booking advice.",
    url: `${SITE_URL}/guides/do-taxis-take-wheelchairs-perth`,
    type: "article",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Wheelchair Accessible Taxi Guide",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/guides/do-taxis-take-wheelchairs-perth#article`,
      headline: "Do Taxis Take Wheelchairs in Perth, Western Australia?",
      description:
        "Comprehensive guide explaining wheelchair taxi accessibility, ramp systems, four-point tie-downs, and booking procedures across Perth.",
      image: `${SITE_URL}/images/og-image.jpg`,
      inLanguage: "en-AU",
      mainEntityOfPage: `${SITE_URL}/guides/do-taxis-take-wheelchairs-perth`,
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_URL,
      },
      author: {
        "@type": "Organization",
        name: "Perth Wheelchair Taxi Van Editorial Team",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Do Taxis Take Wheelchairs in Perth?",
          item: `${SITE_URL}/guides/do-taxis-take-wheelchairs-perth`,
        },
      ],
    },
  ],
};

export default function DoTaxisTakeWheelchairsPage() {
  return (
    <article className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={articleSchema} />

      <header className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-b border-zinc-900">
        <SlideUp>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Accessibility Guide
            </span>
            <span className="text-xs text-zinc-500">• 4 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-white mb-6">
            Do Taxis Take Wheelchairs in Perth?
          </h1>

          {/* Answer-first 50-word opening paragraph */}
          <div className="p-5 sm:p-6 bg-zinc-950 border-2 border-amber-400/40 rounded-2xl mb-4">
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
              <strong>Yes, specialised wheelchair accessible taxis and maxi cabs take wheelchairs in Perth.</strong> Standard passenger sedans only carry folding wheelchairs in the boot. For passengers who travel seated in their manual or powered wheelchair, purpose-built maxi taxi vans fitted with rear foldout ramps or hydraulic lifts and certified four-point tie-downs are required.
            </p>
          </div>
        </SlideUp>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            Standard Sedans vs. Wheelchair Accessible Vans
          </h2>
          <p className="mb-3">
            Many first-time visitors and newly injured passengers assume any Perth taxi can accommodate a wheelchair. Under Western Australia commercial vehicle regulations, regular sedans and standard rideshares cannot transport passengers while seated in a wheelchair. A passenger must be physically able to transfer into the car seat, and the wheelchair must fold into the boot.
          </p>
          <p>
            For passengers using electric powerchairs, tilt-in-space chairs, or mobility scooters—or those unable to transfer safely—a dedicated <strong>wheelchair accessible taxi van</strong> is necessary. These vehicles feature reinforced chassis, commercial door clearances (over 1,500 mm), and specialized boarding equipment.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            How Ramps and Restraint Systems Work
          </h2>
          <p className="mb-3">
            Boarding an accessible van is straightforward with an accredited driver:
          </p>
          <ul className="space-y-2.5 my-4 pl-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>Rear Boarding:</strong> The vehicle deploys a counterbalanced aluminium ramp or hydraulic lift directly onto the curbside or road surface.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>4-Point Floor Anchors:</strong> Heavy-duty retractable Q&apos;Straint or Unwin straps lock the front and rear of the wheelchair frame to the vehicle floor.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>Occupant Lap/Sash Belt:</strong> A dedicated commercial vehicle seatbelt secures the passenger independently of the wheelchair&apos;s own postural harness.</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            Advance Booking Advice for Perth Travel
          </h2>
          <p className="mb-3">
            Because wheelchair accessible vans represent a specialized portion of the Perth taxi fleet, hailing one from a rank at Perth Airport or suburban streets can involve substantial waiting times. We strongly advise booking in advance—especially for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
              <strong className="text-white block mb-1">Hospital &amp; Clinical Appointments</strong>
              <span className="text-zinc-400 text-xs">Arrive on time at Sir Charles Gairdner, Royal Perth, or Hollywood Private Hospital without parking stress.</span>
            </div>
            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
              <strong className="text-white block mb-1">Perth Airport Flights (T1–T4)</strong>
              <span className="text-zinc-400 text-xs">Direct terminal drop-off and pickup timed around your flight schedule.</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-zinc-950 border border-amber-400/40 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white uppercase">Need a Wheelchair Taxi in Perth Today?</h3>
            <p className="text-xs text-zinc-400 mt-1">Direct dispatch based in Girrawheen serving the entire Perth metro area 24/7.</p>
          </div>
          <Link
            href="/enquire"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider shrink-0"
          >
            <span>Book Online Now</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}

