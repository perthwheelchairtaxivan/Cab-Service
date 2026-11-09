"use client";

import Link from "next/link";
import {
  Phone,
  Clock,
  ShieldCheck,
  ChevronUp,
  MapPin,
  HeartHandshake,
  Accessibility,
  ArrowUpRight,
  HelpCircle,
  DollarSign,
  BookOpen,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import GmailIcon from "@/components/icons/GmailIcon";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#000000] text-white border-t border-zinc-900 z-10" aria-label="Site Footer">
      {/* ─────────────────────────────────────────────────────────────
          1. REASSURANCE STRIP (Clean & Factual)
         ───────────────────────────────────────────────────────────── */}
      <div className="border-b border-zinc-900/90 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-zinc-300">
              <Accessibility className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Rear Ramp &amp; Lift
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                NDIS &amp; WA PTSS
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-300">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                24/7 Advance Bookings
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                Girrawheen &amp; Perth Metro
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN FOOTER BODY (Single Responsive DOM Tree)
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-8 items-start">
          {/* Column 1: Navigation & Guides */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400" aria-hidden="true" /> Navigation
            </h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/fares" className="text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  Fares &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  Service Areas (20km)
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  Transport Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Specialized Services */}
          <div className="lg:col-span-4">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-sky-400" aria-hidden="true" /> Services
            </h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link href="/services/wheelchair-accessible-taxi" className="text-zinc-400 hover:text-sky-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  Wheelchair Accessible Taxis
                </Link>
              </li>
              <li>
                <Link href="/services/medical-ndis-transport" className="text-zinc-400 hover:text-sky-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  NDIS &amp; Medical Appointments
                </Link>
              </li>
              <li>
                <Link href="/services/group-maxi-cab" className="text-zinc-400 hover:text-sky-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  10-Seater Group Maxi Cab
                </Link>
              </li>
              <li>
                <Link href="/services/airport-transfers" className="text-zinc-400 hover:text-sky-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  Perth Airport Transfers (T1–T4)
                </Link>
              </li>
              <li>
                <Link href="/services/baby-seat-taxi" className="text-zinc-400 hover:text-sky-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  Taxi with Fitted Baby Seats
                </Link>
              </li>
              <li>
                <Link href="/services/tours-and-events-transport" className="text-zinc-400 hover:text-sky-400 transition-colors uppercase tracking-wider text-xs block py-0.5">
                  Swan Valley &amp; Event Charters
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Base Information */}
          <div className="lg:col-span-5">
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400" aria-hidden="true" /> Direct Contact
            </h3>
            <div className="space-y-3.5 text-sm">
              <a href={SITE_CONFIG.phoneTel} className="flex items-center gap-3 group min-h-[44px]">
                <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-amber-400" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Direct Phone (24/7)</span>
                  <span className="text-white font-black text-sm group-hover:text-amber-400 transition-colors">
                    {SITE_CONFIG.phone}
                  </span>
                </div>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl("Hi, I would like to enquire about a wheelchair taxi / maxi cab in Perth.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group min-h-[44px]"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">WhatsApp Dispatch</span>
                  <span className="text-white font-black text-sm group-hover:text-emerald-400 transition-colors">
                    {SITE_CONFIG.whatsappDisplay}
                  </span>
                </div>
              </a>

              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 group min-h-[44px]">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/40 flex items-center justify-center shrink-0">
                  <GmailIcon className="w-4 h-4" colored={true} aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Email Bookings</span>
                  <span className="text-white font-medium text-xs sm:text-sm group-hover:text-amber-400 transition-colors break-all">
                    {SITE_CONFIG.email}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3 pt-1">
                <div className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-sky-400" aria-hidden="true" />
                </div>
                <div className="flex flex-col text-xs text-zinc-300">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Service Coverage</span>
                  <span className="font-semibold text-white">Based in Girrawheen WA 6064</span>
                  <span className="text-zinc-400 text-[11px] leading-relaxed mt-0.5">
                    Covering Perth Metro, Joondalup, Fremantle, Scarborough, Nedlands, Swan Valley &amp; Airport (T1–T4).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. BOTTOM STRIP: Legal, Subsidies & Back To Top
           ───────────────────────────────────────────────────────────── */}
        <div className="border-t border-zinc-900 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Perth Wheelchair Taxi Van. All rights reserved.</p>
            <span className="hidden sm:inline text-zinc-700" aria-hidden="true">|</span>
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-700" aria-hidden="true">|</span>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-zinc-700" aria-hidden="true">|</span>
            <Link href="/fares" className="hover:text-amber-400 transition-colors">
              Fares &amp; PTSS (ex-TUSS)
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer text-xs font-semibold shrink-0"
          >
            <span>Back to top</span>
            <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
