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
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy` },
  ],
};

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Perth Wheelchair Taxi Van. How we protect passenger information, booking details, and payment data in accordance with Australian law.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
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
                { label: "Privacy Policy", href: "/privacy" },
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
              <span>Privacy &amp; Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300">
              Last updated: October 2026. Perth Wheelchair Taxi Van is committed to safeguarding your personal information.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
              <p>
                When you book a journey with Perth Wheelchair Taxi Van through our website, WhatsApp, phone, or email, we collect information necessary to fulfill your transport request. This includes your name, phone number, email address, pickup and drop-off locations, date and time, flight details (for airport pickups), and specific accessibility needs (such as manual wheelchair, electric powerchair, or child restraint requirements).
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">2. How We Use Your Information</h2>
              <p>
                Your personal details are used exclusively to coordinate your transport, allocate the appropriate vehicle, monitor arrival times, issue booking confirmations and tax receipts, and facilitate NDIS or TUSS claims where applicable. We never sell, rent, or trade your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">3. Payment &amp; Security</h2>
              <p>
                In-vehicle payments are processed through secure, bank-grade EFTPOS terminals compliant with Australian payment standards. We do not store full credit card numbers on our servers. Invoices sent for NDIS plan management contain only necessary service verification data.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">4. Data Retention &amp; Contact</h2>
              <p>
                We retain booking records only as required by Western Australia transport regulations and taxation laws. If you have any questions regarding your personal information, or wish to update your details, contact our privacy officer at perthwheelchairtaxivan@gmail.com or call +61 493 252 766.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
