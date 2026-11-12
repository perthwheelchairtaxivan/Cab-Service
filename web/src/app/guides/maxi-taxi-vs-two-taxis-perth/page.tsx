import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, DollarSign, Luggage, Plane } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SITE_URL, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Maxi Taxi vs Two Taxis in Perth: Capacity & Cost | Guide",
  description:
    "Is a 10-seater maxi taxi cheaper than two standard taxis in Perth? Compare passenger fares, luggage space, airport tolls, and group travel convenience.",
  alternates: {
    canonical: `${SITE_URL}/guides/maxi-taxi-vs-two-taxis-perth`,
  },
  openGraph: {
    title: "Maxi Taxi vs Two Taxis in Perth: Capacity & Cost | Guide",
    description:
      "Planning group transport in Perth? Compare the cost, luggage space, and logistics of one 10-seater maxi taxi versus booking two separate sedans.",
    url: `${SITE_URL}/guides/maxi-taxi-vs-two-taxis-perth`,
    type: "article",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Maxi Taxi vs Two Taxis Comparison",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/guides/maxi-taxi-vs-two-taxis-perth#article`,
      headline: "Maxi Taxi vs. Two Taxis in Perth: Capacity, Luggage & Cost Comparison",
      description:
        "Detailed comparison demonstrating why booking a single 10-seater maxi cab in Perth is more economical and convenient than splitting into two standard sedans.",
      image: `${SITE_URL}/images/og-image.jpg`,
      inLanguage: "en-AU",
      mainEntityOfPage: `${SITE_URL}/guides/maxi-taxi-vs-two-taxis-perth`,
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
          name: "Maxi Taxi vs Two Taxis in Perth",
          item: `${SITE_URL}/guides/maxi-taxi-vs-two-taxis-perth`,
        },
      ],
    },
  ],
};

export default function MaxiTaxiVsTwoTaxisPage() {
  return (
    <article className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={articleSchema} />

      <header className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-b border-zinc-900">
        <SlideUp>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              {
                label: "Maxi Taxi vs Two Taxis in Perth",
                href: "/guides/maxi-taxi-vs-two-taxis-perth",
              },
            ]}
            className="mb-4"
          />
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Group Transport Advice
            </span>
            <span className="text-xs text-zinc-500">• 4 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-white mb-6">
            Maxi Taxi vs. Two Taxis in Perth: Which Is Better for Groups?
          </h1>

          <div className="p-5 sm:p-6 bg-zinc-950 border-2 border-amber-400/40 rounded-2xl mb-4">
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
              <strong>Booking one 10-seater maxi taxi is almost always cheaper, more reliable, and far easier than hailing two standard taxis in Perth.</strong> A single maxi van avoids duplicate flagfall charges, double airport access tolls, split arrival times, and luggage overflow when travelling with five or more passengers.
            </p>
          </div>
        </SlideUp>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            Direct Cost Comparison for Groups of 5 to 10
          </h2>
          <p className="mb-3">
            In Western Australia, regular sedans and rideshare vehicles can carry a maximum of 4 passengers. If your party has 5, 6, 7, 8, 9, or 10 travellers, splitting into two vehicles immediately incurs:
          </p>
          <ul className="space-y-2.5 my-4 pl-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>Double Flagfalls &amp; Booking Fees:</strong> Each sedan begins with its own flagfall fee and base meter rate.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>Double Airport Terminal Tolls:</strong> Perth Airport charges commercial pickup access fees per vehicle at Terminals T1–T4. Two sedans pay two tolls.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span><strong>Double Traffic Meter Running:</strong> If one car gets separated in Mitchell Freeway or Tonkin Highway congestion, that vehicle&apos;s meter continues ticking higher.</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            Luggage Space: The Hidden Trap of Standard Sedans
          </h2>
          <p className="mb-3">
            Standard 4-door sedans have limited trunk capacities (typically 400 to 500 litres). When four adults travel to Perth Airport with four full-size 23 kg suitcases, two carry-on bags, and personal backpacks, standard car boots simply cannot close.
          </p>
          <p>
            By contrast, a long-wheelbase <strong>10-seater maxi cab</strong> features a high roof and expansive rear cargo volume. It easily swallows large luggage, sports bags, prams, and folding mobility aids without forcing passengers to hold heavy bags on their laps.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            Group Coordination &amp; Event Transport
          </h2>
          <p className="mb-3">
            Whether attending a wedding in the Swan Valley, catching a concert at Optus Stadium, or celebrating a family reunion, keeping your party together is invaluable:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
              <strong className="text-white block mb-1">Swan Valley Wine Charters</strong>
              <span className="text-zinc-400 text-xs">Arrive together at wineries and breweries without waiting for stragglers or coordinating designated drivers.</span>
            </div>
            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
              <strong className="text-white block mb-1">Perth Airport Family Departures</strong>
              <span className="text-zinc-400 text-xs">Parents, grandparents, children, and baby car seats all travel safely in a single, air-conditioned cabin.</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-zinc-950 border border-amber-400/40 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white uppercase">Travelling with a Group in Perth?</h3>
            <p className="text-xs text-zinc-400 mt-1">Book our 10-seater maxi taxi with an upfront fixed rate quote.</p>
          </div>
          <Link
            href="/services/group-maxi-cab"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider shrink-0"
          >
            <span>Explore 10-Seater Maxi Cab</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}

