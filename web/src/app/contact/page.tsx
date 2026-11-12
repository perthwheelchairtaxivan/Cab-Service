import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import GmailIcon from "@/components/icons/GmailIcon";
import ContactForm from "@/components/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SITE_URL, BUSINESS_EMAIL, PHONE_NUMBER } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Perth Wheelchair Taxi | Call or WhatsApp 24/7",
  description:
    "Contact Perth Wheelchair Taxi Van 24/7. Call or WhatsApp +61 493 252 766 for instant quotes on accessible vans, maxi taxis, and NDIS or airport bookings.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

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
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Perth Wheelchair Taxi Van",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "TaxiService",
    name: "Perth Wheelchair Taxi Van",
    telephone: PHONE_NUMBER,
    email: BUSINESS_EMAIL,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Girrawheen",
      addressRegion: "WA",
      postalCode: "6064",
      addressCountry: "AU",
    },
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white overflow-x-hidden selection:bg-amber-400 selection:text-black">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPageSchema} />

      {/* ─────────────────────────────────────────────────────────────
          1. CLEAN HEADER HERO
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 sm:pt-36 pb-6 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        {/* Amber glow spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-amber-400/15 blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
            align="center"
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-4 text-white">
            Contact Perth <span className="text-amber-400">Wheelchair Taxi Van</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-semibold leading-relaxed max-w-2xl mx-auto">
            Need an immediate wheelchair taxi or maxi cab in Perth? Contact Perth Wheelchair Taxi Van directly on +61 493 252 766 or send an instant WhatsApp message. We provide 24/7 door-to-door transport across Greater Perth with zero automated call centre wait times.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. DIRECT CHANNELS SIDEBAR & QUICK ENQUIRY FORM
         ───────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-20">

        {/* Mobile Quick Action Buttons Bar — Always visible at the top on mobile so direct contact is never hidden */}
        <div className="md:hidden grid grid-cols-2 gap-2.5 mb-6">
          <a
            href="https://wa.me/61493252766?text=Hi,%20I%20would%20like%20to%20enquire%20about%20a%20Maxi%20Cab%20in%20Perth."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-3 rounded-xl font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#000] active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
          <a
            href="tel:+61493252766"
            className="flex items-center justify-center gap-2 bg-amber-400 text-black py-3 px-3 rounded-xl font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#000] active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
            <span>Call Directly</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* SIDEBAR: Direct Contact Channels (5 cols on md/lg, Sticky on desktop) */}
          <div className="md:col-span-5 md:sticky md:top-24 space-y-3.5 sm:space-y-4 order-2 md:order-1">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-400 block mb-1">
                Direct Dispatch 24/7
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white mb-2">
                Direct Contact Channels
              </h2>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                Connect instantly with owner-drivers. Zero call center delays, guaranteed fixed fares.
              </p>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/61493252766?text=Hi,%20I%20would%20like%20to%20enquire%20about%20a%20Maxi%20Cab%20in%20Perth."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-zinc-900 p-3.5 sm:p-4 border-2 sm:border-3 border-emerald-500 shadow-[3px_3px_0px_0px_#10b981] sm:shadow-[4px_4px_0px_0px_#10b981] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#10b981] transition-all group rounded-xl sm:rounded-2xl"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366] text-white border-2 border-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" colored={false} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-xs sm:text-sm uppercase tracking-wider text-emerald-400">
                      WhatsApp
                    </span>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                      Fastest
                    </span>
                  </div>
                  <p className="text-white font-black text-base sm:text-lg tracking-tight mt-0.5">
                    +61 493 252 766
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center px-3 py-1 bg-emerald-500 text-black text-xs font-black uppercase tracking-wider rounded-full border border-black shadow-[2px_2px_0px_0px_#000] shrink-0">
                Chat &rarr;
              </span>
            </a>

            {/* Phone Button */}
            <a
              href="tel:+61493252766"
              className="flex items-center justify-between bg-zinc-900 p-3.5 sm:p-4 border-2 sm:border-3 border-amber-400 shadow-[3px_3px_0px_0px_#facc15] sm:shadow-[4px_4px_0px_0px_#facc15] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#facc15] transition-all group rounded-xl sm:rounded-2xl"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-amber-400 text-black border-2 border-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-xs sm:text-sm uppercase tracking-wider text-amber-400">
                      Call Directly
                    </span>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 bg-amber-400/20 text-amber-300 rounded-full border border-amber-400/30">
                      24/7 Live
                    </span>
                  </div>
                  <p className="text-white font-black text-base sm:text-lg tracking-tight mt-0.5">
                    +61 493 252 766
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center px-3 py-1 bg-amber-400 text-black text-xs font-black uppercase tracking-wider rounded-full border border-black shadow-[2px_2px_0px_0px_#000] shrink-0">
                Call &rarr;
              </span>
            </a>

            {/* Email Button */}
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="flex items-center justify-between bg-zinc-900 p-3.5 sm:p-4 border-2 sm:border-3 border-white shadow-[3px_3px_0px_0px_#ffffff] sm:shadow-[4px_4px_0px_0px_#ffffff] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all group rounded-xl sm:rounded-2xl"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white border-2 border-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform rounded-xl shadow-[2px_2px_0px_0px_#000]">
                  <GmailIcon className="w-5 h-5 sm:w-6 sm:h-6" colored={true} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-xs sm:text-sm uppercase tracking-wider text-white">
                      Email Us
                    </span>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 bg-white/20 text-zinc-300 rounded-full border border-white/30">
                      Email
                    </span>
                  </div>
                  <p className="text-white font-bold text-xs sm:text-sm tracking-tight truncate mt-0.5">
                    {BUSINESS_EMAIL}
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center px-3 py-1 bg-white text-black text-xs font-black uppercase tracking-wider rounded-full border border-black shadow-[2px_2px_0px_0px_#000] shrink-0">
                Email &rarr;
              </span>
            </a>

            {/* Operational Info Card / NAP details */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-4 rounded-xl text-xs space-y-2.5 mt-4 text-zinc-400 shadow-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Perth Wheelchair Taxi Van</span>
                  <span>Girrawheen WA 6064, Australia (Serving Greater Perth &amp; Airport)</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-white">Operating Hours: </span>
                  <span className="text-emerald-400 font-bold">24 Hours / 7 Days</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold text-white">Direct Email: </span>
                  <span className="text-zinc-200">{BUSINESS_EMAIL}</span>
                </div>
              </div>
            </div>

          </div>

          {/* MAIN FORM: Quick Enquiry Form (7 cols on md/lg, above channels on mobile) */}
          <div className="md:col-span-7 order-1 md:order-2">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
