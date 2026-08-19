"use client";

import { useEffect, useState } from "react";
import { AdminAuthProvider } from "@/components/AdminAuthContext";
import AdminLoginGate from "@/components/AdminLoginGate";

interface Booking {
  id: string;
  booking_id: string;
  surname: string;
  traveller_name: string;
  package_name: string | null;
  travel_date: string | null;
  status: string;
  itinerary_summary: string | null;
  created_at: string;
}

function BookingsAdmin() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    bookingId: "",
    surname: "",
    travellerName: "",
    packageName: "",
    travelDate: "",
    status: "confirmed",
    itinerarySummary: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const loadBookings = async () => {
    setLoading(true);
    const res = await fetch("/api/bookings");
    if (res.ok) setBookings(await res.json());
    setLoading(false);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.bookingId.trim() || !form.surname.trim() || !form.travellerName.trim()) {
      setMessage("Booking ID, surname, and traveller name are required.");
      return;
    }
    setSubmitting(true);
    setMessage("");
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitting(false);
    if (res.ok) {
      setMessage("✓ Booking created.");
      setForm({
        bookingId: "",
        surname: "",
        travellerName: "",
        packageName: "",
        travelDate: "",
        status: "confirmed",
        itinerarySummary: "",
      });
      loadBookings();
    } else {
      const data = await res.json();
      setMessage(data.error || "Failed to create booking.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-6">Bookings Admin</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 mb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Booking ID *</label>
              <input
                type="text"
                value={form.bookingId}
                onChange={(e) => setForm({ ...form, bookingId: e.target.value })}
                placeholder="e.g. GTG482913"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Surname *</label>
              <input
                type="text"
                value={form.surname}
                onChange={(e) => setForm({ ...form, surname: e.target.value })}
                placeholder="As given at booking"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Traveller Name *</label>
              <input
                type="text"
                value={form.travellerName}
                onChange={(e) => setForm({ ...form, travellerName: e.target.value })}
                placeholder="Full name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Package Name</label>
              <input
                type="text"
                value={form.packageName}
                onChange={(e) => setForm({ ...form, packageName: e.target.value })}
                placeholder="e.g. Europe Complete Circle"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Travel Date</label>
              <input
                type="date"
                value={form.travelDate}
                onChange={(e) => setForm({ ...form, travelDate: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">Itinerary Summary</label>
            <textarea
              value={form.itinerarySummary}
              onChange={(e) => setForm({ ...form, itinerarySummary: e.target.value })}
              rows={3}
              placeholder="Optional short summary shown to the traveller"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none"
            />
          </div>
          {message && <p className="text-sm font-semibold text-gray-700">{message}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold px-6 py-2.5 rounded-lg text-sm"
          >
            {submitting ? "Saving…" : "Create Booking"}
          </button>
        </form>

        <h2 className="text-lg font-bold text-gray-900 mb-3">Existing Bookings ({bookings.length})</h2>
        {loading ? (
          <p className="text-gray-400 text-sm">Loading…</p>
        ) : bookings.length === 0 ? (
          <p className="text-gray-400 text-sm">No bookings yet.</p>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                <tr>
                  <th className="text-left px-4 py-2">Booking ID</th>
                  <th className="text-left px-4 py-2">Traveller</th>
                  <th className="text-left px-4 py-2">Package</th>
                  <th className="text-left px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-t border-gray-100">
                    <td className="px-4 py-2 font-mono text-xs">{b.booking_id.toUpperCase()}</td>
                    <td className="px-4 py-2">{b.traveller_name}</td>
                    <td className="px-4 py-2">{b.package_name || "—"}</td>
                    <td className="px-4 py-2 capitalize">{b.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookingsAdminPage() {
  return (
    <AdminAuthProvider>
      <AdminLoginGate>
        <BookingsAdmin />
      </AdminLoginGate>
    </AdminAuthProvider>
  );
}
