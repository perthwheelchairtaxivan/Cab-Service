import type { Metadata } from "next";
import EnquiryForm from "@/components/booking/EnquiryForm";
import BackButton from "@/components/ui/BackButton";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Book a Wheelchair Taxi in Perth | Online Quote Request",
  description:
    "Book a wheelchair accessible taxi or 10-seater maxi cab across Perth. Transparent pricing, airport transfers, NDIS invoicing, and instant WhatsApp booking.",
  alternates: {
    canonical: `${SITE_URL}/enquire`,
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
      name: "Book a Ride",
      item: `${SITE_URL}/enquire`,
    },
  ],
};

export default function EnquirePage() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen text-white overflow-x-hidden selection:bg-amber-400 selection:text-black">
      <JsonLd data={breadcrumbSchema} />

      {/* ─────────────────────────────────────────────────────────────
          1. HEADER HERO (With Back Navigation)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 sm:pt-32 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Subtle glow spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-amber-400/15 blur-[130px] pointer-events-none rounded-full" />

        {/* Back Navigation Button */}
        <div className="relative z-20 mb-4 sm:mb-6">
          <BackButton />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Book a Ride", href: "/enquire" },
            ]}
            align="center"
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-3 text-white">
            Book a Wheelchair Taxi or Maxi Cab
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 font-semibold leading-relaxed max-w-xl mx-auto">
            Direct owner dispatch with upfront fixed fares or metered rates. Instant confirmation for wheelchair transfers, NDIS travel, and Perth Airport trips 24/7.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN BOOKING FORM (CENTERED FULL ENGINE)
         ───────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-20">
        <EnquiryForm />
      </section>

    </div>
  );
}
