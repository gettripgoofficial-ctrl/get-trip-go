import crypto from "crypto"

const API_KEY = process.env.HOTELBEDS_API_KEY!
const SECRET = process.env.HOTELBEDS_SECRET!
const ENV = process.env.HOTELBEDS_ENV || "test"

const BASE_URL =
  ENV === "production"
    ? "https://api.hotelbeds.com/hotel-api/1.0"
    : "https://api.test.hotelbeds.com/hotel-api/1.0"

function generateSignature(): string {
  const timestamp = Math.floor(Date.now() / 1000)
  const raw = `${API_KEY}${SECRET}${timestamp}`
  console.log("API_KEY:", API_KEY)
  console.log("SECRET:", SECRET)
  console.log("Timestamp:", timestamp)
  console.log("Raw string:", raw)
  const signature = crypto.createHash("sha256").update(raw).digest("hex")
  console.log("Signature:", signature)
  return signature
}

export async function fetchHotelbeds(
  endpoint: string,
  options: {
    method?: "GET" | "POST" | "DELETE"
    body?: object
  } = {}
) {
  const { method = "GET", body } = options

  const headers: HeadersInit = {
    "Api-key": API_KEY,
    "X-Signature": generateSignature(),
    "Accept": "application/json",
    "Accept-Encoding": "gzip",
    "Content-Type": "application/json",
  }

  console.log("Calling:", `${BASE_URL}${endpoint}`)
  console.log("Headers:", headers)

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(`HotelBeds API error ${res.status}: ${error}`)
  }

  return res.json()
}