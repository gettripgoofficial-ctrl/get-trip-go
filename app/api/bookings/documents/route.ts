import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { isAdminRequest } from "@/lib/adminAuth"

export async function POST(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const formData = await req.formData()
  const file = formData.get("file") as File | null
  const bookingId = formData.get("bookingId") as string | null

  if (!file || !bookingId?.trim()) {
    return NextResponse.json({ error: "File and booking ID are required" }, { status: 400 })
  }

  const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/webp"]
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: "Only PDF, JPG, PNG, or WEBP files are allowed" }, { status: 400 })
  }

  const maxSize = 10 * 1024 * 1024 // 10MB
  if (file.size > maxSize) {
    return NextResponse.json({ error: "File must be under 10MB" }, { status: 400 })
  }

  const ext = file.name.split(".").pop()
  const safeName = file.name
    .replace(/\.[^/.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
  const storedFileName = `${bookingId.trim()}/${Date.now()}-${safeName}.${ext}`

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const { error: uploadError } = await supabaseAdmin.storage
    .from("booking-documents")
    .upload(storedFileName, buffer, {
      contentType: file.type,
      upsert: false,
    })

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 })
  }

  const { data: publicUrlData } = supabaseAdmin.storage
    .from("booking-documents")
    .getPublicUrl(storedFileName)

  const { data, error } = await supabaseAdmin
    .from("booking_documents")
    .insert({
      booking_id: bookingId.trim(),
      file_name: file.name,
      file_url: publicUrlData.publicUrl,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, document: data })
}

export async function GET(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const bookingId = req.nextUrl.searchParams.get("bookingId")
  if (!bookingId) {
    return NextResponse.json({ error: "bookingId query param required" }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from("booking_documents")
    .select("*")
    .ilike("booking_id", bookingId)
    .order("uploaded_at", { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
