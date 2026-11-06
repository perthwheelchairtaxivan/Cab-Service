"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatItem {
  numericValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  subtext?: string;
}

const statsData: StatItem[] = [
  {
    numericValue: 24,
    suffix: "/7",
    label: "Always Available",
    subtext: "Round-the-clock bookings",
  },
  {
    numericValue: 10,
    suffix: " Seater",
    label: "Maxi Van Capacity",
    subtext: "Rear ramp & group transport",
  },
  {
    numericValue: 100,
    suffix: "%",
    label: "Pre-Booked Priority",
    subtext: "Advance schedule commitment",
  },
];

function AnimatedNumber({
  value,
  duration = 1800,
}: {
  value: number;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrent(value);
      return;
    }

    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out expo curve for smooth deceleration
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCurrent(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrent(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration, shouldReduceMotion]);

  // Format with thousand separators
  const formatted = current.toLocaleString("en-AU");

  return <span ref={ref}>{formatted}</span>;
}

export default function AboutStatsCounter() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-zinc-800">
      {statsData.map((stat, idx) => (
        <div
          key={idx}
          className={`bg-zinc-900/70 border border-zinc-800 rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between hover:border-amber-400/50 hover:bg-zinc-900 transition-all shadow-md group ${
            idx === 2
              ? "col-span-2 sm:col-span-1 max-w-[240px] sm:max-w-none mx-auto w-full text-center sm:text-left"
              : ""
          }`}
        >
          <div
            className={`text-2xl sm:text-4xl font-black text-amber-400 tracking-tight flex items-baseline ${
              idx === 2 ? "justify-center sm:justify-start" : ""
            }`}
          >
            {stat.prefix && <span>{stat.prefix}</span>}
            <AnimatedNumber value={stat.numericValue} />
            {stat.suffix && <span className="ml-0.5">{stat.suffix}</span>}
          </div>
          <div className="mt-2">
            <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider leading-snug">
              {stat.label}
            </p>
            {stat.subtext && (
              <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium mt-0.5">
                {stat.subtext}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
