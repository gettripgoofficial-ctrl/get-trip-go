import type { Metadata } from "next"
import GreatMigrationExplainedArticle from "@/components/GreatMigrationExplainedArticle"

export const metadata: Metadata = {
  title: "The Great Migration Explained: When, Where and Why | Get Trip Go",
  description: "A month-by-month breakdown of the Great Migration — where the herds are, when the Mara River crossings happen, and where to base yourself for the best odds.",
}

export default function GreatMigrationExplainedPage() {
  return <GreatMigrationExplainedArticle />
}
