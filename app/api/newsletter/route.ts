import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    // 1. Add to Resend Audience
    await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    })

    // 2. Send welcome email
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GetTripGo <contact@gettripgo.com>",
        to: email,
        subject: "Welcome to GetTripGo — Your Journey Starts Here! ✈️",
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;background:#fff;">
            <img src="https://www.gettripgo.com/logo.png" alt="GetTripGo" style="height:40px;margin-bottom:24px;" />
            <h1 style="color:#1a56f0;font-size:24px;margin-bottom:8px;">Welcome aboard! 🎉</h1>
            <p style="color:#374151;font-size:16px;line-height:1.6;">
              Thank you for subscribing to GetTripGo. You're now part of a community of smart travelers who get the best deals first.
            </p>
            <p style="color:#374151;font-size:16px;line-height:1.6;">
              Here's what you can expect from us:
            </p>
            <ul style="color:#374151;font-size:15px;line-height:2;">
              <li>🏖️ Exclusive holiday packages & deals</li>
              <li>✈️ Group departure updates</li>
              <li>🌍 Destination guides & travel tips</li>
              <li>💰 Early bird offers before they go public</li>
            </ul>
            <a href="https://www.gettripgo.com" style="display:inline-block;margin-top:24px;padding:12px 28px;background:#1a56f0;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:15px;">
              Explore Packages →
            </a>
            <p style="color:#9ca3af;font-size:13px;margin-top:32px;">
              You received this because you subscribed at gettripgo.com.<br/>
              <a href="https://www.gettripgo.com" style="color:#9ca3af;">Unsubscribe</a>
            </p>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
