import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Phone, HelpCircle } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "NDIS Transport in Perth: What to Ask Providers | Guide",
  description:
    "NDIS transport funding guide for Perth participants. Learn how to claim Core Supports (Category 02), invoice requirements, and key questions to ask taxi providers.",
  alternates: {
    canonical: `${SITE_URL}/guides/ndis-transport-perth`,
  },
  openGraph: {
    title: "NDIS Transport in Perth: What to Ask Providers | Guide",
    description:
      "A complete guide for self-managed and plan-managed NDIS participants booking accessible wheelchair transport in Perth.",
    url: `${SITE_URL}/guides/ndis-transport-perth`,
    type: "article",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "NDIS Transport Perth Guide",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/guides/ndis-transport-perth#article`,
      headline: "NDIS Transport in Perth: Essential Questions to Ask Providers",
      description:
        "Comprehensive guide for self-managed and plan-managed NDIS participants funding commercial passenger transport under Core Supports Category 02 in Perth.",
      image: `${SITE_URL}/images/og-image.jpg`,
      inLanguage: "en-AU",
      mainEntityOfPage: `${SITE_URL}/guides/ndis-transport-perth`,
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
          name: "NDIS Transport in Perth",
          item: `${SITE_URL}/guides/ndis-transport-perth`,
        },
      ],
    },
  ],
};

export default function NDISTransportGuidePage() {
  return (
    <article className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={articleSchema} />

      <header className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-b border-zinc-900">
        <SlideUp>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-black text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              NDIS Participant Guide
            </span>
            <span className="text-xs text-zinc-500">• 5 min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-white mb-6">
            NDIS Transport in Perth: What to Ask Your Provider
          </h1>

          <div className="p-5 sm:p-6 bg-zinc-950 border-2 border-sky-500/40 rounded-2xl mb-4">
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
              <strong>NDIS participants with Core Supports — Transport (Category 02) funding can claim commercial wheelchair taxi travel in Perth.</strong> Self-managed and plan-managed participants must ensure their provider supplies compliant tax invoices with an active ABN, origin, destination, and vehicle details to avoid reimbursement delays.
            </p>
          </div>
        </SlideUp>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            How NDIS Transport Funding Operates in WA
          </h2>
          <p className="mb-3">
            Under the National Disability Insurance Scheme (NDIS), transport funding assists participants who cannot use public transport without substantial difficulty due to their disability. Transport allowances generally fall into Level 1, Level 2, or Level 3 funding tiers, paid into your NDIS plan periodically.
          </p>
          <p>
            When using commercial wheelchair taxis in Perth, self-managed participants pay for the trip directly and claim repayment via the NDIS myplace portal. Plan-managed participants can have itemised invoices forwarded directly to their plan management organisation (such as My Plan Manager, Plan Partners, or similar agencies) for payment.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
            4 Critical Questions to Ask a Wheelchair Taxi Provider
          </h2>
          <div className="space-y-4 my-4">
            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl">
              <strong className="text-amber-400 font-bold block mb-1">
                1. &ldquo;Do you supply compliant tax invoices with a registered ABN?&rdquo;
              </strong>
              <p className="text-zinc-300 text-xs">
                To claim NDIS funds, invoices must show a valid Australian Business Number (ABN), date of travel, passenger name, pickup and drop-off suburbs, vehicle identification, and itemised GST details.
              </p>
            </div>

            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl">
              <strong className="text-amber-400 font-bold block mb-1">
                2. &ldquo;Will the van accommodate my specific powerchair dimensions?&rdquo;
              </strong>
              <p className="text-zinc-300 text-xs">
                Large powerchairs with headrests, tilt systems, or chin controls require at least 1,500 mm vertical door clearance and rated ramps. Always confirm your wheelchair height and combined weight.
              </p>
            </div>

            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl">
              <strong className="text-amber-400 font-bold block mb-1">
                3. &ldquo;Do you have 4-point floor tie-downs and independent passenger lap/sash belts?&rdquo;
              </strong>
              <p className="text-zinc-300 text-xs">
                Safety is non-negotiable. Qualified providers use commercial Q&apos;Straint or Unwin 4-point floor anchor systems plus Australian Standard occupant lap/sash safety belts.
              </p>
            </div>

            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl">
              <strong className="text-amber-400 font-bold block mb-1">
                4. &ldquo;Can I book recurring transport for work, study, or therapy sessions?&rdquo;
              </strong>
              <p className="text-zinc-300 text-xs">
                Consistency is key for weekly hydrotherapy, physiotherapy, or vocational commitments. Booking directly with an independent van operator guarantees the same vehicle and familiar driver.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-zinc-950 border border-sky-500/40 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white uppercase">Need NDIS Transport in Perth?</h3>
            <p className="text-xs text-zinc-400 mt-1">We supply itemised tax receipts for self-managed and plan-managed participants [TODO: owner to confirm licence/registration].</p>
          </div>
          <Link
            href="/services/medical-ndis-transport"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-400 hover:bg-sky-300 text-black font-black text-xs uppercase tracking-wider shrink-0"
          >
            <span>Learn About NDIS Trips</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}

