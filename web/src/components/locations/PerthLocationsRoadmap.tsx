"use client";

import dynamic from "next/dynamic";
import React from "react";

// Client-only dynamic import to protect SSR on Vercel
const TransitRoadmapMapClient = dynamic(
  () => import("@/components/locations/TransitRoadmapMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[420px] sm:h-[560px] bg-zinc-950 border-2 sm:border-4 border-black rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center p-6 my-2 shadow-[4px_4px_0px_0px_#facc15] sm:shadow-[8px_8px_0px_0px_#facc15]">
        <div className="w-10 h-10 border-3 border-amber-400 border-t-transparent rounded-full animate-spin mb-4" />
        <span className="text-zinc-300 text-sm font-bold uppercase tracking-wider">
          Loading Transit Roadmap...
        </span>
        <span className="text-zinc-500 text-xs mt-1 font-medium">
          Connecting Girrawheen base with regional hubs and airport terminals
        </span>
      </div>
    ),
  }
);

export default function PerthLocationsRoadmap() {
  return <TransitRoadmapMapClient />;
}
