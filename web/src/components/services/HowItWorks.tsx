"use client";

import { useState } from "react";
import { FileText, CheckCircle2, MapPin, Smile, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Request a Quote",
    icon: FileText,
    color: "text-amber-400",
    activeBg: "bg-amber-400",
    hoverBg: "hover:bg-amber-400",
  },
  {
    num: "02",
    title: "Get Fixed Price",
    icon: CheckCircle2,
    color: "text-sky-400",
    activeBg: "bg-sky-400",
    hoverBg: "hover:bg-sky-400",
  },
  {
    num: "03",
    title: "Driver Arrives",
    icon: MapPin,
    color: "text-emerald-400",
    activeBg: "bg-emerald-400",
    hoverBg: "hover:bg-emerald-400",
  },
  {
    num: "04",
    title: "Enjoy the Ride",
    icon: Smile,
    color: "text-violet-400",
    activeBg: "bg-violet-400",
    hoverBg: "hover:bg-violet-400",
  },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-zinc-950 border-b-4 border-zinc-800 py-10 sm:py-20 px-4 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-[10px] sm:text-[11px] font-black text-amber-400 uppercase tracking-[0.3em] block mb-1.5 sm:mb-2">
              Seamless Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
              How It<br />Works
            </h2>
          </div>
          <Link
            href="/enquire"
            className="self-start sm:self-end inline-flex items-center gap-2 bg-amber-400 border-2 sm:border-4 border-black text-black font-black uppercase text-xs px-4 sm:px-5 py-2.5 sm:py-3 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all rounded-full sm:rounded-none"
          >
            Book Now <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Steps – 2 above 2 below (grid-cols-2) on mobile, 4 across on desktop */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-0 border-2 border-zinc-700">
          {steps.map(({ num, title, icon: Icon, color, activeBg, hoverBg }, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`group relative p-4 sm:p-8 ${
                  i % 2 === 0 ? "border-r-2" : "border-r-0 xl:border-r-2"
                } ${
                  i < 2 ? "border-b-2" : "border-b-0 xl:border-b-0"
                } border-zinc-700 xl:last:border-r-0 cursor-pointer transition-colors duration-200 overflow-hidden ${
                  isActive ? activeBg : `${hoverBg} bg-zinc-950`
                }`}
              >
                {/* Giant background number */}
                <span
                  className={`absolute -right-2 -bottom-3 sm:-right-3 sm:-bottom-5 text-5xl sm:text-[8rem] font-black select-none leading-none transition-colors duration-200 ${
                    isActive
                      ? "text-black/10"
                      : "text-white/[0.04] group-hover:text-black/10"
                  }`}
                >
                  {num}
                </span>

                {/* Icon */}
                <div
                  className={`w-11 h-11 sm:w-16 sm:h-16 border-2 sm:border-4 flex items-center justify-center mb-3 sm:mb-6 transition-colors duration-200 ${
                    isActive
                      ? "border-black bg-black/10"
                      : "border-zinc-700 group-hover:border-black"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 sm:w-8 sm:h-8 transition-colors duration-200 ${
                      isActive ? "text-black" : `${color} group-hover:text-black`
                    }`}
                  />
                </div>

                {/* Step number */}
                <span
                  className={`text-[9px] sm:text-[11px] font-black uppercase tracking-widest block mb-1 sm:mb-2 transition-colors duration-200 ${
                    isActive
                      ? "text-black/60"
                      : "text-zinc-500 group-hover:text-black/60"
                  }`}
                >
                  Step {num}
                </span>

                {/* Title */}
                <h3
                  className={`text-sm sm:text-xl font-black uppercase tracking-tight transition-colors duration-200 leading-snug ${
                    isActive ? "text-black" : "text-white group-hover:text-black"
                  }`}
                >
                  {title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
