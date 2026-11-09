import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  Star,
  Accessibility,
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import AboutStatsCounter from "@/components/about/AboutStatsCounter";
import CoreValuesGrid from "@/components/about/CoreValuesGrid";
import FleetGallery from "@/components/about/FleetGallery";

import Image from "next/image";
import Link from "next/link";
import { SITE_URL, CONFIG_FLAGS } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Perth Wheelchair Taxi Van. Dedicated wheelchair accessible transport, WA accredited drivers, and 10-seater maxi cabs based in Girrawheen, Perth WA.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white overflow-x-hidden selection:bg-amber-400 selection:text-black">

      {/* ═════════════════════════════════════════════════════════════
          1. ABOUT PAGE HEADER — Built with Semantic HTML / SEO Architecture
         ═════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#07090e] text-white min-h-[320px] sm:min-h-[550px] lg:min-h-[580px] flex items-center overflow-hidden border-b-4 border-black pt-20 sm:pt-24 pb-6 sm:pb-16">

        {/* Responsive Background Artwork (WA map, Maxi van outline, pins, circuit tracks) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <picture className="w-full h-full block">
            <source srcSet="/images/about-hero-backdrop-2x.png" media="(min-width: 640px)" />
            <img
              src="/images/about-hero-backdrop.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-right md:object-center opacity-90 sm:opacity-95"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/60 to-transparent w-full md:w-3/5" />
        </div>

        {/* Floating amber wheelchair outline behind 'US' */}
        <div className="absolute left-[180px] sm:left-[240px] md:left-[280px] top-[140px] sm:top-[160px] pointer-events-none select-none opacity-20">
          <Accessibility className="w-44 h-44 sm:w-56 sm:h-56 text-amber-400 stroke-1 -rotate-6" />
        </div>

        {/* Ambient radial glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 bg-amber-500/[0.07] rounded-full blur-3xl pointer-events-none" />

        {/* Real Semantic SEO Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-2 sm:py-8">
          <div className="max-w-2xl">
            {/* Primary SEO Heading <h1> */}
            <SlideUp delay={0.05}>
              <h1 className="text-[clamp(3.75rem,12vw,8rem)] font-black uppercase leading-[0.88] tracking-tighter select-none">
                <span className="block text-white">ABOUT</span>
                {" "}
                <span className="block text-amber-400 mt-1">US</span>
              </h1>
            </SlideUp>

            {/* Keyword-rich Tagline with highlighted spans */}
            <SlideUp delay={0.15}>
              <div className="mt-4 sm:mt-8 max-w-xl">
                <p className="text-xs sm:text-sm md:text-base font-black uppercase tracking-wider text-white leading-relaxed">
                  OVER <span className="text-amber-400">10 YEARS</span> OF RELIABLE, ACCESSIBLE &amp; DEDICATED
                  <br className="hidden sm:inline" />
                  {" "}PASSENGER CARE ACROSS <span className="text-amber-400">WESTERN AUSTRALIA</span>
                </p>
                <p className="mt-3 text-sm text-amber-300 font-semibold normal-case">
                  Our vehicles are fully <Link href="/services/wheelchair-accessible-taxi" className="underline underline-offset-4 hover:text-white">wheelchair accessible</Link> with rear ramp or lift access.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════
          2. "OUR STORY" SECTION (Aligned Photo + Story Timeline + Stats)
         ═════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b-4 border-black w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Visual Column: Adjusted to match text height */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <FadeIn delay={0.1} className="h-full">
                <div className="relative group h-full min-h-[300px] sm:min-h-[380px] w-full">
                  {/* Offset Accent Backdrop Frame */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-2.5 bg-amber-400/90 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-300 shadow-[6px_6px_0px_0px_#000]"
                  />

                  {/* Main Image Container */}
                  <div className="relative h-full w-full bg-zinc-900 border-3 border-black rounded-xl overflow-hidden shadow-xl z-10">
                    <Image
                      src="/images/our-story-maxi.jpg"
                      alt="Perth Wheelchair Taxi Van with passenger assistance ramp in Perth"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Badge */}
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/95 backdrop-blur-md text-white px-3.5 py-2 sm:px-4 sm:py-2.5 border border-amber-400 rounded-lg shadow-[3px_3px_0px_0px_#000] z-20 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-md bg-amber-400 text-black flex items-center justify-center font-black">
                        <Star className="w-4 h-4 fill-black" />
                      </div>
                      <div>
                        <p className="font-black text-base text-amber-400 leading-none">
                          10+ Years
                        </p>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-300 mt-0.5">
                          Serving Greater Perth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Story Timeline Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <SlideUp delay={0.15}>
                  <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] block mb-1">
                    Our Journey &amp; Heritage
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-6">
                    Milestones &amp; History
                  </h2>
                </SlideUp>

                <FadeIn delay={0.2}>
                  <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800">
                    {[
                      {
                        year: "2014",
                        title: "Founded in Perth",
                        description: "Started with dedicated wheelchair-accessible maxi vehicles to provide dignified, on-time airport & hospital transit.",
                      },
                      {
                        year: "2018",
                        title: "Fleet Expansion",
                        description: "Expanded our fleet to include passenger vans for up to 10 passengers with pre-installed child capsules & booster seats.",
                      },
                      {
                        year: "2021",
                        title: "NDIS & Hydraulic Standards",
                        description: "Achieved full NDIS registration, upgrading our fleet with hydraulic ramps and certified restraint systems.",
                      },
                      {
                        year: "Present",
                        title: "24/7 Greater Perth Coverage",
                        description: "Delivering upfront quotes across Perth Airport (T1–T4) and all surrounding suburbs.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline node */}
                        <div className="absolute -left-6 sm:-left-8 top-1 w-4 h-4 rounded-full bg-black border-2 border-amber-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        </div>
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-amber-400 font-black text-xs uppercase tracking-wider">
                            {item.year}
                          </span>
                          <h3 className="text-white font-bold text-sm sm:text-base">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Mini Stats Row With Animated Count-Up */}
              <FadeIn delay={0.25}>
                <AboutStatsCounter />
              </FadeIn>
            </div>

          </div>
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════
          3. ACCESSIBLE VEHICLE SHOWCASE
         ═════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-black border-b-4 border-black w-full">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <SlideUp>
              <span className="text-[11px] font-black text-amber-400 uppercase tracking-[0.25em] mb-2 block">
                Accessibility In Focus
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
                Accessible Vehicle Showcase
              </h2>
              <p className="mt-3 text-zinc-400 text-sm max-w-xl leading-relaxed">
                Take a look inside our purpose-built Toyota HiAce wheelchair-accessible maxi taxis — engineered with heavy-duty motorized hydraulic lifts, spacious high-roof cabins, and certified restraint systems.
              </p>
            </SlideUp>
          </div>

          <FleetGallery />
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════
          4. "OUR CORE VALUES" CARDS
         ═════════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-black border-b-4 border-black w-full">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <SlideUp>
              <span className="text-[11px] font-black text-amber-400 uppercase tracking-[0.25em] mb-2 block">
                What Guides Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
                Our Core Values
              </h2>
            </SlideUp>
          </div>

          {/* Core Values 4-Card Grid */}
          <CoreValuesGrid />
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════
          5. "FULLY LICENSED & CERTIFIED" BANNER (3 Points + NDIS Logo)
         ═════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 text-black border-4 border-black p-6 sm:p-8 lg:p-10 rounded-2xl shadow-[6px_6px_0px_0px_#000] relative overflow-hidden">
            {/* Background watermark */}
            <ShieldCheck className="absolute -right-8 -bottom-8 w-64 h-64 text-black/[0.08] pointer-events-none select-none" />

            <div className="relative z-10 flex flex-col gap-5 sm:gap-6">

              {/* Header: Title & NDIS Logo in front of pills */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="inline-block bg-black text-amber-400 text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1.5">
                    Accreditation &amp; Trust
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-black">
                    Fully Licensed &amp; Certified
                  </h2>
                </div>

                {/* Clean NDIS Logo placed in front of pills */}
                <div className="shrink-0">
                  <Image
                    src="/images/ndis-badge.png"
                    alt="Official NDIS Registered Provider badge"
                    width={96}
                    height={96}
                    className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-xl shadow-md border-2 border-black"
                  />
                </div>
              </div>

              {/* 3 Points with concise details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-black/90 text-white p-3.5 rounded-xl border-2 border-black flex items-start gap-2.5 shadow-sm">
                  <div className="w-6 h-6 rounded-md bg-amber-400 text-black flex items-center justify-center shrink-0 font-bold mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wide text-amber-400">
                      WA DoT Licensed
                    </h3>
                    <p className="text-[10px] text-zinc-300 font-medium mt-0.5 leading-snug">
                      Authorized On-Demand Passenger Transport in WA
                    </p>
                  </div>
                </div>

                <div className="bg-black/90 text-white p-3.5 rounded-xl border-2 border-black flex items-start gap-2.5 shadow-sm">
                  <div className="w-6 h-6 rounded-md bg-amber-400 text-black flex items-center justify-center shrink-0 font-bold mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wide text-amber-400">
                      WA PTSS (ex-TUSS)
                    </h3>
                    <p className="text-[10px] text-zinc-300 font-medium mt-0.5 leading-snug">
                      {CONFIG_FLAGS.ptssSubsidyAccepted
                        ? "Approved PTSS smartcard operator"
                        : "Smartcards supported [TODO: owner to confirm licence/registration]"}
                    </p>
                  </div>
                </div>

                <div className="bg-black/90 text-white p-3.5 rounded-xl border-2 border-black flex items-start gap-2.5 shadow-sm">
                  <div className="w-6 h-6 rounded-md bg-amber-400 text-black flex items-center justify-center shrink-0 font-bold mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wide text-amber-400">
                      Police Cleared
                    </h3>
                    <p className="text-[10px] text-zinc-300 font-medium mt-0.5 leading-snug">
                      Annual mechanical checks &amp; WWC verified drivers
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
