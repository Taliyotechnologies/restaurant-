import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://budas-pub.example.com";
  const routes = ["", "/budas-pub", "/events", "/menu", "/blog", "/book", "/contact"];
  return routes.map((r) => ({
    url: `${base}${r || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
