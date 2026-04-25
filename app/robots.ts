import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/", "/workflow/", "/setup/"],
    },
    sitemap: "https://crawlmindai.swastikagnihotri.cloud/sitemap.xml",
  };
}
