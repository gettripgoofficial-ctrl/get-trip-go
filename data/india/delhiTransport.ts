export type TransportOption = {
  key: "metro" | "taxi" | "app" | "auto" | "private"
  name: string
  text: string
}

export const delhiTransportIntro = "Delhi has several transportation options for tourists."

export const delhiTransport: TransportOption[] = [
  {
    key: "metro",
    name: "Delhi Metro",
    text: "One of the most convenient ways to travel around the city. The metro connects many residential, commercial and tourist areas, including important airport connections.",
  },
  {
    key: "taxi",
    name: "Private taxis",
    text: "Useful for comfortable point-to-point travel and sightseeing.",
  },
  {
    key: "app",
    name: "App-based cabs",
    text: "Travellers can use supported ride-hailing applications to arrange local transportation.",
  },
  {
    key: "auto",
    name: "Auto-rickshaws",
    text: "A traditional and convenient option for shorter distances. Confirm the fare or use an appropriate metered or app-based service.",
  },
  {
    key: "private",
    name: "Private sightseeing cars",
    text: "International tourists travelling with families or in groups may prefer an air-conditioned vehicle with a driver for a full-day sightseeing experience.",
  },
]

export const delhiTransportTip =
  "For visitors with limited time, a private sightseeing vehicle can make it easier to explore multiple attractions in one day."
