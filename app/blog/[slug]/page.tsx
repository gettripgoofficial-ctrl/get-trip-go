import type { Metadata } from "next";
import BlogPostClient from "./client-page";

// ── Dynamic metadata per post ─────────────────────────────────────────────────
// NOTE: Since we use localStorage (client-side), we use fallback metadata here.
// For full dynamic SEO, migrate to a database/API later.
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  // Format slug into a readable title fallback
  const titleFromSlug = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${titleFromSlug} | Get Trip Go`,
    description: `Read our travel story: ${titleFromSlug}. Discover insider tips, destination guides and travel wisdom on Get Trip Go.`,
    keywords: [
      titleFromSlug,
      "travel guide",
      "travel tips",
      "Get Trip Go",
      "travel stories",
    ],
    openGraph: {
      title: `${titleFromSlug} | Get Trip Go`,
      description: `Read our travel story: ${titleFromSlug}. Discover insider tips and destination guides.`,
      url: `https://gettripgo.com/blog/${slug}`,
      siteName: "Get Trip Go",
      images: [
        {
          url: "https://gettripgo.com/og-blog.jpg",
          width: 1200,
          height: 630,
          alt: titleFromSlug,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${titleFromSlug} | Get Trip Go`,
      description: `Read our travel story: ${titleFromSlug}.`,
      images: ["https://gettripgo.com/og-blog.jpg"],
    },
    alternates: {
      canonical: `https://gettripgo.com/blog/${slug}`,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  return <BlogPostClient />;
}