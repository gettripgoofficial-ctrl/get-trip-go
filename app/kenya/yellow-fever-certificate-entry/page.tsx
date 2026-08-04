import type { Metadata } from "next"
import YellowFeverCertificateArticle from "@/components/YellowFeverCertificateArticle"
export const metadata: Metadata = {
  title: "Do You Need a Yellow Fever Certificate to Enter Kenya | Get Trip Go",
  description: "When Kenya requires a yellow fever certificate, and how to check based on your specific travel route.",
}
export default function YellowFeverCertificatePage() {
  return <YellowFeverCertificateArticle />
}
