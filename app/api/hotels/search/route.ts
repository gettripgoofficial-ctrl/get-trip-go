import { NextRequest, NextResponse } from "next/server"
import { fetchHotelbeds } from "@/lib/hotelbeds"

export async function POST(req: NextRequest) {
  try {
    const { checkIn, checkOut, destination, rooms, adults } = await req.json()

    if (!checkIn || !checkOut || !destination) {
      return NextResponse.json(
        { error: "checkIn, checkOut and destination are required" },
        { status: 400 }
      )
    }

    const data = await fetchHotelbeds("/hotels", {
      method: "POST",
      body: {
        stay: {
          checkIn,   // format: "2026-07-01"
          checkOut,  // format: "2026-07-05"
        },
        occupancies: [
          {
            rooms: rooms || 1,
            adults: adults || 2,
            children: 0,
          },
        ],
        destination: {
          code: destination, // HotelBeds destination code e.g. "MCB" for Mumbai
        },
        filter: {
          maxHotels: 20,
        },
      },
    })

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}