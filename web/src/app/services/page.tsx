import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Accessibility,
  Users,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Car,
  Sparkles,
  Star,
  Zap,
  HeartPulse,
  Baby,
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import ServiceCard from "@/components/services/ServiceCard";
import HowItWorks from "@/components/services/HowItWorks";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG, CONFIG_FLAGS } from "@/config/site";

export const metadata: Metadata = {
  title: "Perth Wheelchair Taxi & Maxi Cab Services | 24/7",
  description:
    "Perth wheelchair accessible taxi vans and 10-seater maxi cabs. Rear ramp or lift, PTSS smartcards (formerly TUSS) & NDIS transport options, 24/7 airport and medical transfers.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Perth Wheelchair Taxi & Maxi Cab Services | 24/7",
    description:
      "Perth wheelchair accessible taxi vans and 10-seater maxi cabs. Rear ramp or lift, PTSS smartcards (formerly TUSS) & NDIS transport options, 24/7 airport and medical transfers.",
    url: `${SITE_URL}/services`,
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Wheelchair Taxi and Maxi Cab Fleet Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perth Wheelchair Taxi & Maxi Cab Services | 24/7",
    description:
      "Perth wheelchair accessible taxi vans and 10-seater maxi cabs. Rear ramp or lift, PTSS & NDIS transport options 24/7.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

const servicesList = [
  {
    title: "Wheelchair Taxi",
    tagline: "Girrawheen & Perth Metro",
    iconName: "Accessibility" as const,
    gradient: "sky" as const,
    features: ["Ramp or Lift Access", "4-Point Tie-Downs", "Carers Welcome"],
    serviceHref: "/services/wheelchair-accessible-taxi",
    badgeText: "24/7",
  },
  {
    title: "NDIS & Medical Transport",
    tagline: "NDIS · WA PTSS · Hospitals",
    iconName: "HeartPulse" as const,
    gradient: "rose" as const,
    features: ["Hospital Transfers", "WA PTSS Smartcards", "Itemised NDIS Invoices"],
    serviceHref: "/services/medical-ndis-transport",
    badgeText: "NDIS",
  },
  {
    title: "Group Maxi Cab",
    tagline: "Up to 10 Passengers",
    iconName: "Users" as const,
    gradient: "emerald" as const,
    features: ["10 Seater Capacity", "Dual A/C", "Ample Luggage"],
    serviceHref: "/services/group-maxi-cab",
    badgeText: "10 Seater",
  },
  {
    title: "Baby Seat Taxi",
    tagline: "Pre-installed Child Seats",
    iconName: "Baby" as const,
    gradient: "amber" as const,
    features: ["Baby Capsules", "Child Seats", "Booster Seats"],
    serviceHref: "/services/baby-seat-taxi",
    badgeText: "Family",
  },
  {
    title: "Airport Transfer",
    tagline: "Terminals T1 · T2 · T3 · T4",
    iconName: "Plane" as const,
    gradient: "amber" as const,
    features: ["Flight Monitoring", "Terminal Meet & Greet", "Luggage Room"],
    serviceHref: "/services/airport-transfers",
    badgeText: "Airport 24/7",
  },
  {
    title: "Weddings & Events",
    tagline: "Swan Valley & Charters",
    iconName: "Sparkles" as const,
    gradient: "violet" as const,
    features: ["Wine Tours", "Wedding Guests", "Upfront Charter Quotes"],
    serviceHref: "/services/tours-and-events-transport",
    badgeText: "Private Charter",
  },
];

const stats = [
  { value: "24/7", label: "Open 24/7", icon: Clock },
  { value: "10", label: "Max Passengers", icon: Users },
  { value: "PTSS", label: "Smartcard (ex-TUSS)", icon: Star },
  { value: "NDIS", label: "Invoices Provided", icon: ShieldCheck },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white">
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-3 block">
              Fleet &amp; Accessible Transport
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] mb-4 text-white">
              Perth Wheelchair Taxi <span className="text-amber-400">&amp; Maxi Cab Services</span>
            </h1>
            {/* Answer-first opening paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto font-normal">
              Perth Wheelchair Taxi Van provides accredited wheelchair accessible transport and 10-seater maxi cab services across metropolitan Perth. Whether travelling to hospital clinics, catching flights at Perth Airport (T1–T4), or heading out on Swan Valley tours, our rear ramp and lift vans ensure safe, dependable travel 24 hours a day.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-amber-400 border-y-4 border-black text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x-2 sm:divide-x-4 divide-y-2 sm:divide-y-0 divide-black">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-6 sm:py-8 px-4 text-center">
              <Icon className="w-6 h-6 mb-2 text-black" aria-hidden="true" />
              <span className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">{value}</span>
              <span className="mt-1 text-[11px] font-black uppercase tracking-wider text-black/70">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Services Grid ── */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              tagline={service.tagline}
              iconName={service.iconName}
              gradient={service.gradient}
              features={service.features}
              serviceHref={service.serviceHref}
              badgeText={service.badgeText}
            />
          ))}
        </div>
      </section>

      {/* ── How It Works & Commitments ── */}
      <HowItWorks />
      <TestimonialsCarousel />
    </div>
  );
}
