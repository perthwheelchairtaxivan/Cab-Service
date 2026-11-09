import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, CreditCard, AlertCircle } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG, CONFIG_FLAGS } from "@/config/site";

export const metadata: Metadata = {
  title: "How to Use PTSS for Wheelchair Taxis in WA (Formerly TUSS) | Guide",
  description:
    "Official Western Australia Passenger Transport Subsidy Scheme (PTSS) guide. Learn about the 1 October 2025 transition from TUSS vouchers to PTSS smartcards, 50% and 75% subsidy caps, and booking accessible taxis.",
  alternates: {
    canonical: `${SITE_URL}/guides/how-to-use-ptss-wheelchair-taxi-wa`,
  },
  openGraph: {
    title: "How to Use PTSS for Wheelchair Taxis in WA (Formerly TUSS) | Guide",
    description:
      "Understand the WA PTSS smartcard: 1 October 2025 transition from paper TUSS vouchers, 50% (up to $25) and 75% (up to $35) subsidy rates, and booking wheelchair maxi taxis in Perth.",
    url: `${SITE_URL}/guides/how-to-use-ptss-wheelchair-taxi-wa`,
    type: "article",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WA PTSS Wheelchair Taxi Guide",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/guides/how-to-use-ptss-wheelchair-taxi-wa#article`,
      headline: "How to Use the Passenger Transport Subsidy Scheme (PTSS, Formerly TUSS) for Wheelchair Trips in WA",
      description:
        "Guide to Western Australia's Passenger Transport Subsidy Scheme (PTSS) smartcard rules, 50% ($25 cap) and 75% ($35 cap) co-payment subsidies, and accessible taxi bookings.",
      image: `${SITE_URL}/images/og-image.jpg`,
      inLanguage: "en-AU",
      mainEntityOfPage: `${SITE_URL}/guides/how-to-use-ptss-wheelchair-taxi-wa`,
      dateModified: "2025-10-01",
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
          name: "How to Use PTSS (Formerly TUSS) in WA",
          item: `${SITE_URL}/guides/how-to-use-ptss-wheelchair-taxi-wa`,
        },
      ],
    },
  ],
};

export default function HowToUsePTSSPage() {
  return (
    <article className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={articleSchema} />

      <header className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-b border-zinc-900">
        <SlideUp>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              WA Government Subsidy Guide
            </span>
            <span className="text-xs text-zinc-500">• 5 min read</span>
            <span className="text-xs text-zinc-400 bg-zinc-900 px-2.5 py-0.5 rounded-full border border-zinc-800">
              Last verified: October 2025
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-white mb-6">
            How to Use PTSS for Wheelchair Taxi Trips in Western Australia (Formerly TUSS)
          </h1>

          <div className="p-5 sm:p-6 bg-zinc-950 border-2 border-emerald-500/40 rounded-2xl mb-4">
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
              <strong>Crucial Policy Update:</strong> Per the Western Australia Department of Transport (DoT), paper <strong>Taxi User Subsidy Scheme (TUSS) vouchers can no longer be used in taxis from 1 October 2025</strong>. All participants transition to an electronic <strong>Passenger Transport Subsidy Scheme (PTSS) smartcard</strong>. Eligible travellers receive either a 50% standard subsidy (capped at $25 per trip) or a 75% wheelchair subsidy (capped at $35 per trip in an authorized wheelchair-accessible taxi).
            </p>
          </div>
        </SlideUp>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        {/* Critical Transition Alert */}
        <div className="p-5 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h2 className="text-sm font-black text-amber-300 uppercase tracking-wide">
              Notice: TUSS Paper Vouchers Phased Out
            </h2>
            <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
              Paper TUSS voucher booklets were retired on 1 October 2025. If you hold old paper vouchers, contact the WA Department of Transport to ensure your PTSS smartcard has been activated before booking on-demand transport.
            </p>
            <a
              href="https://www.transport.wa.gov.au/taxis-on-demand-transport/passenger-transport-subsidy-scheme-ptss.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold mt-2 underline underline-offset-4"
            >
              <span>View official WA DoT PTSS transition details</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            What is the Passenger Transport Subsidy Scheme (PTSS)?
          </h2>
          <p className="mb-3">
            The Passenger Transport Subsidy Scheme (PTSS, formerly known as TUSS) is administered by the <strong>Western Australia Department of Transport (DoT)</strong>. It provides subsidized taxi travel for Western Australian residents with permanent disabilities that prevent them from accessing conventional public bus or train networks.
          </p>
          <p>
            Instead of carrying physical paper voucher booklets, members now use a secure PTSS chip/tap card that is processed through authorized point-of-sale payment terminals inside registered on-demand passenger transport vehicles.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            Subsidy Tiers &amp; Regulated Caps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl">
              <span className="text-emerald-400 font-bold uppercase text-xs block mb-1">
                Standard Subsidy: 50% (Up to $25)
              </span>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Allocated to participants who have severe mobility impairments or medical conditions that prevent public transport use, but do not require travel seated in a wheelchair. The government pays 50% of the metered fare, capped at a maximum subsidy of <strong>$25.00 per trip</strong>.
              </p>
            </div>
            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl">
              <span className="text-amber-400 font-bold uppercase text-xs block mb-1">
                Wheelchair Subsidy: 75% (Up to $35)
              </span>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Allocated to participants who are permanently confined to a wheelchair or require specialised wheelchair accessible transport (WAT). The government pays 75% of the metered fare, capped at a maximum subsidy of <strong>$35.00 per trip</strong>.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            Step-by-Step: Using Your PTSS Card on a Journey
          </h2>
          <ol className="space-y-3 pl-2">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span><strong>Book in Advance:</strong> When reserving via phone or WhatsApp, inform dispatch that you intend to use a PTSS card so the driver can ensure an active, authorized terminal is ready.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span><strong>Carry Your Card:</strong> The approved PTSS cardholder must be present in the vehicle for the duration of the journey. Cards cannot be transferred or loaned to others.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span><strong>Card Tap / Processing:</strong> At your destination, tap or insert your PTSS card into the driver&apos;s approved terminal. The terminal calculates and applies the 50% or 75% government subsidy up to the $25 or $35 cap.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
              <span><strong>Pay Remaining Co-Payment:</strong> Settle the balance with debit/credit card, EFTPOS, or cash.</span>
            </li>
          </ol>
        </div>

        {/* Verification & Official Link */}
        <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
          <h3 className="text-sm font-bold text-white uppercase">Official WA Government References</h3>
          <p className="text-xs text-zinc-400">
            For questions regarding scheme eligibility, card issuance, or lost cards, visit the official Department of Transport resource:
          </p>
          <a
            href="https://www.transport.wa.gov.au/taxis-on-demand-transport/passenger-transport-subsidy-scheme-ptss.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-4"
          >
            <span>transport.wa.gov.au — Passenger Transport Subsidy Scheme (PTSS)</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Booking CTA with Configurable Toggle */}
        <div className="p-6 bg-zinc-950 border border-emerald-500/40 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white uppercase">
              {CONFIG_FLAGS.ptssSubsidyAccepted
                ? "Book an Accessible Ride with PTSS"
                : "Book an Accessible Taxi [TODO: owner to confirm licence/registration]"}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              {CONFIG_FLAGS.ptssSubsidyAccepted
                ? "We accept WA PTSS smartcards across Greater Perth 24 hours a day."
                : "Accessible taxi vans available 24/7 across Perth metropolitan areas. Note: PTSS card terminal acceptance pending final owner licence confirmation."}
            </p>
          </div>
          <Link
            href="/enquire"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-wider shrink-0"
          >
            <span>Book / Enquire</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}
