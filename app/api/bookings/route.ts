import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { isAdminRequest } from "@/lib/adminAuth"

export async function POST(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()
  const { bookingId, surname, travellerName, packageName, travelDate, status, itinerarySummary } = body

  if (!bookingId?.trim() || !surname?.trim() || !travellerName?.trim()) {
    return NextResponse.json({ error: "Booking ID, surname, and traveller name are required" }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .insert({
      booking_id: bookingId.trim(),
      surname: surname.trim(),
      traveller_name: travellerName.trim(),
      package_name: packageName || null,
      travel_date: travelDate || null,
      status: status || "confirmed",
      itinerary_summary: itinerarySummary || null,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, booking: data })
}

export async function GET(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
