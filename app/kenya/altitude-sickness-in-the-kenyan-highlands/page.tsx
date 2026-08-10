import type { Metadata } from "next"
import AltitudeSicknessArticle from "@/components/AltitudeSicknessArticle"

export const metadata: Metadata = {
  title: "Altitude Sickness in the Kenyan Highlands",
  description: "Nairobi and the highlands sit high enough to matter for some travelers -- here's who should be careful and what actually poses a risk.",
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Altitude Sickness in the Kenyan Highlands",
  description: "Nairobi and the highlands sit high enough to matter for some travelers -- here's who should be careful and what actually poses a risk.",
  image: "/images/external/unsplash-1547721064-d.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Nairobi's altitude dangerous for tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. At around 1,795 meters, Nairobi's altitude is moderate and typically causes at most mild, short-lived fatigue for travelers arriving from sea level, not altitude sickness.",
      },
    },
    {
      "@type": "Question",
      name: "Will I get altitude sickness on a standard Masai Mara safari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very unlikely. The Mara and most classic safari parks sit well below the elevation where altitude sickness typically begins.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mount Kenya trekking risky for altitude sickness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Routes climb as high as 4,985 meters, well past the threshold where genuine AMS risk begins, and it can affect trekkers regardless of fitness level.",
      },
    },
    {
      "@type": "Question",
      name: "Does being physically fit protect against altitude sickness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not reliably. Altitude sickness can affect anyone regardless of fitness level, since pace of ascent and individual susceptibility matter more than conditioning.",
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
      <AltitudeSicknessArticle />
    </>
  )
}
