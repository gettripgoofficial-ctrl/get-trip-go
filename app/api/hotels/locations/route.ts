import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get("query")?.trim()

  if (!query || query.length < 2) {
    return NextResponse.json(
      { error: "query must be at least 2 characters" },
      { status: 400 }
    )
  }

  try {
    const res = await fetch(
      `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=10&lang=en`,
      { headers: { "Accept": "application/json" } }
    )

    if (!res.ok) {
      return NextResponse.json({ destinations: [] })
    }

    const data = await res.json()

    const destinations = (data.features ?? [])
      .filter((f: any) => {
        const type = f.properties?.type
        return ["city", "town", "village", "district", "locality", "airport"].includes(type)
      })
      .map((f: any) => {
        const p = f.properties
        const name = p.city || p.name || p.locality || ""
        const country = p.country || ""
        const countryCode = p.countrycode?.toUpperCase() || ""
        const state = p.state || ""

        return {
          code: countryCode,
          name,
          country,
          state,
          countryCode,
          display: state ? `${name}, ${state}, ${country}` : `${name}, ${country}`,
        }
      })
      .filter((d: any) => d.name.length > 0)
      .reduce((acc: any[], curr: any) => {
        const exists = acc.find((d) => d.display === curr.display)
        if (!exists) acc.push(curr)
        return acc
      }, [])
      .slice(0, 8)

    return NextResponse.json({ destinations })
  } catch (err) {
    console.error("Photon API error:", err)
    return NextResponse.json({ destinations: [] })
  }
}