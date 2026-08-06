"use client"
import { useState } from "react"

type Region = "All" | "Asia" | "Middle East" | "Europe" | "Americas" | "Africa" | "Oceania"
type Category = "All" | "Tourist" | "Business" | "Student" | "Medical"

type CountryVisa = {
  flag: string
  country: string
  region: Region
  visaType: string
  processing: string
  categories: Category[]
}

const countries: CountryVisa[] = [
  { flag: "TH", country: "Thailand", region: "Asia", visaType: "e-Visa / VOA", processing: "Same day - 3 days", categories: ["Tourist", "Medical"] },
  { flag: "VN", country: "Vietnam", region: "Asia", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "SG", country: "Singapore", region: "Asia", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist", "Business", "Medical"] },
  { flag: "MY", country: "Malaysia", region: "Asia", visaType: "e-Visa / eNTRI", processing: "2-4 days", categories: ["Tourist"] },
  { flag: "ID", country: "Indonesia (Bali)", region: "Asia", visaType: "Visa on Arrival", processing: "Same day - 2 days", categories: ["Tourist"] },
  { flag: "LK", country: "Sri Lanka", region: "Asia", visaType: "e-Visa (ETA)", processing: "1-3 days", categories: ["Tourist"] },
  { flag: "KH", country: "Cambodia", region: "Asia", visaType: "e-Visa", processing: "3 days", categories: ["Tourist"] },
  { flag: "NP", country: "Nepal", region: "Asia", visaType: "Visa on Arrival", processing: "Same day", categories: ["Tourist"] },
  { flag: "BT", country: "Bhutan", region: "Asia", visaType: "e-Permit", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "MV", country: "Maldives", region: "Asia", visaType: "Visa on Arrival (free)", processing: "Same day", categories: ["Tourist"] },
  { flag: "JP", country: "Japan", region: "Asia", visaType: "Sticker Visa", processing: "5-7 days", categories: ["Tourist", "Business"] },
  { flag: "KR", country: "South Korea", region: "Asia", visaType: "e-Visa / K-ETA", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "CN", country: "China", region: "Asia", visaType: "Sticker Visa", processing: "4-7 days", categories: ["Tourist", "Business"] },
  { flag: "HK", country: "Hong Kong", region: "Asia", visaType: "Visa-free (limited days)", processing: "N/A", categories: ["Tourist", "Business"] },
  { flag: "PH", country: "Philippines", region: "Asia", visaType: "Visa-free (limited days)", processing: "N/A", categories: ["Tourist"] },
  { flag: "AE", country: "UAE / Dubai", region: "Middle East", visaType: "e-Visa", processing: "3-4 days", categories: ["Tourist", "Business", "Medical"] },
  { flag: "SA", country: "Saudi Arabia", region: "Middle East", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist", "Business"] },
  { flag: "QA", country: "Qatar", region: "Middle East", visaType: "Visa on Arrival", processing: "Same day", categories: ["Tourist", "Business"] },
  { flag: "OM", country: "Oman", region: "Middle East", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "BH", country: "Bahrain", region: "Middle East", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "KW", country: "Kuwait", region: "Middle East", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "JO", country: "Jordan", region: "Middle East", visaType: "e-Visa / VOA", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "TR", country: "Turkey", region: "Middle East", visaType: "e-Visa", processing: "1-3 days", categories: ["Tourist", "Business", "Medical"] },
  { flag: "IL", country: "Israel", region: "Middle East", visaType: "e-Visa (ETA)", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "EU", country: "Schengen (Europe)", region: "Europe", visaType: "Sticker Visa", processing: "10-15 days", categories: ["Tourist", "Business", "Student"] },
  { flag: "GB", country: "United Kingdom", region: "Europe", visaType: "Sticker Visa", processing: "15-20 days", categories: ["Tourist", "Business", "Student"] },
  { flag: "CH", country: "Switzerland", region: "Europe", visaType: "Sticker Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "GE", country: "Georgia", region: "Europe", visaType: "Visa-free", processing: "N/A", categories: ["Tourist"] },
  { flag: "RU", country: "Russia", region: "Europe", visaType: "e-Visa", processing: "4-20 days", categories: ["Tourist"] },
  { flag: "US", country: "United States", region: "Americas", visaType: "Sticker Visa (Interview)", processing: "Varies by embassy slot", categories: ["Tourist", "Business", "Student"] },
  { flag: "CA", country: "Canada", region: "Americas", visaType: "Sticker Visa", processing: "15-30 days", categories: ["Tourist", "Student"] },
  { flag: "MX", country: "Mexico", region: "Americas", visaType: "e-Visa / Exempt with US or Schengen visa", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "BR", country: "Brazil", region: "Americas", visaType: "e-Visa", processing: "5-10 days", categories: ["Tourist"] },
  { flag: "EG", country: "Egypt", region: "Africa", visaType: "e-Visa", processing: "3-7 days", categories: ["Tourist"] },
  { flag: "MU", country: "Mauritius", region: "Africa", visaType: "Visa on Arrival", processing: "Same day", categories: ["Tourist"] },
  { flag: "SC", country: "Seychelles", region: "Africa", visaType: "Visa-free", processing: "N/A", categories: ["Tourist"] },
  { flag: "KE", country: "Kenya", region: "Africa", visaType: "e-Visa (eTA)", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "ZA", country: "South Africa", region: "Africa", visaType: "Sticker Visa", processing: "5-10 days", categories: ["Tourist"] },
  { flag: "MA", country: "Morocco", region: "Africa", visaType: "Sticker Visa", processing: "5-10 days", categories: ["Tourist"] },
  { flag: "AU", country: "Australia", region: "Oceania", visaType: "e-Visa (subclass 600)", processing: "15-30 days", categories: ["Tourist", "Student"] },
  { flag: "NZ", country: "New Zealand", region: "Oceania", visaType: "e-Visa (NZeTA)", processing: "10-20 days", categories: ["Tourist", "Student"] },
  { flag: "FJ", country: "Fiji", region: "Oceania", visaType: "Visa-free", processing: "N/A", categories: ["Tourist"] },
]

const regions: Region[] = ["All", "Asia", "Middle East", "Europe", "Americas", "Africa", "Oceania"]
const categories: Category[] = ["All", "Tourist", "Business", "Student", "Medical"]

const moreCountries: CountryVisa[] = [
  { flag: "AF", country: "Afghanistan", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BD", country: "Bangladesh", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BN", country: "Brunei", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "KZ", country: "Kazakhstan", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "KG", country: "Kyrgyzstan", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "LA", country: "Laos", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "MO", country: "Macau", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "MN", country: "Mongolia", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "MM", country: "Myanmar", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "PK", country: "Pakistan", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "TW", country: "Taiwan", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "TJ", country: "Tajikistan", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "TL", country: "Timor-Leste", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "TM", country: "Turkmenistan", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "UZ", country: "Uzbekistan", region: "Asia", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "IR", country: "Iran", region: "Middle East", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "IQ", country: "Iraq", region: "Middle East", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "LB", country: "Lebanon", region: "Middle East", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "PS", country: "Palestine", region: "Middle East", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SY", country: "Syria", region: "Middle East", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "YE", country: "Yemen", region: "Middle East", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "AL", country: "Albania", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "AD", country: "Andorra", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "AM", country: "Armenia", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "AT", country: "Austria", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist", "Business"] },
  { flag: "AZ", country: "Azerbaijan", region: "Europe", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "BY", country: "Belarus", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BE", country: "Belgium", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist", "Business"] },
  { flag: "BA", country: "Bosnia and Herzegovina", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BG", country: "Bulgaria", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "HR", country: "Croatia", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "CY", country: "Cyprus", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "CZ", country: "Czech Republic", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "DK", country: "Denmark", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "EE", country: "Estonia", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "FI", country: "Finland", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "FR", country: "France", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist", "Business", "Student"] },
  { flag: "DE", country: "Germany", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist", "Business", "Student"] },
  { flag: "GR", country: "Greece", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "HU", country: "Hungary", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "IS", country: "Iceland", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "IE", country: "Ireland", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist", "Student"] },
  { flag: "IT", country: "Italy", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist", "Business"] },
  { flag: "XK", country: "Kosovo", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "LV", country: "Latvia", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "LI", country: "Liechtenstein", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "LT", country: "Lithuania", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "LU", country: "Luxembourg", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "MT", country: "Malta", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "MD", country: "Moldova", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "MC", country: "Monaco", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "ME", country: "Montenegro", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "NL", country: "Netherlands", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist", "Business"] },
  { flag: "MK", country: "North Macedonia", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "NO", country: "Norway", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "PL", country: "Poland", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "PT", country: "Portugal", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "RO", country: "Romania", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SM", country: "San Marino", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "RS", country: "Serbia", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SK", country: "Slovakia", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "SI", country: "Slovenia", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "ES", country: "Spain", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist", "Business"] },
  { flag: "SE", country: "Sweden", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
  { flag: "UA", country: "Ukraine", region: "Europe", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "VA", country: "Vatican City", region: "Europe", visaType: "Schengen Visa", processing: "10-15 days", categories: ["Tourist"] },
]

const evenMoreCountries: CountryVisa[] = [
  { flag: "AG", country: "Antigua and Barbuda", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "AR", country: "Argentina", region: "Americas", visaType: "e-Visa / Exempt with US visa", processing: "5-10 days", categories: ["Tourist"] },
  { flag: "BS", country: "Bahamas", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BB", country: "Barbados", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BZ", country: "Belize", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BO", country: "Bolivia", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "CL", country: "Chile", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "CO", country: "Colombia", region: "Americas", visaType: "e-Visa / Exempt with US visa", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "CR", country: "Costa Rica", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "CU", country: "Cuba", region: "Americas", visaType: "Tourist Card", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "DM", country: "Dominica", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "DO", country: "Dominican Republic", region: "Americas", visaType: "e-Ticket", processing: "1-3 days", categories: ["Tourist"] },
  { flag: "EC", country: "Ecuador", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SV", country: "El Salvador", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "GD", country: "Grenada", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "GT", country: "Guatemala", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "GY", country: "Guyana", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "HT", country: "Haiti", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "HN", country: "Honduras", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "JM", country: "Jamaica", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "NI", country: "Nicaragua", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "PA", country: "Panama", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "PY", country: "Paraguay", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "PE", country: "Peru", region: "Americas", visaType: "e-Visa / Exempt with US visa", processing: "5-10 days", categories: ["Tourist"] },
  { flag: "KN", country: "Saint Kitts and Nevis", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "LC", country: "Saint Lucia", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "VC", country: "Saint Vincent and the Grenadines", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SR", country: "Suriname", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "TT", country: "Trinidad and Tobago", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "UY", country: "Uruguay", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "VE", country: "Venezuela", region: "Americas", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "DZ", country: "Algeria", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "AO", country: "Angola", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BJ", country: "Benin", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BW", country: "Botswana", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BF", country: "Burkina Faso", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "BI", country: "Burundi", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "CM", country: "Cameroon", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "CV", country: "Cape Verde", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "TD", country: "Chad", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "KM", country: "Comoros", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "CD", country: "Congo (DRC)", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "CG", country: "Congo (Republic)", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "DJ", country: "Djibouti", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "GQ", country: "Equatorial Guinea", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "ER", country: "Eritrea", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SZ", country: "Eswatini", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "ET", country: "Ethiopia", region: "Africa", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "GA", country: "Gabon", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "GM", country: "Gambia", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "GH", country: "Ghana", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "GN", country: "Guinea", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "GW", country: "Guinea-Bissau", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "CI", country: "Ivory Coast", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "LS", country: "Lesotho", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "LR", country: "Liberia", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "LY", country: "Libya", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "MG", country: "Madagascar", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "MW", country: "Malawi", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "ML", country: "Mali", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "MR", country: "Mauritania", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "MZ", country: "Mozambique", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "NA", country: "Namibia", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "NE", country: "Niger", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "NG", country: "Nigeria", region: "Africa", visaType: "e-Visa", processing: "5-7 days", categories: ["Tourist"] },
  { flag: "RW", country: "Rwanda", region: "Africa", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "ST", country: "Sao Tome and Principe", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SN", country: "Senegal", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SL", country: "Sierra Leone", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SO", country: "Somalia", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SS", country: "South Sudan", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SD", country: "Sudan", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "TZ", country: "Tanzania", region: "Africa", visaType: "e-Visa / VOA", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "TG", country: "Togo", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "TN", country: "Tunisia", region: "Africa", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "UG", country: "Uganda", region: "Africa", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "ZM", country: "Zambia", region: "Africa", visaType: "e-Visa / VOA", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "ZW", country: "Zimbabwe", region: "Africa", visaType: "e-Visa / VOA", processing: "3-5 days", categories: ["Tourist"] },
  { flag: "WS", country: "Samoa", region: "Oceania", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "SB", country: "Solomon Islands", region: "Oceania", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "TO", country: "Tonga", region: "Oceania", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "VU", country: "Vanuatu", region: "Oceania", visaType: "Varies", processing: "Contact us", categories: ["Tourist"] },
  { flag: "PG", country: "Papua New Guinea", region: "Oceania", visaType: "e-Visa", processing: "3-5 days", categories: ["Tourist"] },
]

const allCountries: CountryVisa[] = [...countries, ...moreCountries, ...evenMoreCountries]

export default function VisaCountryExplorer() {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState<Region>("All")
  const [category, setCategory] = useState<Category>("All")
  const [visibleCount, setVisibleCount] = useState(10)

  const filtered = allCountries.filter((c) => {
    const matchesSearch = c.country.toLowerCase().includes(search.toLowerCase())
    const matchesRegion = region === "All" || c.region === region
    const matchesCategory = category === "All" || c.categories.includes(category)
    return matchesSearch && matchesRegion && matchesCategory
  })

  const visible = filtered.slice(0, visibleCount)

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setVisibleCount(10) }}
          placeholder="Search country name..."
          className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2B3FDE]"
        />
        <select
          value={category}
          onChange={(e) => { setCategory(e.target.value as Category); setVisibleCount(10) }}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none bg-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat === "All" ? "All Visa Types" : cat + " Visa"}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {regions.map((r) => (
          <button
            key={r}
            onClick={() => { setRegion(r); setVisibleCount(10) }}
            className={
              "text-xs font-semibold px-4 py-2 rounded-full border transition-colors " +
              (region === r
                ? "bg-[#2B3FDE] text-white border-[#2B3FDE]"
                : "bg-white text-gray-500 border-gray-200 hover:border-[#2B3FDE]/40")
            }
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
        <span className="w-4 h-4 rounded-full bg-[#F0F3FF] flex items-center justify-center text-[9px]">i</span>
        Showing requirements for Indian passport holders. Other nationalities coming soon.
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-3 bg-[#F0F3FF] text-[11px] font-semibold uppercase tracking-wider text-gray-500">
          <span>Country</span>
          <span className="hidden sm:block">Visa Type</span>
          <span>Processing Time</span>
        </div>
        {visible.length === 0 && (
          <div className="px-6 py-10 text-center text-sm text-gray-400">
            No countries found. Try a different search or filter.
          </div>
        )}
        {visible.map((c, i) => (
          <div
            key={c.country}
            className={
              "grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-4 items-center" +
              (i !== visible.length - 1 ? " border-b border-gray-100" : "")
            }
          >
            <span className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 bg-gray-100 rounded px-1.5 py-0.5">{c.flag}</span>
              {c.country}
            </span>
            <span className="hidden sm:block text-sm text-gray-500">{c.visaType}</span>
            <span className="text-sm text-gray-500">{c.processing}</span>
          </div>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount((v) => v + 10)}
            className="text-sm font-semibold text-[#2B3FDE] border border-[#2B3FDE]/30 rounded-full px-6 py-2.5 hover:bg-[#F0F3FF] transition-colors"
          >
            Show 10 more ({filtered.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  )
}
