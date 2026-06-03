"use client";

import { useState } from "react";
import { useAdminAuth } from "@/components/AdminAuthContext";

export default function AdminLoginGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, login, logout } = useAdminAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!password.trim()) return;
    setLoading(true);
    setError("");

    // Small delay for UX feel
    setTimeout(() => {
      const success = login(password);
      if (!success) {
        setError("Incorrect password. Please try again.");
      }
      setLoading(false);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleLogin();
  };

  // ── Authenticated: render children + logout button ─────────────────────────
  if (isAuthenticated) {
    return (
      <div>
        {/* Thin admin bar */}
        <div className="bg-gray-900 text-white text-xs flex items-center justify-between px-6 py-2">
          <span>
            🔐 Admin mode —{" "}
            <span className="text-orange-400 font-semibold">Blog Editor</span>
          </span>
          <button
            onClick={logout}
            className="text-gray-400 hover:text-white transition-colors underline"
          >
            Sign out
          </button>
        </div>
        {children}
      </div>
    );
  }

  // ── Unauthenticated: show login screen ─────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-orange-400 to-blue-600" />

          <div className="px-8 py-10">
            {/* Logo / Title */}
            <div className="text-center mb-8">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">
                Get Trip Go
              </p>
              <h1 className="text-2xl font-extrabold text-gray-900">
                Admin Access
              </h1>
              <p className="text-gray-500 text-sm mt-2">
                Enter your password to access the blog editor
              </p>
            </div>

            {/* Password field */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter admin password"
                  autoFocus
                  className={`w-full border rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 transition ${
                    error
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-orange-400 focus:border-transparent"
                  }`}
                />
                {error && (
                  <p className="mt-1.5 text-red-500 text-xs font-medium">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleLogin}
                disabled={loading || !password.trim()}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-full transition-colors text-sm tracking-wide"
              >
                {loading ? "Verifying…" : "Enter Editor →"}
              </button>
            </div>

            {/* Hint */}
            <p className="text-center text-gray-400 text-xs mt-6">
              🔒 This page is restricted to site admins only.
            </p>
          </div>
        </div>

        {/* Back link */}
        <p className="text-center mt-5">
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
          >
            ← Back to homepage
          </a>
        </p>
      </div>
    </div>
  );
}