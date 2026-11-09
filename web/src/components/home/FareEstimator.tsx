"use client";

import { useState } from "react";
import { Calculator, ArrowRight, ShieldCheck, Accessibility, Users, Baby } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface RouteFare {
  from: string;
  to: string;
  dist: string;
  wheelchairFare: string;
  maxiFare: string;
  babySeatFare: string;
  travelTime: string;
}

const sampleRoutes: RouteFare[] = [
  { from: "Perth Airport (PER)", to: "Perth CBD", dist: "18 km", wheelchairFare: "$65 – $80", maxiFare: "$75 – $90", babySeatFare: "$75 – $85", travelTime: "22 mins" },
  { from: "Perth Airport (PER)", to: "Fremantle", dist: "32 km", wheelchairFare: "$95 – $115", maxiFare: "$105 – $125", babySeatFare: "$100 – $120", travelTime: "35 mins" },
  { from: "Perth Airport (PER)", to: "Joondalup", dist: "38 km", wheelchairFare: "$115 – $135", maxiFare: "$125 – $145", babySeatFare: "$120 – $140", travelTime: "38 mins" },
  { from: "Perth Airport (PER)", to: "Scarborough", dist: "28 km", wheelchairFare: "$85 – $105", maxiFare: "$95 – $115", babySeatFare: "$90 – $110", travelTime: "30 mins" },
  { from: "Perth CBD", to: "Fiona Stanley Hospital", dist: "16 km", wheelchairFare: "$55 – $70", maxiFare: "$65 – $80", babySeatFare: "$60 – $75", travelTime: "18 mins" },
  { from: "Perth CBD", to: "Swan Valley Wineries", dist: "25 km", wheelchairFare: "$80 – $95", maxiFare: "$90 – $110", babySeatFare: "$85 – $100", travelTime: "28 mins" },
];

export default function FareEstimator() {
  const [selectedRouteIdx, setSelectedRouteIdx] = useState(0);
  const [vehicleMode, setVehicleMode] = useState<"wheelchair" | "maxi" | "baby">("wheelchair");

  const route = sampleRoutes[selectedRouteIdx];

  const currentFare = {
    wheelchair: route.wheelchairFare,
    maxi: route.maxiFare,
    baby: route.babySeatFare,
  }[vehicleMode];

  const serviceLabel = {
    wheelchair: "Wheelchair Accessible Taxi",
    maxi: "Maxi Cab (Up to 10 Passengers)",
    baby: "Maxi Taxi with Baby Seat",
  }[vehicleMode];

  const whatsappMessage = encodeURIComponent(
    `Hi, I saw your estimated fare for ${route.from} to ${route.to} (${currentFare}) for a ${serviceLabel}. Can I get an upfront quote?`
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
          <Calculator className="w-4 h-4" />
          <span>TRANSPARENT FARE ESTIMATOR</span>
        </div>
        <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-medium">
          Upfront Quotes
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold mb-2">
        Estimate Your Perth Trip Fare
      </h3>
      <p className="text-slate-400 text-xs sm:text-sm mb-4">
        Select vehicle type and destination for an upfront indicative quote.
      </p>

      {/* Vehicle Type Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-2xl mb-5 border border-slate-800">
        <button
          type="button"
          onClick={() => setVehicleMode("wheelchair")}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            vehicleMode === "wheelchair"
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Accessibility className="w-3.5 h-3.5" />
          <span>Wheelchair</span>
        </button>

        <button
          type="button"
          onClick={() => setVehicleMode("maxi")}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            vehicleMode === "maxi"
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Up to 10 Passengers</span>
        </button>

        <button
          type="button"
          onClick={() => setVehicleMode("baby")}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            vehicleMode === "baby"
              ? "bg-amber-600 text-white shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Baby className="w-3.5 h-3.5" />
          <span>Baby Seat</span>
        </button>
      </div>

      {/* Route Selector */}
      <div className="space-y-2 mb-5">
        <label htmlFor="fare-route-select" className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
          Select Popular Route:
        </label>
        <select
          id="fare-route-select"
          value={selectedRouteIdx}
          onChange={(e) => setSelectedRouteIdx(Number(e.target.value))}
          className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer"
        >
          {sampleRoutes.map((r, i) => (
            <option key={i} value={i}>
              {r.from} &rarr; {r.to} ({r.dist})
            </option>
          ))}
        </select>
      </div>

      {/* Fare Display Card */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-5">
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-xs text-slate-400">Indicative Fixed Fare:</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">{currentFare}</span>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-3">
          <span>Distance: <strong className="text-slate-200">{route.dist}</strong></span>
          <span>Drive Time: <strong className="text-slate-200">{route.travelTime}</strong></span>
        </div>
      </div>

      {/* Action */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`https://wa.me/61493252766?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-black py-3.5 px-5 rounded-full text-sm transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:scale-[1.02]"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Confirm on WhatsApp</span>
        </a>
        <a
          href="/enquire"
          className="inline-flex items-center justify-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3.5 px-5 rounded-full text-sm transition-all border border-zinc-700"
        >
          <span>Online Booking</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/60 pt-3">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          TUSS vouchers apply for wheelchair rides
        </span>
        <span>Standard WA DoT Regulated Fares</span>
      </div>
    </div>
  );
}
