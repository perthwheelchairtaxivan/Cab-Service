"use client";

import React from "react";
import { ShieldCheck, HeartHandshake, Clock, FileText, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

const standards = [
  {
    title: "Dignified Accessibility",
    icon: HeartHandshake,
    category: "Wheelchair Priority",
    description:
      "Every passenger boards via a clean rear ramp or hydraulic lift. We take the time required to securely fasten all 4-point floor tie-downs and fit safety belts without rushing.",
  },
  {
    title: "NDIS & PTSS Transparent Billing",
    icon: FileText,
    category: "Subsidies & Invoicing",
    description:
      "We support WA PTSS smartcards (effective 1 Oct 2025 replacing paper TUSS vouchers) and supply itemised tax invoices for NDIS participants [TODO: owner to confirm licence/registration].",
  },
  {
    title: "Punctual Advance Bookings",
    icon: Clock,
    category: "Reliability Guarantee",
    description:
      "Medical appointments and airport flights cannot wait. When you reserve in advance, your vehicle is scheduled directly with your driver so you are never left wondering.",
  },
  {
    title: "Safety & Driver Care",
    icon: ShieldCheck,
    category: "Accredited Service",
    description:
      "Our vehicles are maintained to Western Australian commercial passenger standards, equipped with dual air-conditioning, clean interior cabins, and certified child safety restraints.",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" aria-label="Service Standards and Passenger Commitment">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 sm:mb-3 block">
          Our Commitment to You
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
          Passenger Care &amp; Service Standards
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
          We believe in honest, dependable transport across Perth. Here is what you can always expect when travelling with us.
        </p>
      </div>

      {/* Single Responsive DOM Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {standards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-zinc-900 border-2 border-zinc-800 p-6 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    {item.category}
                  </span>
                  <Icon className="w-5 h-5 text-amber-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verified Google Review Invitation Box */}
      <div className="mt-8 bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400" aria-hidden="true" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
              Recent Passenger on our Perth Service?
            </h4>
            <p className="text-xs text-zinc-400 mt-1 max-w-xl">
              We never fabricate reviews or ratings. Your real feedback helps other wheelchair users and families find reliable transport in Perth.
            </p>
          </div>
        </div>

        <a
          href={SITE_CONFIG.whatsappUrl("Hi, I completed a trip with you and would like to share my feedback.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider transition-colors shrink-0"
        >
          <MessageSquare className="w-4 h-4" aria-hidden="true" />
          <span>Share Trip Feedback</span>
        </a>
      </div>
    </section>
  );
}
