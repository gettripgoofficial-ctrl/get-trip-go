import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { isAdminRequest } from "@/lib/adminAuth"

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data: doc, error: fetchError } = await supabaseAdmin
    .from("booking_documents")
    .select("file_url")
    .eq("id", params.id)
    .single()

  if (fetchError || !doc) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 })
  }

  const marker = "/booking-documents/"
  const idx = doc.file_url.indexOf(marker)
  if (idx !== -1) {
    const storagePath = doc.file_url.slice(idx + marker.length)
    await supabaseAdmin.storage.from("booking-documents").remove([storagePath])
  }

  const { error: deleteError } = await supabaseAdmin
    .from("booking_documents")
    .delete()
    .eq("id", params.id)

  if (deleteError) {
    return NextResponse.json({ error: deleteError.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
