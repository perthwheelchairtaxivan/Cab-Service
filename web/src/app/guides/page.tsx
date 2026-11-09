import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, ShieldCheck, Accessibility, FileText, Users } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Perth Wheelchair Taxi Guides | PTSS, NDIS & Travel Tips",
  description:
    "Authoritative transport guides for Perth wheelchair users, carers, and group travellers. Learn how WA PTSS subsidies (formerly TUSS) work, NDIS invoices, and vehicle booking requirements.",
  alternates: {
    canonical: `${SITE_URL}/guides`,
  },
  openGraph: {
    title: "Perth Wheelchair Taxi Guides | PTSS, NDIS & Travel Tips",
    description:
      "Authoritative transport guides for Perth wheelchair users, carers, and group travellers. Learn how WA PTSS subsidies (formerly TUSS) work, NDIS invoices, and vehicle booking requirements.",
    url: `${SITE_URL}/guides`,
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Accessible Transport Guides",
      },
    ],
  },
};

export const GUIDES = [
  {
    slug: "do-taxis-take-wheelchairs-perth",
    title: "Do Taxis Take Wheelchairs in Perth?",
    description:
      "A complete guide to booking wheelchair transport in Perth: the difference between standard sedans and accessible vans, ramp requirements, and booking advice.",
    tag: "Accessibility Advice",
    readTime: "4 min read",
    icon: Accessibility,
  },
  {
    slug: "how-to-use-ptss-wheelchair-taxi-wa",
    title: "How to Use PTSS for Wheelchair Taxi Trips in WA (Formerly TUSS)",
    description:
      "Step-by-step instructions on WA's Passenger Transport Subsidy Scheme (PTSS): smartcards replacing paper TUSS vouchers from 1 Oct 2025, 50% & 75% caps ($25 & $35), and payment rules.",
    tag: "Government Subsidies",
    readTime: "5 min read",
    icon: FileText,
  },
  {
    slug: "ndis-transport-perth",
    title: "NDIS Transport in Perth: Questions to Ask Providers",
    description:
      "Essential checklist for self-managed and plan-managed NDIS participants funding transport under Core Supports (Category 02).",
    tag: "NDIS Participants",
    readTime: "5 min read",
    icon: ShieldCheck,
  },
  {
    slug: "maxi-taxi-vs-two-taxis-perth",
    title: "Maxi Taxi vs Two Taxis in Perth: Capacity & Cost",
    description:
      "Cost, luggage, and convenience comparison between booking one 10-seater maxi cab versus split travel in two standard sedans for airport and event trips.",
    tag: "Group Transport",
    readTime: "4 min read",
    icon: Users,
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
      name: "Transport Guides",
      item: `${SITE_URL}/guides`,
    },
  ],
};

export default function GuidesHubPage() {
  return (
    <div className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={breadcrumbSchema} />

      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <SlideUp>
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-3 block">
              Evidence-First Passenger Advice
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.02] mb-4 text-white">
              Perth Accessible <span className="text-amber-400">Transport Guides</span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Practical, verified guides for wheelchair users, NDIS coordinators, hospital visitors, and families travelling throughout the Perth metropolitan area.
            </p>
          </SlideUp>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GUIDES.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="p-6 bg-zinc-950 border-2 border-zinc-800 hover:border-amber-400/60 rounded-2xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                      {guide.tag}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-medium">{guide.readTime}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-amber-400 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {guide.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

