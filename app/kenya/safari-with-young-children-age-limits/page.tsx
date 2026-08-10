import type { Metadata } from "next"
import SafariYoungChildrenArticle from "@/components/SafariYoungChildrenArticle"

export const metadata: Metadata = {
  title: "Safari With Young Children: Age Limits and Lodge Policies",
  description: "Most camps set a minimum age for game drives -- here's how to find one that welcomes your kids, and what to confirm before you book.",
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safari With Young Children: Age Limits and Lodge Policies",
  description: "Most camps set a minimum age for game drives -- here's how to find one that welcomes your kids, and what to confirm before you book.",
  image: "/images/external/unsplash-178103986937.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a legal minimum age for a Kenya safari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Kenya has no national legal minimum age enforced by the Kenya Wildlife Service, since age limits come entirely from individual lodge and camp policies.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best age for a first family safari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ages 8-12 are widely considered the sweet spot, old enough to follow safety instructions and stay engaged, without needing the accommodations younger children require.",
      },
    },
    {
      "@type": "Question",
      name: "Can toddlers go on safari in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with the right planning: a private vehicle, shorter drives timed around nap schedules, and a lodge that explicitly accepts young children.",
      },
    },
    {
      "@type": "Question",
      name: "Does a private vehicle remove age restrictions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, yes for game drives specifically, since many camps that restrict shared drives for young children will allow them with a private vehicle. It doesn't typically apply to walking safaris or ballooning.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SafariYoungChildrenArticle />
    </>
  )
}
