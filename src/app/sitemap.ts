import type { MetadataRoute } from "next";
import { journeys } from "@/data/journeys";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bhutanbeckons.com";
  const routes = [
    "",
    "/destinations",
    "/experiences",
    "/journeys",
    "/journal",
    "/travel-info",
    "/about",
    "/partner-with-us",
    "/contact",
  ];

  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...journeys.map((journey) => ({ url: `${baseUrl}/journeys/${journey.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
