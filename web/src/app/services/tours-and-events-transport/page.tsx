import { CheckCircle2, Car, ShieldCheck, Clock, ArrowRight, Phone, Sparkles } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { Metadata } from "next";
import Link from "next/link";
import SlideUp from "@/components/animations/SlideUp";
import RelatedServices from "@/components/services/RelatedServices";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Swan Valley Maxi Taxi | Perth Wedding & Event Transport",
  description:
    "Swan Valley wine tours, wedding guest charters, and private event transport in Perth. 10-seater maxi cabs with wheelchair accessibility. Get a quote.",
  alternates: {
    canonical: `${SITE_URL}/services/tours-and-events-transport`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Swan Valley Maxi Taxi & Perth Event Transport",
  description:
    "Swan Valley wine tours, wedding guest charters, and private event transport in Perth. 10-seater maxi cabs with rear wheelchair ramp access.",
  provider: {
    "@type": "TaxiService",
    name: "Perth Wheelchair Taxi Van",
    url: SITE_URL,
    telephone: "+61493252766",
  },
  areaServed: {
    "@type": "City",
    name: "Perth",
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tours & Events Transport",
      item: `${SITE_URL}/services/tours-and-events-transport`,
    },
  ],
};

export default function ToursAndEventsTransportPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SlideUp>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Tours & Events Transport", href: "/services/tours-and-events-transport" },
                ]}
                className="mb-4"
              />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-300 text-xs sm:text-sm font-semibold mb-6 border border-violet-500/30">
                <Sparkles className="w-4 h-4" />
                <span>Special Charters &amp; Perth Events</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
                Swan Valley &amp; Perth Event Maxi Taxi
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                Looking for a private Swan Valley wine tour or event maxi taxi in Perth? We provide dedicated 10-seater maxi vans with full wheelchair accessibility for winery day tours, wedding guest transfers, RAC Arena concerts, and Crown Perth celebrations. Enjoy fixed charter pricing, door-to-door multi-stop pickups, and guaranteed return transport 24 hours a day.
              </p>
              <p className="mt-3 text-sm text-amber-300 font-semibold">
                Every vehicle includes a certified rear ramp and 4-point Q&apos;Straint tie-downs alongside seating for up to 10 ambulatory passengers.
              </p>
            </SlideUp>

            <SlideUp delay={0.2} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/enquire"
                className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-7 py-3.5 rounded-full shadow-lg transition-all text-sm sm:text-base flex items-center gap-2"
                aria-label="Book tours and events transport online"
              >
                <span>Book Event Ride</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/61493252766?text=Hi,%20I%20would%20like%20to%20book%20tours%20or%20event%20transport%20in%20Perth."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm sm:text-base flex items-center gap-2 shadow-md"
                aria-label="Enquire about tours on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Seamless Group &amp; Accessible Outings Across WA
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                  Planning a special day out shouldn&apos;t be stressful. Whether you are arranging a full-day Swan Valley winery tour, attending an AFL match at Optus Stadium, or celebrating a wedding reception, our high-roof maxi vans ensure everyone travels comfortably together.
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Our ramp-equipped vehicles accommodate manual and powered wheelchairs, with room for companions to ride alongside in dual-zone climate-controlled comfort (carrying up to 10 passengers in total).
                </p>
              </div>

              {/* What We Support */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Popular Tour &amp; Event Destinations We Cover
                </h3>
                <ul className="space-y-4">
                  {[
                    "Swan Valley wine tours, breweries, and chocolate factory excursions",
                    "Optus Stadium matches, RAC Arena concerts, and major sporting events",
                    "Crown Perth dining, theater shows, and riverside casino functions",
                    "Wedding guest transfers, corporate outings, and family anniversaries",
                    "Scenic Perth tours: Kings Park, Fremantle Fishing Boat Harbour & Cottesloe",
                    "Coordinated return pickups with designated meeting points",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky Sidebar Booking */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sticky top-28 shadow-lg">
                <div className="w-12 h-12 bg-violet-50 text-violet-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                  Book Tour Charter
                </h3>
                <p className="text-slate-500 mb-6 text-center text-xs">
                  Upfront quotes for events and charters.
                </p>

                <div className="space-y-3 mb-6">
                  <Link
                    href="/enquire"
                    className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white w-full py-3.5 rounded-full font-bold text-sm transition-colors shadow-sm"
                    aria-label="Open online booking form"
                  >
                    <span>Online Booking Form</span>
                  </Link>
                  <a
                    href="https://wa.me/61493252766?text=Hi,%20I%20would%20like%20to%20book%20event%20or%20tour%20transport%20in%20Perth."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white w-full py-3.5 rounded-full font-bold text-sm transition-colors shadow-sm"
                    aria-label="Enquire on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                  <a
                    href="tel:+61493252766"
                    className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 w-full py-3 rounded-full font-bold text-sm transition-colors"
                    aria-label="Call +61 493 252 766"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +61 493 252 766</span>
                  </a>
                </div>

                <div className="border-t border-slate-100 pt-4 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Fully Licensed Maxi Fleet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Reliable Scheduled Pickups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices currentSlug="tours-and-events-transport" />
    </div>
  );
}
