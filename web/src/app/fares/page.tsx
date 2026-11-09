import type { Metadata } from "next";
import Link from "next/link";
import {
  DollarSign,
  ShieldCheck,
  FileText,
  Clock,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Phone,
  Plane,
  HeartPulse,
  ExternalLink,
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG, CONFIG_FLAGS } from "@/config/site";

export const metadata: Metadata = {
  title: "Maxi Taxi Perth Prices & Rates | Upfront Fixed Quotes",
  description:
    "Understand Perth wheelchair taxi and maxi cab pricing. Learn about WA PTSS smartcard subsidies (50% up to $25 & 75% up to $35, formerly TUSS), NDIS invoicing, airport tolls, and fixed upfront quotes.",
  alternates: {
    canonical: `${SITE_URL}/fares`,
  },
  openGraph: {
    title: "Maxi Taxi Perth Prices & Rates | Upfront Fixed Quotes",
    description:
      "Clear explanation of Perth wheelchair taxi fares, WA PTSS subsidies (formerly TUSS), NDIS transport invoices, and upfront fixed pricing. Call +61 493 252 766.",
    url: `${SITE_URL}/fares`,
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Maxi Taxi Perth Prices and Fares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxi Taxi Perth Prices & Rates | Upfront Fixed Quotes",
    description:
      "Perth wheelchair taxi fares explained: WA PTSS subsidies (formerly TUSS), NDIS invoicing, and fixed upfront quotes.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

const fareFAQs = [
  {
    q: "How are wheelchair taxi fares calculated in Perth?",
    a: "In Western Australia, taxi fares are regulated by the Department of Transport (DoT) based on distance, time, and standard tariff bands (Tariff 1 for standard daytime, Tariff 2 for peak/night/weekends, and Tariff 3 for high holidays). For wheelchair bookings, passengers may travel on meter or request a guaranteed upfront fixed quote so the fare is locked in before travel.",
  },
  {
    q: "How does the WA Passenger Transport Subsidy Scheme (PTSS, formerly TUSS) work with fares?",
    a: "From 1 October 2025, paper TUSS vouchers have been replaced by the WA Department of Transport's electronic PTSS smartcard. Eligible residents receive a 50% subsidy (up to $25 per trip) for standard travel or 75% (up to $35 per trip in an authorized wheelchair-accessible taxi). Drivers process your card at destination through an approved terminal, and you only pay the remaining co-payment.",
  },
  {
    q: "Can I pay for transport using my NDIS plan?",
    a: "Yes. Self-managed and plan-managed NDIS participants who have 'Transport' funded under Core Supports (Category 02) can use our service. We provide a tax-compliant, itemised invoice detailing driver details, vehicle registration, pickup, destination, time, and ABN so your plan manager or the NDIA portal can process the reimbursement promptly.",
  },
  {
    q: "Does a 10-seater maxi taxi cost more than a standard taxi in Perth?",
    a: "Under WA taxi regulations, when 5 or more passengers travel together in a maxi cab, a regulated maxi tariff applies, or a group fixed charter rate is arranged. Travelling as one group of up to 10 passengers in a single maxi cab is almost always significantly cheaper and more convenient than paying for two separate 4-seater sedans or rideshares.",
  },
  {
    q: "Are there airport tolls or parking fees for Perth Airport transfers?",
    a: "Perth Airport applies a mandated ground transport access toll (curbside/terminal pickup fee) to all commercial taxis and rideshares collecting passengers at Terminals T1, T2, T3, and T4. When you request a fixed quote from us, this toll is clearly explained and integrated so there are never hidden surprises.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fares & Pricing",
      item: `${SITE_URL}/fares`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: fareFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FaresPage() {
  return (
    <div className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-3 block">
              Transparent Perth Transport Pricing
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] mb-4 text-white">
              Perth Maxi Taxi <span className="text-amber-400">&amp; Wheelchair Fares</span>
            </h1>
            {/* Answer-first 50-word opening paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Perth wheelchair accessible taxi and maxi cab fares are set by Western Australia Department of Transport meter tariffs or upfront agreed fixed quotes. We explain the WA PTSS 50% ($25 cap) and 75% ($35 cap) subsidy scheme (formerly TUSS), NDIS transport invoicing [TODO: owner to confirm licence/registration], and guarantee transparent pricing with no hidden arrival surprises.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-transform hover:scale-105"
              >
                <span>Request a Fixed Quote</span>
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

      {/* ── Key Pricing Factors Grid ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 block">
            What Determines Your Trip Cost
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
            How Pricing Works in Western Australia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                <Clock className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                1. Tariff Bands &amp; Distance
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Regulated WA taxi tariffs distinguish between weekday daytime travel (Tariff 1: 6am–6pm Mon–Fri) and evening/weekend peak travel (Tariff 2: 6pm–6am Mon–Fri, all weekend, and public holidays). Fares scale with total road distance and transit time.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-400">
              Department of Transport regulated rates apply across metropolitan Perth.
            </div>
          </div>

          <div className="p-6 bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                2. WA PTSS Subsidies (Formerly TUSS)
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Effective 1 October 2025, WA Department of Transport replaced paper TUSS vouchers with the electronic Passenger Transport Subsidy Scheme (PTSS) card. The standard subsidy covers 50% up to $25 per trip; wheelchair users in a wheelchair-accessible taxi receive 75% up to $35 per trip. {CONFIG_FLAGS.ptssSubsidyAccepted ? "PTSS cards are processed directly at journey's end." : "[TODO: owner to confirm licence/registration for PTSS card processing terminal]."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-400 space-y-1">
              <div>Last verified: October 2025 (WA DoT)</div>
              <a
                href="https://www.transport.wa.gov.au/taxis-on-demand-transport/passenger-transport-subsidy-scheme-ptss.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold underline"
              >
                <span>Official DoT PTSS rules</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="p-6 bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <FileText className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                3. NDIS Plan-Managed Billing {CONFIG_FLAGS.ndisBillingAccepted ? "" : "[TODO: owner to confirm licence/registration]"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                For participants funded under Core Supports — Transport, we provide itemised tax invoices showing date, origin, destination, vehicle plate, driver details, and registered ABN. These can be paid via card or remitted through your plan manager. {CONFIG_FLAGS.ndisBillingAccepted ? "" : "Formal NDIS provider registration / billing setup is subject to owner confirmation."}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-400">
              Invoices are emailed or WhatsApped instantly after trip completion.
            </div>
          </div>
        </div>
      </section>

      {/* ── Fixed Quotes vs Meter Breakdown ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 block">
              Certainty Before You Board
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Why Ask for an Upfront Fixed Quote?
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <p>
              When travelling to scheduled medical appointments at Sir Charles Gairdner Hospital, Royal Perth Hospital, or Fiona Stanley, traffic delays can cause metered anxiety. By requesting an <strong>upfront fixed quote</strong> when reserving in advance, your travel cost is agreed beforehand regardless of red lights or motorway congestion.
            </p>
            <p>
              For <strong>Perth Airport transfers</strong> (T1, T2, T3, and T4), a fixed quote includes passenger pickups, ample luggage stowage for up to 10 travellers, and airport ground transport access charges, allowing families, mining FIFO workers, and international wheelchair travellers to budget seamlessly.
            </p>
          </div>

          <div className="mt-8 p-6 bg-zinc-900 border border-amber-400/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-white font-bold text-sm block">Ready for an immediate price check?</span>
              <span className="text-zinc-400 text-xs">Send your pickup address and destination for a guaranteed quote.</span>
            </div>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Get Your Quote</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Fare Questions (Crawlable & Schema Verified) ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-t border-zinc-900">
        <div className="text-center mb-8">
          <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 block">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Common Fare &amp; Payment Questions
          </h2>
        </div>

        <div className="space-y-4">
          {fareFAQs.map((faq, i) => (
            <div key={i} className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl">
              <h3 className="font-bold text-white text-sm sm:text-base mb-2 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

