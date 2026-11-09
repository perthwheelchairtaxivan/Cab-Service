import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { SUBURBS_DATA } from "@/config/suburbs-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/services/wheelchair-accessible-taxi", changeFrequency: "weekly" as const, priority: 0.95 },
    { path: "/services/medical-ndis-transport", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/services/group-maxi-cab", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/services/airport-transfers", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/services/baby-seat-taxi", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/services/tours-and-events-transport", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/fares", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/locations", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/guides", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/guides/do-taxis-take-wheelchairs-perth", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/guides/how-to-use-ptss-wheelchair-taxi-wa", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/guides/ndis-transport-perth", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/guides/maxi-taxi-vs-two-taxis-perth", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/faq", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/enquire", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.4 },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.4 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const suburbEntries: MetadataRoute.Sitemap = Object.keys(SUBURBS_DATA).map((slug) => ({
    url: `${SITE_URL}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...suburbEntries];
}
