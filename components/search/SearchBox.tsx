"use client"

import FlightSearch   from "./FlightSearch"
import HotelSearch    from "./HotelSearch"
import HolidaySearch  from "./HolidaySearch"
import ActivitySearch from "./ActivitySearch"
import TransferSearch from "./TransferSearch"
import { SearchBoxProps } from "./searchUtils"

export default function SearchBox({ activeTab }: SearchBoxProps) {
  switch (activeTab) {
    case "Flights":    return <FlightSearch />
    case "Hotels":     return <HotelSearch />
    case "Holidays":   return <HolidaySearch />
    case "Activities": return <ActivitySearch />
    case "Transfers":  return <TransferSearch />
    default:           return null
  }
}