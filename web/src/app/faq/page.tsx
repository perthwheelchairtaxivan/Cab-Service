  import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import GmailIcon from "@/components/icons/GmailIcon";
import JsonLd from "@/components/seo/JsonLd";
import { defaultFAQs } from "@/config/faqs";
import FAQAccordion from "@/components/services/FAQAccordion";
import { SITE_URL, BUSINESS_EMAIL, PHONE_NUMBER } from "@/config/site";

export const metadata: Metadata = {
  title: "Wheelchair Taxi Perth FAQs | Equipment, PTSS & Booking",
  description:
    "Find clear answers on Perth wheelchair taxi ramps, wheelchair restraints, 10-seater maxi cabs, PTSS smartcards (formerly TUSS), NDIS invoicing, and airport booking procedures.",
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: defaultFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
        name: "FAQs",
        item: `${SITE_URL}/faq`,
      },
    ],
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="max-w-3xl">
            <span className="inline-block bg-white/10 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Help Center &amp; Passenger FAQs
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
              Wheelchair &amp; Maxi Taxi Perth FAQs
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              Answers to essential questions about Perth wheelchair taxis, vehicle specifications, and booking policies. Learn how our rear ramps accommodate wheelchairs, how WA PTSS smartcards (formerly TUSS) work, and how to reserve a 10-seater maxi cab 24 hours a day.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Accordion Content */}
      <FAQAccordion items={defaultFAQs} title="Frequently Asked Questions" badge="Common Questions" />

      {/* Contact Box */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg border border-slate-800">
            <h2 className="text-2xl font-bold mb-3 text-white">Still have a specific question?</h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto text-sm">
              We are happy to answer any questions about wheelchair dimensions, customized routes, or medical appointment schedules.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/61493252766?text=Hi,%20I%20have%20a%20question%20about%20your%20wheelchair%20accessible%20taxi%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full font-bold transition-all text-sm shadow-md hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-full font-bold transition-all text-sm hover:scale-105"
              >
                <GmailIcon className="w-4 h-4" colored={true} />
                <span>Email Us</span>
              </a>
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 text-black hover:bg-amber-300 px-7 py-3.5 rounded-full font-bold transition-all text-sm hover:scale-105"
              >
                <span>Book Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

