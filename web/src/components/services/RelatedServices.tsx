import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export interface ServiceLinkItem {
  title: string;
  slug: string;
  desc: string;
}

const ALL_SERVICES: ServiceLinkItem[] = [
  {
    title: "Wheelchair Accessible Taxi",
    slug: "wheelchair-accessible-taxi",
    desc: "Rear ramp or lift van with restraints for manual and powered wheelchairs across Perth.",
  },
  {
    title: "NDIS & Medical Transport",
    slug: "medical-ndis-transport",
    desc: "Hospital visits, therapy appointments, itemised NDIS invoices and WA PTSS smartcards.",
  },
  {
    title: "Group Maxi Cab Charters",
    slug: "group-maxi-cab",
    desc: "Taxi vans for up to 10 passengers with flexible seating for family, carers, and groups.",
  },
  {
    title: "Baby Seat Maxi Taxi",
    slug: "baby-seat-taxi",
    desc: "Baby capsules and booster seats on request for safe family travel across Perth.",
  },
  {
    title: "Perth Airport Transfers",
    slug: "airport-transfers",
    desc: "Accessible airport pickups and transfers across Perth Terminals T1-T4, open 24/7.",
  },
  {
    title: "Tours & Events Transport",
    slug: "tours-and-events-transport",
    desc: "Accessible van transport for up to 10 passengers for Swan Valley tours and events.",
  },
];

interface RelatedServicesProps {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related = ALL_SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="border-t border-slate-200 bg-white py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-black text-amber-500 uppercase tracking-widest block mb-2">
              Explore More Options
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Related Perth Transport Services
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-black border border-slate-300 hover:border-black px-4 py-2 rounded-full transition-colors"
              aria-label="View our full Perth service locations"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Service Locations</span>
            </Link>
            <Link
              href="/enquire"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-black px-4 py-2 rounded-full transition-colors"
              aria-label="Book or enquire online now"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Online</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col justify-between border border-slate-200 hover:border-amber-400/80 rounded-2xl p-6 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all group"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors mt-auto"
                aria-label={`View details about ${service.title}`}
              >
                <span>View {service.title} Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
