"use client";

import { 
  ShieldCheck, 
  Clock, 
  HeartHandshake, 
  Award, 
  Phone,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUsLegacy() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Licensed & Verified",
      desc: "Police-checked, WA-licensed drivers trained in passenger assistance.",
      color: "text-emerald-400",
      borderColor: "border-emerald-400",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      desc: "Traffic planning & flight coordination for prompt pickups.",
      color: "text-amber-400",
      borderColor: "border-amber-400",
    },
    {
      icon: HeartHandshake,
      title: "Community First",
      desc: "Wheelchair access, hospital visits, elderly care & family travel.",
      color: "text-sky-400",
      borderColor: "border-sky-400",
    },
    {
      icon: Award,
      title: "Passenger Commitment",
      desc: "Accredited wheelchair vans with prompt, respectful driver care.",
      color: "text-violet-400",
      borderColor: "border-violet-400",
    },
  ];

  const stats = [
    { value: "24/7", label: "Available" },
    { value: "10", label: "Passengers" },
    { value: "100%", label: "Pre-Booked" },
    { value: "WAT", label: "Wheelchair Vans" },
  ];

  return (
    <section className="bg-zinc-950 border-b-4 border-zinc-800 py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-black text-amber-400 uppercase tracking-[0.3em] block mb-2">
              Why Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
              Built on<br />Trust
            </h2>
          </div>
          <a
            href="tel:+61493252766"
            className="self-start sm:self-end inline-flex items-center gap-2 bg-amber-400 border-4 border-black text-black font-black uppercase text-xs px-5 py-3 shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        {/* 4 Feature Cards — brutalist grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0 border-2 border-zinc-700 mb-12">
          {features.map(({ icon: Icon, title, desc, color, borderColor }, i) => (
            <div
              key={i}
              className="group relative p-8 border-r-2 border-b-2 border-zinc-700 last:border-r-0 hover:bg-zinc-900 transition-colors duration-150 overflow-hidden"
            >
              {/* Icon */}
              <div className={`w-16 h-16 border-4 border-zinc-700 group-hover:${borderColor} flex items-center justify-center mb-6 transition-colors`}>
                <Icon className={`w-8 h-8 ${color} transition-colors`} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                {title}
              </h3>

              {/* Short desc */}
              <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-2 border-zinc-700">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 px-4 border-r-2 border-b-2 border-zinc-700 last:border-r-0 text-center">
              <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tighter font-mono leading-none">
                {stat.value}
              </span>
              <span className="mt-2 text-[11px] font-black text-zinc-500 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
