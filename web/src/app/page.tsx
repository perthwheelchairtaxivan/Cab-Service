import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  Clock,
  Plane,
  Car,
  HeartPulse,
  Navigation,
  Phone,
  Star,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Baby,
  MapPin,
  FileText,
  Accessibility,
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import FAQAccordion from "@/components/services/FAQAccordion";
import { defaultFAQs } from "@/config/faqs";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import VehicleShowcase from "@/components/home/VehicleShowcase";
import CoreServicesCarousel from "@/components/home/CoreServicesCarousel";
import HowItWorks from "@/components/home/HowItWorks";
import ServiceAreaSection from "@/components/home/ServiceAreaSection";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG, CONFIG_FLAGS } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Wheelchair Taxi & Maxi Taxi Perth | Accessible Vans 24/7",
  },
  description:
    "Perth wheelchair accessible taxi vans and 10-seater maxi cabs with rear ramp or lift access. WA PTSS (formerly TUSS) & NDIS transport options. Call or WhatsApp +61 493 252 766.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Wheelchair Taxi & Maxi Taxi Perth | Accessible Vans 24/7",
    description:
      "Perth wheelchair accessible taxi vans and 10-seater maxi cabs with rear ramp or lift access. WA PTSS (formerly TUSS) & NDIS transport options. Call or WhatsApp +61 493 252 766.",
    url: SITE_URL,
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Wheelchair Taxi Van and Maxi Cab Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheelchair Taxi & Maxi Taxi Perth | Accessible Vans 24/7",
    description:
      "Perth wheelchair accessible taxi vans and 10-seater maxi cabs with rear ramp or lift access. WA PTSS (formerly TUSS) & NDIS transport options. Call or WhatsApp +61 493 252 766.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Wheelchair Taxi & Maxi Taxi Perth | Accessible Vans 24/7",
      description:
        "Perth wheelchair accessible taxi vans and 10-seater maxi cabs with rear ramp or lift access. WA PTSS (formerly TUSS) & NDIS transport options 24/7.",
      inLanguage: "en-AU",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#business`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: defaultFAQs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <JsonLd data={homePageSchema} />

      {/* ── Cinematic Hero Section ── */}
      <section className="relative w-full h-[62svh] min-h-[430px] max-h-[500px] sm:h-[100svh] sm:min-h-[680px] sm:max-h-[1080px] flex flex-col justify-between pt-[calc(var(--header-height,4rem)+0.5rem)] pb-3 sm:pt-28 sm:pb-8 lg:pb-12 overflow-hidden">
        {/* Background Image with optimized mobile sizes & webp/avif */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/perth-wheelchair-taxi-hero.jpg"
            alt="Wheelchair accessible maxi taxi van with rear hydraulic lift in Perth WA"
            fill
            priority
            quality={85}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 1920px"
            className="object-cover object-[70%_center] lg:object-center brightness-[0.95] sm:brightness-105"
          />
          {/* Subtle top header gradient so navbar text stays crisp */}
          <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-black/75 sm:from-black/55 to-transparent pointer-events-none" />
          {/* Darker mobile gradient overlay so text is 100% readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/65 sm:bg-none pointer-events-none" />
          {/* Desktop left gradient for text legibility */}
          <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-black/50 via-black/15 to-transparent pointer-events-none" />
        </div>

        {/* Flight Path SVG Arc in Sky */}
        <div className="absolute top-12 sm:top-20 right-8 sm:right-20 lg:right-32 pointer-events-none select-none z-10 hidden sm:block">
          <svg className="w-48 sm:w-56 h-24 sm:h-28 overflow-visible" viewBox="0 0 220 100" fill="none" aria-hidden="true">
            <path
              d="M10 90 C 80 75, 140 40, 205 12"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>
          <div className="absolute top-0 right-0 rotate-45">
            <Plane className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white fill-white/30 drop-shadow" aria-hidden="true" />
          </div>
        </div>

        {/* Top/Middle: Headline with Primary Keyword & Proper Accessible Spacing */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-1 sm:pt-4 md:pt-8">
          <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
            <h1 className="hero-title-enter text-[clamp(2.2rem,8.5vw,3rem)] sm:text-5xl md:text-6xl lg:text-[clamp(3.2rem,5vw,4.8rem)] font-black tracking-tight leading-[1.02] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              <span className="block text-white">Wheelchair Taxi</span>
              <span className="text-amber-400 drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)]">
                &amp; Maxi Taxi Van in Perth
              </span>
            </h1>

            {/* Accent bar & Tagline */}
            <div className="mt-3 sm:mt-5 hero-tagline-enter">
              <div className="w-10 sm:w-14 h-1 rounded-full bg-amber-400 mb-3" aria-hidden="true" />
              <p className="text-[clamp(0.95rem,2.8vw,1rem)] sm:text-[1.15rem] lg:text-[clamp(1.2rem,1.7vw,1.5rem)] font-semibold sm:font-bold text-white/95 leading-snug text-balance max-w-[24rem] sm:max-w-[40ch] drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                Accessible wheelchair vans &amp; 10-seater maxi cabs across Perth.{" "}
                <span className="text-amber-400 [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]">
                  {CONFIG_FLAGS.ptssSubsidyAccepted ? "PTSS & NDIS accepted 24/7." : "Accessible Transport 24/7."}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn delay={0.15} className="w-full">
            <div className="flex flex-row sm:flex-wrap items-center gap-2 sm:gap-5 pb-1 sm:pb-2 w-full max-w-sm sm:max-w-none">
              {/* Book Now Button */}
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-base px-4 sm:px-8 py-2 sm:py-4 rounded-full shadow-[0_4px_16px_rgba(251,191,36,0.35)] sm:shadow-[0_8px_24px_rgba(251,191,36,0.45)] hover:shadow-[0_12px_28px_rgba(251,191,36,0.6)] hover:scale-105 active:scale-95 transition-all text-center whitespace-nowrap shrink-0"
              >
                <span>Book / Request Quote</span>
                <div className="w-4 h-4 sm:w-7 sm:h-7 rounded-full bg-black flex items-center justify-center text-white shrink-0" aria-hidden="true">
                  <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                </div>
              </Link>

              {/* 24/7 Support Call Pill */}
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 group backdrop-blur-md bg-black/60 sm:bg-black/50 border border-white/20 px-2.5 sm:px-5 py-1.5 sm:py-3.5 rounded-full hover:bg-black/70 transition-colors shadow-md sm:shadow-lg whitespace-nowrap shrink-0"
              >
                <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shrink-0" aria-hidden="true">
                  <Clock className="w-2.5 h-2.5 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex flex-col text-left leading-none sm:leading-normal">
                  <span className="text-[9px] sm:text-[11px] text-white/70 font-semibold sm:font-medium">Direct Driver (24/7)</span>
                  <span className="text-[10px] sm:text-sm md:text-base font-bold text-white tracking-wide group-hover:text-amber-400 transition-colors mt-0.5 sm:mt-0">
                    {SITE_CONFIG.phone}
                  </span>
                </div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Main Content Wrapper ── */}
      <div className="bg-black text-white w-full">
        {/* Answer-First Opening Paragraph (40-60 words, direct answer for users & AI search) */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center border-b border-zinc-900">
          <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 sm:mb-4 block">
            Girrawheen Base &amp; Greater Perth Metro
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Perth Wheelchair Accessible Taxi &amp; 10-Seater Maxi Cab Service
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-6">
            Looking for a dependable wheelchair taxi or 10-seater maxi cab in Perth? Based in Girrawheen WA, Perth Wheelchair Taxi Van delivers 24/7 commercial passenger transport fitted with rear ramps or hydraulic lifts and 4-point floor tie-downs. We support Western Australia PTSS smartcards (formerly TUSS), provide NDIS tax invoices, and offer upfront fixed quotes for Perth Airport transfers, medical appointments, and group travel. {CONFIG_FLAGS.ptssSubsidyAccepted && CONFIG_FLAGS.ndisBillingAccepted ? "" : "[TODO: owner to confirm licence/registration for PTSS card & NDIS billing]."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold">
            <Link
              href="/services/wheelchair-accessible-taxi"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              <span>Wheelchair Accessible Taxis</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
            <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
            <Link
              href="/services/medical-ndis-transport"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              <span>NDIS &amp; Hospital Transport</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
            <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
            <Link
              href="/fares"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              <span>Fares &amp; PTSS Guide</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
            <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">•</span>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-1.5 text-white hover:text-amber-400 underline underline-offset-4"
            >
              <span>Instant WhatsApp Quote</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* 3-Step Process with accessible visual indicators */}
        <HowItWorks />

        {/* 6 Core Services Grid (Single DOM Render) */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t-4 border-black">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 sm:mb-4 block">
              Specialised Fleet &amp; Passenger Transport
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Our Core Transport Services
            </h2>
          </div>

          <CoreServicesCarousel />
        </section>

        {/* Vehicle Showcase with Verified Ramp & Safety Specs */}
        <VehicleShowcase />

        {/* Service Area Section with Server-Rendered Suburbs List */}
        <ServiceAreaSection />

        {/* Service Commitments & Verified Standards */}
        <section className="w-full border-t-4 border-black">
          <TestimonialsCarousel />
        </section>

        {/* FAQ Accordion Section */}
        <FAQAccordion items={defaultFAQs} title="Frequently Asked Questions" badge="Perth Transport FAQs" />
      </div>
    </div>
  );
}
