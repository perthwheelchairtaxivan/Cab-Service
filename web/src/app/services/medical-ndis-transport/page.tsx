import { HeartPulse, CheckCircle2, ShieldCheck, FileText, Phone, ArrowRight, Hospital } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { Metadata } from "next";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import RelatedServices from "@/components/services/RelatedServices";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_CONFIG, CONFIG_FLAGS } from "@/config/site";

export const metadata: Metadata = {
  title: "NDIS Wheelchair Taxi Perth | PTSS & Medical Transport",
  description:
    "NDIS and medical appointment transport across Perth. WA PTSS smartcard information (formerly TUSS), NDIS invoice options, hospital transfers with rear ramp vans.",
  alternates: {
    canonical: `${SITE_URL}/services/medical-ndis-transport`,
  },
  openGraph: {
    title: "NDIS Wheelchair Taxi Perth | PTSS & Medical Transport",
    description:
      "Specialised medical appointment and NDIS transport in Perth. Rear ramp wheelchair vans, WA PTSS subsidies (formerly TUSS), and itemised tax invoices.",
    url: `${SITE_URL}/services/medical-ndis-transport`,
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_AU",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Perth Medical and NDIS Wheelchair Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Wheelchair Taxi Perth | PTSS & Medical Transport",
    description:
      "NDIS and medical appointment transport across Perth. WA PTSS subsidies (formerly TUSS), NDIS invoices, hospital transfers with rear ramp vans.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/medical-ndis-transport#service`,
      name: "NDIS & Medical Appointment Wheelchair Transport Perth",
      description:
        "Specialised hospital transfers, dialysis, outpatient clinics, and NDIS transport across Perth. WA PTSS (formerly TUSS) subsidy details and itemised invoicing.",
      provider: {
        "@type": "TaxiService",
        "@id": `${SITE_URL}/#business`,
      },
      areaServed: {
        "@type": "City",
        name: "Perth",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        {
          "@type": "ListItem",
          position: 3,
          name: "NDIS & Medical Transport",
          item: `${SITE_URL}/services/medical-ndis-transport`,
        },
      ],
    },
  ],
};

export default function MedicalNDISPage() {
  const hospitals = [
    { name: "Sir Charles Gairdner Hospital (SCGH)", loc: "Nedlands" },
    { name: "Royal Perth Hospital (RPH)", loc: "Perth CBD" },
    { name: "Fiona Stanley Hospital (FSH)", loc: "Murdoch" },
    { name: "Perth Children's Hospital (PCH)", loc: "Nedlands" },
    { name: "Hollywood Private Hospital", loc: "Nedlands" },
    { name: "Joondalup Health Campus", loc: "Joondalup" },
    { name: "St John of God Subiaco Hospital", loc: "Subiaco" },
    { name: "St John of God Midland Hospital", loc: "Midland" },
  ];

  return (
    <div className="flex flex-col w-full bg-black text-white min-h-screen">
      <JsonLd data={serviceSchema} />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            <span className="text-xs font-black text-rose-400 uppercase tracking-[0.2em] mb-3 block">
              Compassionate Clinical Transport
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] mb-4 text-white">
              NDIS &amp; Medical <span className="text-amber-400">Transport in Perth</span>
            </h1>
            {/* Answer-first 50-word opening paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mx-auto font-normal">
              Perth Wheelchair Taxi Van provides dedicated medical transport and NDIS travel across all Perth hospitals and therapy clinics. We support Western Australia PTSS smartcards (formerly TUSS), supply compliant itemised NDIS invoices, and ensure punctual curbside pickup with rear ramps and certified tie-downs. {CONFIG_FLAGS.ptssSubsidyAccepted && CONFIG_FLAGS.ndisBillingAccepted ? "" : "[TODO: owner to confirm licence/registration for PTSS card & NDIS billing]."}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/enquire"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-transform hover:scale-105"
              >
                <span>Book Medical Transfer</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-full border border-zinc-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* ── Detailed Medical & NDIS Features ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Punctual Hospital &amp; Therapy Appointments
            </h2>
            <p>
              Medical appointments require absolute punctuality. Whether heading to daily renal dialysis, oncology radiotherapy, or specialist surgical follow-ups, being late causes significant distress. Our service is scheduled directly with dedicated van drivers who arrive promptly, assist you safely down your driveway, and escort you to the clinic entrance.
            </p>
            <p>
              We wait for you or schedule an exact return pickup time, so you never spend hours waiting in public hospital discharge lounges after an exhausting treatment. Carers, family members, and support workers travel alongside free of charge in our spacious 10-seater cabin.
            </p>

            <h3 className="text-lg font-black text-white uppercase tracking-tight pt-2">
              NDIS Core Support (Category 02) Invoicing {CONFIG_FLAGS.ndisBillingAccepted ? "" : "[TODO: owner to confirm licence/registration]"}
            </h3>
            <p>
              If your NDIS plan includes funding for <strong>Core Supports — Transport (Category 02)</strong>, you can use our service. For self-managed participants, we issue digital tax invoices with registered ABN and trip details for claiming on the myplace portal. For plan-managed participants, we email invoices directly to your plan manager for automated payment. {CONFIG_FLAGS.ndisBillingAccepted ? "" : "[TODO: owner to confirm NDIS provider registration]."}
            </p>

            <h3 className="text-lg font-black text-white uppercase tracking-tight pt-2">
              WA PTSS Smartcard Subsidy (Formerly TUSS) {CONFIG_FLAGS.ptssSubsidyAccepted ? "" : "[TODO: owner to confirm licence/registration]"}
            </h3>
            <p>
              Effective 1 October 2025, paper TUSS vouchers have been replaced by the WA Department of Transport&apos;s electronic Passenger Transport Subsidy Scheme (PTSS) smartcard. The standard subsidy covers 50% up to $25 per trip, and the wheelchair subsidy covers 75% up to $35 per trip in an authorized wheelchair-accessible taxi. {CONFIG_FLAGS.ptssSubsidyAccepted ? "Your driver processes your PTSS card through the vehicle terminal, leaving only the remaining co-payment to settle." : "[TODO: owner to confirm licence/registration for PTSS card processing terminal]."}
            </p>
          </div>

          <div className="lg:col-span-5 bg-zinc-950 border-2 border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-black text-white uppercase tracking-wider mb-4 pb-3 border-b border-zinc-800 flex items-center gap-2">
              <Hospital className="w-5 h-5 text-rose-400" aria-hidden="true" />
              <span>Perth Hospitals Frequently Served</span>
            </h3>

            <div className="space-y-3">
              {hospitals.map((h, idx) => (
                <div key={idx} className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-white font-semibold">{h.name}</span>
                  <span className="text-[10px] text-amber-400 font-bold uppercase">{h.loc}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider py-3 rounded-full transition-colors"
              >
                <span>Schedule Medical Trip</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="medical-ndis-transport" />
    </div>
  );
}
