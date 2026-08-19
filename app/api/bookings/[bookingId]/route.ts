import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { isAdminRequest } from "@/lib/adminAuth"

export async function DELETE(req: NextRequest, { params }: { params: { bookingId: string } }) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data: docs } = await supabaseAdmin
    .from("booking_documents")
    .select("file_url")
    .ilike("booking_id", params.bookingId)

  if (docs && docs.length > 0) {
    const marker = "/booking-documents/"
    const paths = docs
      .map((d) => {
        const idx = d.file_url.indexOf(marker)
        return idx !== -1 ? d.file_url.slice(idx + marker.length) : null
      })
      .filter((p): p is string => p !== null)
    if (paths.length > 0) {
      await supabaseAdmin.storage.from("booking-documents").remove(paths)
    }
  }

  await supabaseAdmin.from("booking_documents").delete().ilike("booking_id", params.bookingId)

  const { error } = await supabaseAdmin
    .from("bookings")
    .delete()
    .ilike("booking_id", params.bookingId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
