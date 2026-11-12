import type { Metadata } from "next";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { SITE_URL } from "@/config/site";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: `${SITE_URL}/terms` },
  ],
};

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Perth Wheelchair Taxi Van bookings, cancellations, fixed fare guarantees, passenger safety, and commercial transport services.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      {/* Header */}
      <section className="bg-slate-900 text-white pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Terms & Conditions", href: "/terms" },
              ]}
              className="mb-4"
            />
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Service Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300">
              Please review the terms of service governing bookings with Perth Wheelchair Taxi Van.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">1. Bookings &amp; Confirmations</h2>
              <p>
                All bookings made via our website, WhatsApp, phone, or email are subject to driver availability and vehicle scheduling confirmation. We recommend booking airport transfers and scheduled medical appointments at least 12 to 24 hours in advance to guarantee your preferred time slot.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">2. Upfront Pricing</h2>
              <p>
                Quoted prices are honored as stated, with upfront rates agreed before travel. Standard airport parking fees or bridge/toll charges, if incurred, are disclosed upfront. Department of Transport regulated meter fares are available upon passenger request prior to trip departure.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">3. Airport Pickups &amp; Flight Delays</h2>
              <p>
                For Perth Airport (T1, T2, T3, T4) pickups, our dispatch plans around your flight schedule. Passengers are met at the designated terminal commercial pickup area with ramps or lift prepped.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">4. Wheelchair &amp; Restraint Compliance</h2>
              <p>
                Safety is paramount. All wheelchairs, electric powerchairs, and mobility scooters are secured using certified 4-point chassis tie-downs and Australian standard passenger lap/sash belts. Passengers must follow the driver&apos;s safety instructions during ramp loading and restraint fastening.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">5. Cancellations</h2>
              <p>
                We understand schedules change. Please notify us at least 2 hours prior to scheduled pickup if you need to cancel or reschedule your ride. Contact us directly at +61 493 252 766 or perthwheelchairtaxivan@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
