"use client"
import FlightSearch from "./FlightSearch"
import HolidaySearch from "./HolidaySearch"
import HotelSearch from "./HotelSearch"
import ActivitySearch from "./ActivitySearch"
import TransferSearch from "./TransferSearch"
import ApartmentSearch from "./ApartmentSearch"

export default function SearchBox({ activeTab }: { activeTab: string }) {
  return (
    <div>
      {activeTab === "Flights" && <FlightSearch />}
      {activeTab === "Hotels" && <HotelSearch />}
      {activeTab === "Holidays" && <HolidaySearch />}
      {activeTab === "Activities" && <ActivitySearch />}
      {activeTab === "Transfers" && <TransferSearch />}
      {activeTab === "Apartments" && <ApartmentSearch />}
    </div>
  )
}