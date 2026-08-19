import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(req: NextRequest) {
  try {
    const { bookingId, surname } = await req.json()

    if (!bookingId?.trim() || !surname?.trim()) {
      return NextResponse.json({ error: "Booking ID and surname required" }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin
      .from("bookings")
      .select("booking_id, traveller_name, package_name, travel_date, status, itinerary_summary")
      .ilike("booking_id", bookingId.trim())
      .ilike("surname", surname.trim())
      .maybeSingle()

    if (error) {
      console.error(error)
      return NextResponse.json({ error: "Lookup failed" }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json({ error: "not_found" }, { status: 404 })
    }

    const { data: documents } = await supabaseAdmin
      .from("booking_documents")
      .select("file_name, file_url, uploaded_at")
      .ilike("booking_id", bookingId.trim())
      .order("uploaded_at", { ascending: false })

    return NextResponse.json({ booking: data, documents: documents || [] })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
