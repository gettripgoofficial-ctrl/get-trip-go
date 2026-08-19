"use client";

import React, { useEffect, useState } from "react";
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

interface BookingDocument {
  id: string;
  booking_id: string;
  file_name: string;
  file_url: string;
  uploaded_at: string;
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
  const [expandedBooking, setExpandedBooking] = useState<string | null>(null);
  const [docsByBooking, setDocsByBooking] = useState<Record<string, BookingDocument[]>>({});
  const [uploadingFor, setUploadingFor] = useState<string | null>(null);

  const loadBookings = async () => {
    setLoading(true);
    const res = await fetch("/api/bookings");
    if (res.ok) setBookings(await res.json());
    setLoading(false);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const loadDocuments = async (bookingId: string) => {
    const res = await fetch(`/api/bookings/documents?bookingId=${encodeURIComponent(bookingId)}`);
    if (res.ok) {
      const docs = await res.json();
      setDocsByBooking((prev) => ({ ...prev, [bookingId]: docs }));
    }
  };

  const toggleExpand = (bookingId: string) => {
    if (expandedBooking === bookingId) {
      setExpandedBooking(null);
    } else {
      setExpandedBooking(bookingId);
      if (!docsByBooking[bookingId]) loadDocuments(bookingId);
    }
  };

  const handleFileUpload = async (bookingId: string, file: File) => {
    setUploadingFor(bookingId);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("bookingId", bookingId);
    const res = await fetch("/api/bookings/documents", { method: "POST", body: fd });
    setUploadingFor(null);
    if (res.ok) {
      loadDocuments(bookingId);
    } else {
      const data = await res.json();
      alert(data.error || "Upload failed");
    }
  };

  const handleDeleteDocument = async (bookingId: string, docId: string) => {
    if (!confirm("Delete this document?")) return;
    const res = await fetch(`/api/bookings/documents/${docId}`, { method: "DELETE" });
    if (res.ok) {
      loadDocuments(bookingId);
    } else {
      alert("Failed to delete document.");
    }
  };

  const handleDeleteBooking = async (bookingId: string) => {
    if (!confirm(`Delete booking ${bookingId.toUpperCase()} and all its documents? This cannot be undone.`)) return;
    const res = await fetch(`/api/bookings/${bookingId}`, { method: "DELETE" });
    if (res.ok) {
      setExpandedBooking(null);
      loadBookings();
    } else {
      alert("Failed to delete booking.");
    }
  };

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
                  <React.Fragment key={b.id}>
                    <tr
                      key={b.id}
                      className="border-t border-gray-100 cursor-pointer hover:bg-gray-50"
                      onClick={() => toggleExpand(b.booking_id)}
                    >
                      <td className="px-4 py-2 font-mono text-xs">{b.booking_id.toUpperCase()}</td>
                      <td className="px-4 py-2">{b.traveller_name}</td>
                      <td className="px-4 py-2">{b.package_name || "—"}</td>
                      <td className="px-4 py-2 capitalize">{b.status}</td>
                    </tr>
                    {expandedBooking === b.booking_id && (
                      <tr key={`${b.id}-docs`} className="border-t border-gray-100 bg-gray-50">
                        <td colSpan={4} className="px-4 py-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                      <button
                                onClick={() => handleDeleteBooking(b.booking_id)}
                                className="text-xs font-bold text-red-600 hover:text-red-700 underline"
                              >
                                Delete Booking
                              </button>
                            </div>
                            <div className="flex items-center gap-3">
                              <label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                                Upload Document
                              </label>
                              <input
                                type="file"
                                accept="application/pdf,image/jpeg,image/png,image/webp"
                                disabled={uploadingFor === b.booking_id}
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) handleFileUpload(b.booking_id, file);
                                  e.target.value = "";
                                }}
                                className="text-xs"
                              />
                              {uploadingFor === b.booking_id && (
                                <span className="text-xs text-gray-400">Uploading…</span>
                              )}
                            </div>
                            {docsByBooking[b.booking_id]?.length ? (
                              <ul className="space-y-1">
                                {docsByBooking[b.booking_id].map((doc) => (
                                  <li key={doc.id} className="flex items-center gap-2 text-sm">
                                    <a
                                      href={doc.file_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 underline"
                                    >
                                      {doc.file_name}
                                    </a>
                                    <span className="text-xs text-gray-400">
                                      {new Date(doc.uploaded_at).toLocaleDateString("en-IN")}
                                    </span>
                                    <button
                                      onClick={() => handleDeleteDocument(b.booking_id, doc.id)}
                                      className="text-xs font-bold text-red-500 hover:text-red-700"
                                    >
                                      Remove
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-xs text-gray-400">No documents uploaded yet.</p>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
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
