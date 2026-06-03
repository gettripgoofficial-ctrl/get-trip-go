import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.EXCHANGERATE_API_KEY
  const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`)
  const data = await res.json()

  return NextResponse.json({
    rates: data.conversion_rates,
    base: data.base_code,
  })
}