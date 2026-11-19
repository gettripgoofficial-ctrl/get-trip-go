import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.EXCHANGERATE_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "Currency API key is not configured" }, { status: 503 })
  }

  const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`)
  if (!res.ok) {
    return NextResponse.json({ error: "Currency rate provider request failed" }, { status: 502 })
  }

  const data = await res.json()
  if (
    data.base_code !== "INR" ||
    !data.conversion_rates ||
    typeof data.conversion_rates !== "object" ||
    Array.isArray(data.conversion_rates)
  ) {
    return NextResponse.json({ error: "Currency rate provider returned invalid rates" }, { status: 502 })
  }

  return NextResponse.json({
    rates: data.conversion_rates,
    base: data.base_code,
  })
}