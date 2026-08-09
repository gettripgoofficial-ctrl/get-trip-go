import type { Metadata } from "next"
import MyTripLoginPage from "@/components/MyTripLoginPage"

export const metadata: Metadata = {
  title: "Find Your Trip | Get Trip Go",
  description: "Enter your Booking ID and surname to view your Get Trip Go itinerary.",
}

export default function MyTripPage() {
  return <MyTripLoginPage />
}
