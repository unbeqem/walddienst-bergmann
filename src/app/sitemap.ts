import type { MetadataRoute } from "next";

const BASE_URL = "https://walddienst-bergmann.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/ueber", "/leistungen", "/kontakt", "/impressum"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
