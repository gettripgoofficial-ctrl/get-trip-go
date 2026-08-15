import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/blog/admin", "/blog/write"],
      },
    ],
    sitemap: "https://gettripgo.com/sitemap.xml",
  }
}
