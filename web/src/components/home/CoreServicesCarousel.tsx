"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import ServiceCard from "@/components/services/ServiceCard";

const services = [
  {
    title: "Wheelchair Taxi",
    tagline: "Girrawheen & Perth Metro",
    iconName: "Accessibility",
    gradient: "sky" as const,
    features: ["Ramp or Lift Access", "4-Point Tie-Downs", "Carers Travel Together"],
    serviceHref: "/services/wheelchair-accessible-taxi",
    badgeText: "24/7 Available",
  },
  {
    title: "NDIS & Medical Transport",
    tagline: "NDIS · WA PTSS · Hospital",
    iconName: "HeartPulse",
    gradient: "rose" as const,
    features: ["Hospital Transfers", "WA PTSS Smartcards", "Itemised NDIS Invoices"],
    serviceHref: "/services/medical-ndis-transport",
    badgeText: "NDIS & PTSS",
  },
  {
    title: "Group Maxi Cab",
    tagline: "Up to 10 Passengers",
    iconName: "Users",
    gradient: "emerald" as const,
    features: ["Up to 10 Passengers", "Luggage by Arrangement", "Dual Air Conditioning"],
    serviceHref: "/services/group-maxi-cab",
    badgeText: "10 Seater",
  },
  {
    title: "Baby Seat Taxi",
    tagline: "Fitted Child Restraints",
    iconName: "Baby",
    gradient: "amber" as const,
    features: ["Infant Capsules", "Forward-Facing Seats", "Booster Seats"],
    serviceHref: "/services/baby-seat-taxi",
    badgeText: "Family Safe",
  },
  {
    title: "Airport Transfer",
    tagline: "Terminals T1 · T2 · T3 · T4",
    iconName: "Plane",
    gradient: "amber" as const,
    features: ["Flight Monitoring", "Terminal Curbside Pickup", "Spacious Van Luggage"],
    serviceHref: "/services/airport-transfers",
    badgeText: "Airport 24/7",
  },
  {
    title: "Tours & Events",
    tagline: "Swan Valley & Celebrations",
    iconName: "Sparkles",
    gradient: "violet" as const,
    features: ["Swan Valley Wine Tours", "Wedding Guest Transport", "Upfront Charter Quotes"],
    serviceHref: "/services/tours-and-events-transport",
    badgeText: "Private Charter",
  },
];

export default function CoreServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const total = services.length;

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstItem = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstItem ? firstItem.offsetWidth : container.clientWidth * 0.84;
    const gap = 16;
    const targetLeft = index * (cardWidth + gap);

    container.scrollTo({
      left: targetLeft,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    setActiveIndex(index);
  }, [prefersReducedMotion]);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const firstItem = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstItem ? firstItem.offsetWidth : container.clientWidth * 0.84;
    const gap = 16;
    const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
    if (currentIndex >= 0 && currentIndex < total && currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  }, [activeIndex, total]);

  const handleInteractionStart = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleInteractionEnd = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const interval = setInterval(() => {
      // Auto-advance only on mobile where horizontal scrolling is active
      if (typeof window !== "undefined" && window.innerWidth < 640) {
        const next = (activeIndex + 1) % total;
        scrollTo(next);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, prefersReducedMotion, scrollTo, total]);

  return (
    <div className="w-full relative">
      {/* 
        Single DOM Tree:
        Mobile (<640px): Horizontal snap carousel with touch scrolling
        Tablet & Desktop (>=640px): Structured 2 & 3 column grid
      */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onFocus={handleInteractionStart}
        onBlur={handleInteractionEnd}
        className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-4 sm:gap-6 pb-4 sm:pb-0 px-1 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((item, idx) => (
          <div
            key={item.serviceHref}
            className="w-[84vw] max-w-[340px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-center"
          >
            <ServiceCard
              title={item.title}
              tagline={item.tagline}
              iconName={item.iconName}
              gradient={item.gradient}
              features={item.features}
              serviceHref={item.serviceHref}
              badgeText={item.badgeText}
            />
          </div>
        ))}
      </div>

      {/* Mobile Dot Indicators (hidden on >=640px) */}
      <div
        className="flex sm:hidden items-center justify-center gap-2 mt-3"
        aria-label="Services pagination"
      >
        {services.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              handleInteractionStart();
              scrollTo(i);
              handleInteractionEnd();
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === i
                ? "w-6 bg-amber-400"
                : "w-2 bg-zinc-700 hover:bg-zinc-500"
            }`}
            aria-label={`Go to service ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
