import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, date, travelers, message, packageName } = await req.json()
    const apiKey = process.env.RESEND_API_KEY

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GetTripGo Enquiry <contact@gettripgo.com>",
        to: "contact@gettripgo.com",
        subject: `New Enquiry: ${packageName || "Travel Package"}`,
        html: `<div style="font-family:sans-serif;padding:24px;"><h2 style="color:#1a56f0;">New Enquiry 🌍</h2><p><b>Package:</b> ${packageName || "General"}</p><p><b>Name:</b> ${name}</p><p><b>Phone:</b> ${phone}</p><p><b>Email:</b> ${email || "Not provided"}</p><p><b>Date:</b> ${date || "Not specified"}</p><p><b>Travelers:</b> ${travelers}</p><p><b>Message:</b> ${message || "None"}</p></div>`,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
