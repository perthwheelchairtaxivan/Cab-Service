"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { Navigation } from "lucide-react";
import "leaflet/dist/leaflet.css";

export interface TransitPlace {
  id: string;
  name: string;
  shortLabel: string;
  lat: number;
  lng: number;
  distanceKm: number;
  category: "airport" | "hospital" | "station" | "shopping" | "education" | "venue" | "sport";
  corridor: "airport" | "metro" | "coastal" | "southern" | "eastern";
  corridorLabel: string;
  estTime: string;
  arterial: string;
  highlight: string;
  googleMapsUrl: string;
}

export interface TransitBase {
  name: string;
  suburb: string;
  state: string;
  lat: number;
  lng: number;
  radiusKm: number;
  googleMapsUrl: string;
}

const BASE_LOCATION: TransitBase = {
  name: "Perth Wheelchair Taxi Van - Our Base",
  suburb: "Girrawheen",
  state: "WA",
  lat: -31.8463333,
  lng: 115.8368056,
  radiusKm: 20.0,
  googleMapsUrl:
    "https://www.google.com/maps?q=31%C2%B050%2746.8%22S+115%C2%B050%2712.5%22E",
};

export const TRANSIT_PLACES: TransitPlace[] = [
  {
    id: "stirling",
    name: "Stirling City Centre / Station",
    shortLabel: "Stirling",
    lat: -31.8942,
    lng: 115.8058,
    distanceKm: 6.07,
    category: "station",
    corridor: "metro",
    corridorLabel: "Central Metro",
    estTime: "12-15 mins",
    arterial: "Mitchell Fwy (M1)",
    highlight: "Direct bus & rail interchange connecting northern corridor",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Stirling%20City%20Centre%20/%20Station,-31.8942,115.8058",
  },
  {
    id: "morley",
    name: "Morley Galleria & Bus Station",
    shortLabel: "Morley Galleria",
    lat: -31.8885,
    lng: 115.9048,
    distanceKm: 7.95,
    category: "shopping",
    corridor: "eastern",
    corridorLabel: "East & Hills",
    estTime: "14-18 mins",
    arterial: "Reid Hwy & Collier Rd",
    highlight: "Major retail precinct & Eastern metro transit interchange",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Morley%20Galleria%20%26%20Bus%20Station,-31.8885,115.9048",
  },
  {
    id: "scarborough",
    name: "Scarborough Beach",
    shortLabel: "Scarborough",
    lat: -31.8971,
    lng: 115.7551,
    distanceKm: 9.56,
    category: "venue",
    corridor: "coastal",
    corridorLabel: "Sunset & Beaches",
    estTime: "16-20 mins",
    arterial: "Scarborough Beach Rd",
    highlight: "Accessible beachfront promenade, hotels & coastal strip",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Scarborough%20Beach,-31.8971,115.7551",
  },
  {
    id: "hillarys",
    name: "Hillarys Boat Harbour",
    shortLabel: "Hillarys Harbour",
    lat: -31.8241,
    lng: 115.7361,
    distanceKm: 9.83,
    category: "venue",
    corridor: "coastal",
    corridorLabel: "Sunset & Beaches",
    estTime: "15-18 mins",
    arterial: "Hepburn Ave & Marmion Ave",
    highlight: "Marina boardwalk, AQWA aquarium & Rottnest ferry",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hillarys%20Boat%20Harbour,-31.8241,115.7361",
  },
  {
    id: "whitford",
    name: "Westfield Whitford City",
    shortLabel: "Whitford City",
    lat: -31.7965,
    lng: 115.7497,
    distanceKm: 9.92,
    category: "shopping",
    corridor: "coastal",
    corridorLabel: "Sunset & Beaches",
    estTime: "14-18 mins",
    arterial: "Whitfords Ave & Marmion Ave",
    highlight: "Premier northern shopping, medical clinics & dining hub",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Westfield%20Whitford%20City,-31.7965,115.7497",
  },
  {
    id: "mount_lawley",
    name: "Mount Lawley (Beaufort St)",
    shortLabel: "Mount Lawley",
    lat: -31.9333,
    lng: 115.8731,
    distanceKm: 10.26,
    category: "venue",
    corridor: "metro",
    corridorLabel: "Central Metro",
    estTime: "18-22 mins",
    arterial: "Beaufort St & Walcott St",
    highlight: "Inner-north cultural strip, historic cafes & Astor Theatre",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mount%20Lawley%20(Beaufort%20St),-31.9333,115.8731",
  },
  {
    id: "subiaco",
    name: "Subiaco (King Edward Hospital)",
    shortLabel: "Subiaco",
    lat: -31.9489,
    lng: 115.8236,
    distanceKm: 11.47,
    category: "hospital",
    corridor: "metro",
    corridorLabel: "Central Metro",
    estTime: "18-24 mins",
    arterial: "Thomas St & Roberts Rd",
    highlight: "Specialist maternity medical hub & Subiaco Square",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Subiaco%20(King%20Edward%20Hospital),-31.9489,115.8236",
  },
  {
    id: "perth_cbd",
    name: "Perth CBD (Perth Railway Station)",
    shortLabel: "Perth CBD",
    lat: -31.9514,
    lng: 115.8604,
    distanceKm: 11.89,
    category: "station",
    corridor: "metro",
    corridorLabel: "Central Metro",
    estTime: "20-25 mins",
    arterial: "Mitchell Fwy & Wellington St",
    highlight: "Capital city center, Elizabeth Quay, RAC Arena & hotels",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Perth%20CBD%20(Perth%20Railway%20Station),-31.9514,115.8604",
  },
  {
    id: "optus_stadium",
    name: "Optus Stadium, Burswood",
    shortLabel: "Optus Stadium",
    lat: -31.951,
    lng: 115.8891,
    distanceKm: 12.64,
    category: "sport",
    corridor: "metro",
    corridorLabel: "Central Metro",
    estTime: "22-26 mins",
    arterial: "Graham Farmer Fwy",
    highlight: "World-class 60,000-seat stadium & Crown entertainment",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Optus%20Stadium%2C%20Burswood,-31.951,115.8891",
  },
  {
    id: "joondalup",
    name: "Joondalup City Centre & Health Campus",
    shortLabel: "Joondalup",
    lat: -31.7455,
    lng: 115.7667,
    distanceKm: 13.02,
    category: "hospital",
    corridor: "coastal",
    corridorLabel: "Sunset & Beaches",
    estTime: "16-20 mins",
    arterial: "Mitchell Fwy & Joondalup Dr",
    highlight: "Major tertiary hospital & northern commercial hub",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Joondalup%20City%20Centre%20%26%20Health%20Campus,-31.7455,115.7667",
  },
  {
    id: "victoria_park",
    name: "Victoria Park Strip",
    shortLabel: "Victoria Park",
    lat: -31.9744,
    lng: 115.8972,
    distanceKm: 15.34,
    category: "venue",
    corridor: "southern",
    corridorLabel: "South & Port",
    estTime: "22-28 mins",
    arterial: "Causeway & Albany Hwy",
    highlight: "Vibrant Albany Highway dining precinct & Crown access",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Victoria%20Park%20Strip,-31.9744,115.8972",
  },
  {
    id: "belmont",
    name: "Belmont Forum",
    shortLabel: "Belmont Forum",
    lat: -31.967,
    lng: 115.9288,
    distanceKm: 15.98,
    category: "shopping",
    corridor: "airport",
    corridorLabel: "Airport Corridor",
    estTime: "20-25 mins",
    arterial: "Great Eastern Hwy",
    highlight: "Direct airport-adjacent commercial hub & hotels",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Belmont%20Forum,-31.967,115.9288",
  },
  {
    id: "perth_airport",
    name: "Perth Airport (Terminals T1-T4)",
    shortLabel: "Perth Airport",
    lat: -31.9415,
    lng: 115.9656,
    distanceKm: 16.12,
    category: "airport",
    corridor: "airport",
    corridorLabel: "Airport Corridor",
    estTime: "22-28 mins",
    arterial: "Tonkin Hwy & Airport Dr",
    highlight: "Guaranteed wheelchair pickup & dropoff at all terminals",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Perth%20Airport%20(Terminals%20T1-T4),-31.9415,115.9656",
  },
  {
    id: "midland",
    name: "Midland (SJOG Midland Hospital)",
    shortLabel: "Midland",
    lat: -31.8927,
    lng: 116.0075,
    distanceKm: 16.92,
    category: "hospital",
    corridor: "eastern",
    corridorLabel: "East & Hills",
    estTime: "22-28 mins",
    arterial: "Gt Eastern Hwy & Lloyd St",
    highlight: "St John of God public hospital & Swan Valley gateway",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Midland%20(SJOG%20Midland%20Hospital),-31.8927,116.0075",
  },
  {
    id: "cottesloe",
    name: "Cottesloe Beach",
    shortLabel: "Cottesloe",
    lat: -31.9936,
    lng: 115.7514,
    distanceKm: 18.25,
    category: "venue",
    corridor: "coastal",
    corridorLabel: "Sunset & Beaches",
    estTime: "25-30 mins",
    arterial: "Stirling Hwy & Marine Pde",
    highlight: "Iconic ocean views with wheelchair-accessible beach matting",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cottesloe%20Beach,-31.9936,115.7514",
  },
  {
    id: "applecross",
    name: "Applecross (Canning Bridge)",
    shortLabel: "Applecross",
    lat: -32.0167,
    lng: 115.8333,
    distanceKm: 18.95,
    category: "station",
    corridor: "southern",
    corridorLabel: "South & Port",
    estTime: "24-30 mins",
    arterial: "Kwinana Fwy & Canning Hwy",
    highlight: "Canning Bridge bus-train transit interchange & riverfront",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Applecross%20(Canning%20Bridge),-32.0167,115.8333",
  },
];

const FILTER_CHIPS = [
  { id: "all", label: "All 16 hubs" },
  { id: "airport", label: "Airport Corridor" },
  { id: "metro", label: "Central Metro" },
  { id: "coastal", label: "Sunset & Beaches" },
  { id: "southern", label: "South & Port" },
  { id: "eastern", label: "East & Hills" },
];

export default function TransitRoadmapMapClient() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<{ [key: string]: any }>({});
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredPlaces = useMemo(() => {
    if (activeFilter === "all") return TRANSIT_PLACES;
    return TRANSIT_PLACES.filter((p) => p.corridor === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    let isCancelled = false;

    async function initMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;
      const L = (await import("leaflet")).default;
      if (isCancelled || !mapContainerRef.current) return;

      const map = L.map(mapContainerRef.current, {
        center: [BASE_LOCATION.lat, BASE_LOCATION.lng],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      // Clean Light Grey / Monochrome tiles (zero watermarks, Google Maps style)
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        maxZoom: 19,
        className: "roadmap-greyscale-tiles",
      }).addTo(map);

      // Dashed yellow 20 km circle around Girrawheen base
      L.circle([BASE_LOCATION.lat, BASE_LOCATION.lng], {
        radius: BASE_LOCATION.radiusKm * 1000,
        color: "#FACC15",
        dashArray: "8, 8",
        weight: 2.5,
        fillColor: "#FACC15",
        fillOpacity: 0.04,
      }).addTo(map);

      // ── Highway & Arterial Route Polylines ──
      const routes = [
        // Mitchell Freeway (M1 North): Joondalup -> Stirling -> Perth CBD
        {
          coords: [
            [-31.7455, 115.7667],
            [-31.8942, 115.8058],
            [-31.9514, 115.8604],
          ],
          color: "#FACC15",
          weight: 3.5,
          dashArray: "6, 4",
        },
        // Kwinana Freeway (M1 South): Perth CBD -> Applecross
        {
          coords: [
            [-31.9514, 115.8604],
            [-32.0167, 115.8333],
          ],
          color: "#FACC15",
          weight: 3.5,
          dashArray: "6, 4",
        },
        // Great Eastern Hwy: Perth CBD -> Belmont -> Perth Airport -> Midland
        {
          coords: [
            [-31.9514, 115.8604],
            [-31.967, 115.9288],
            [-31.9415, 115.9656],
            [-31.8927, 116.0075],
          ],
          color: "#38BDF8",
          weight: 3,
          dashArray: "5, 3",
        },
        // Tonkin Highway (Eastern Corridor): Midland -> Airport
        {
          coords: [
            [-31.8927, 116.0075],
            [-31.9415, 115.9656],
          ],
          color: "#10B981",
          weight: 3,
          dashArray: "4, 3",
        },
        // Sunset Coast: Joondalup -> Whitford -> Hillarys -> Scarborough -> Cottesloe
        {
          coords: [
            [-31.7455, 115.7667],
            [-31.7965, 115.7497],
            [-31.8241, 115.7361],
            [-31.8971, 115.7551],
            [-31.9936, 115.7514],
          ],
          color: "#38BDF8",
          weight: 2.5,
          dashArray: "4, 3",
        },
        // Stirling Hwy / Inner West: Perth CBD -> Subiaco -> Cottesloe
        {
          coords: [
            [-31.9514, 115.8604],
            [-31.9489, 115.8236],
            [-31.9936, 115.7514],
          ],
          color: "#E879F9",
          weight: 2.5,
          dashArray: "4, 3",
        },
        // Causeway & Albany Hwy: Perth CBD -> Optus Stadium -> Victoria Park
        {
          coords: [
            [-31.9514, 115.8604],
            [-31.951, 115.8891],
            [-31.9744, 115.8972],
          ],
          color: "#A3E635",
          weight: 2.5,
          dashArray: "4, 3",
        },
        // Reid Highway & East Link: Base -> Morley -> Midland
        {
          coords: [
            [-31.8463333, 115.8368056],
            [-31.8885, 115.9048],
            [-31.8927, 116.0075],
          ],
          color: "#FB923C",
          weight: 2.5,
          dashArray: "4, 3",
        },
        // River South Link (Canning Hwy): Applecross -> Victoria Park
        {
          coords: [
            [-32.0167, 115.8333],
            [-31.9744, 115.8972],
          ],
          color: "#FB923C",
          weight: 2.5,
          dashArray: "4, 3",
        },
      ];

      routes.forEach((r) => {
        // Outline for contrast
        L.polyline(r.coords as [number, number][], {
          color: "#000000",
          weight: r.weight + 2,
          opacity: 0.6,
        }).addTo(map);

        // Styled route line
        L.polyline(r.coords as [number, number][], {
          color: r.color,
          weight: r.weight,
          dashArray: r.dashArray,
          opacity: 0.85,
        }).addTo(map);
      });

      // ── Base Marker ──
      const baseIcon = L.divIcon({
        className: "base-custom-icon",
        html: `
          <div role="button" tabindex="0" aria-label="${BASE_LOCATION.name} - Click to open Google Maps" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transform: translate(-50%, -100%);">
            <div style="background: #000000; color: #FACC15; border: 2px solid #FACC15; font-size: 11px; font-weight: 800; padding: 3px 9px; border-radius: 9999px; box-shadow: 0 4px 14px rgba(0,0,0,0.7); white-space: nowrap; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;">
              <span>⭐</span>
              <span>${BASE_LOCATION.name}</span>
            </div>
            <div style="width: 34px; height: 34px; border-radius: 9999px; background: #FACC15; border: 3px solid #000000; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 18px rgba(250, 204, 21, 0.8);">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          </div>
        `,
        iconSize: [0, 0],
      });

      const baseMarker = L.marker([BASE_LOCATION.lat, BASE_LOCATION.lng], {
        icon: baseIcon,
        title: BASE_LOCATION.name,
        alt: `${BASE_LOCATION.name} in Girrawheen`,
        zIndexOffset: 2500,
      }).addTo(map);

      baseMarker.on("click", () => {
        window.open(BASE_LOCATION.googleMapsUrl, "_blank", "noopener,noreferrer");
      });

      // ── 16 Hub Markers ──
      const allLatLngs: [number, number][] = [
        [BASE_LOCATION.lat, BASE_LOCATION.lng],
      ];

      TRANSIT_PLACES.forEach((place) => {
        allLatLngs.push([place.lat, place.lng]);

        const isAirport = place.id === "perth_airport";
        const isCBD = place.id === "perth_cbd";
        const pinBg = isAirport
          ? "#10B981"
          : isCBD
          ? "#FACC15"
          : "#18181b";
        const borderCol = isAirport
          ? "#10B981"
          : isCBD
          ? "#FACC15"
          : "#FACC15";
        const dotBg = isAirport ? "#000000" : isCBD ? "#000000" : "#FACC15";

        const placeIcon = L.divIcon({
          className: `transit-marker-${place.id}`,
          html: `
            <div role="button" tabindex="0" aria-label="${place.name} - Click to view on Google Maps" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transform: translate(-50%, -100%);">
              <div style="background: rgba(8, 11, 18, 0.96); color: #ffffff; border: 1.5px solid ${borderCol}; font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 6px; box-shadow: 0 3px 12px rgba(0,0,0,0.7); white-space: nowrap; margin-bottom: 2px; letter-spacing: 0.02em;">
                ${place.shortLabel}
              </div>
              <div style="width: 24px; height: 24px; border-radius: 9999px; background: ${pinBg}; border: 2px solid #000000; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.5);">
                ${
                  isAirport
                    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`
                    : isCBD
                    ? `<div style="width: 8px; height: 8px; border-radius: 9999px; background: #000000;"></div>`
                    : `<div style="width: 8px; height: 8px; border-radius: 9999px; background: ${dotBg};"></div>`
                }
              </div>
            </div>
          `,
          iconSize: [0, 0],
        });

        const marker = L.marker([place.lat, place.lng], {
          icon: placeIcon,
          title: `${place.name} (${place.distanceKm} km)`,
          alt: `${place.name}, ${place.distanceKm} km from Girrawheen base`,
          zIndexOffset: isAirport ? 1600 : isCBD ? 1200 : 600,
        }).addTo(map);

        marker.on("click", () => {
          window.open(place.googleMapsUrl, "_blank", "noopener,noreferrer");
        });

        markersRef.current[place.id] = { marker, data: place };
      });

      // Fit bounds with comfortable padding
      const bounds = L.latLngBounds(allLatLngs);
      map.fitBounds(bounds, {
        paddingTopLeft: [40, 30],
        paddingBottomRight: [40, 30],
        maxZoom: 11,
      });

      setTimeout(() => {
        map.invalidateSize();
      }, 250);
    }

    initMap();

    return () => {
      isCancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update marker visibility and map view when activeFilter changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    const visibleCoords: [number, number][] = [
      [BASE_LOCATION.lat, BASE_LOCATION.lng],
    ];

    Object.entries(markersRef.current).forEach(([id, { marker, data }]) => {
      const isVisible =
        activeFilter === "all" || data.corridor === activeFilter;

      if (isVisible) {
        marker.setOpacity(1);
        if (marker.getElement()) {
          marker.getElement()!.style.pointerEvents = "auto";
          marker.getElement()!.style.filter = "none";
        }
        visibleCoords.push([data.lat, data.lng]);
      } else {
        marker.setOpacity(0.2);
        if (marker.getElement()) {
          marker.getElement()!.style.pointerEvents = "none";
          marker.getElement()!.style.filter = "grayscale(100%) opacity(0.35)";
        }
      }
    });

    if (visibleCoords.length > 1) {
      import("leaflet").then((L) => {
        const bounds = L.latLngBounds(visibleCoords);
        map.fitBounds(bounds, {
          paddingTopLeft: [45, 35],
          paddingBottomRight: [45, 35],
          maxZoom: 11,
        });
      });
    }
  }, [activeFilter]);

  return (
    <div className="w-full text-white">
      {/* ─────────────────────────────────────────────────────────────
          MAP CARD CONTAINER
         ───────────────────────────────────────────────────────────── */}
      <div className="bg-zinc-950 border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_#facc15] sm:shadow-[8px_8px_0px_0px_#facc15] rounded-2xl sm:rounded-3xl overflow-hidden mb-12">
        
        {/* Header Strip with Live Transit Badge & Filter Chips */}
        <div className="p-3.5 sm:p-6 border-b-2 sm:border-b-4 border-black bg-zinc-900 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0 max-w-full">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-black shadow-[0_0_15px_rgba(251,191,36,0.6)] shrink-0">
              <Navigation className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-sm sm:text-xl font-black uppercase tracking-tight text-white leading-tight">
                  Perth Connected Transit Arterials
                </h2>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Live Network</span>
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-400 font-medium leading-snug mt-0.5">
                Click any place on the map to see it on Google Maps.
              </p>
            </div>
          </div>

          {/* Filter Chips — Horizontally scrollable on mobile, tap target >= 44px */}
          <div
            className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none max-w-full"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {FILTER_CHIPS.map((chip) => {
              const isActive = activeFilter === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setActiveFilter(chip.id)}
                  className={`shrink-0 text-[11px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-2.5 rounded-full transition-all duration-150 cursor-pointer min-h-[44px] flex items-center justify-center ${
                    isActive
                      ? "bg-amber-400 text-black shadow-[2px_2px_0px_0px_#000]"
                      : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                  }`}
                  aria-pressed={isActive}
                  aria-label={`Filter by ${chip.label}`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Interactive Leaflet Map (CARTO Positron, desktop: 560px, mobile: 420px) ── */}
        <div className="relative w-full">
          <style jsx global>{`
            .roadmap-greyscale-tiles {
              filter: grayscale(100%) contrast(92%) brightness(102%);
            }
            .locations-roadmap-map-container {
              width: 100%;
              height: 560px;
              background-color: #f2f2f2;
            }
            @media (max-width: 640px) {
              .locations-roadmap-map-container {
                height: 420px;
              }
            }
            .locations-roadmap-map-container .leaflet-control-attribution {
              background: rgba(255, 255, 255, 0.88) !important;
              color: #52525b !important;
              font-size: 10px !important;
              padding: 2px 6px !important;
            }
            .locations-roadmap-map-container .leaflet-control-zoom {
              border: 1px solid rgba(0, 0, 0, 0.15) !important;
              border-radius: 8px !important;
              overflow: hidden;
            }
            .locations-roadmap-map-container .leaflet-control-zoom-in,
            .locations-roadmap-map-container .leaflet-control-zoom-out {
              background: #ffffff !important;
              color: #18181b !important;
              min-width: 32px;
              min-height: 32px;
              line-height: 32px;
            }
          `}</style>

          <div
            ref={mapContainerRef}
            className="locations-roadmap-map-container"
            tabIndex={0}
            aria-label="Interactive Transit Roadmap showing metropolitan hubs and airport connections from Girrawheen base"
          />

          {/* Corner Legend */}
          <div className="absolute bottom-3 left-3 z-[1000] flex flex-wrap gap-1.5 max-w-[85%] sm:max-w-none">
            <a
              href={BASE_LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-md bg-black/90 border border-amber-400/40 hover:border-amber-400 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-[10px] font-bold text-amber-300 hover:text-amber-200 transition-colors shadow-sm cursor-pointer"
              title="Open Girrawheen Base on Google Maps (31°50'46.8&quot;S 115°50'12.5&quot;E)"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>Girrawheen Base</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <div className="backdrop-blur-md bg-black/85 border border-white/10 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-[10px] font-bold text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Airport Hub</span>
            </div>
            <div className="backdrop-blur-md bg-black/85 border border-white/10 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-[10px] font-bold text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span>Coastal & Gt Eastern</span>
            </div>
            <div className="backdrop-blur-md bg-black/85 border border-white/10 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-[10px] font-bold text-zinc-300 hidden sm:flex">
              <span className="w-3 h-0.5 border-t border-dashed border-amber-400" />
              <span>20 km Radius</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
