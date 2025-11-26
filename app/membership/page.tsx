"use client";

import { useState } from "react";
import Link from "next/link";

export default function MembershipPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    membershipType: "standard",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    // basic client-side validation
    if (!form.fullName.trim() || !form.email.trim()) {
      setMessage({
        type: "error",
        text: "Please provide your name and email.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(err?.error || "Failed to register");
      }

      setMessage({
        type: "success",
        text: "Registration successful. We'll be in touch shortly.",
      });
      setForm({
        fullName: "",
        email: "",
        phone: "",
        membershipType: "standard",
        notes: "",
      });
    } catch (err: any) {
      setMessage({ type: "error", text: err?.message || "Submission failed." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-luxury-dark">
            Become a Member
          </h1>
          <p className="text-luxury-text mt-2">
            Register to enjoy personalized concierge services and member
            benefits.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm rounded-sm p-8 space-y-4 border border-cream-200"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              required
              className="w-full border px-3 py-2 rounded-sm"
              placeholder="Jane Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
                className="w-full border px-3 py-2 rounded-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full border px-3 py-2 rounded-sm"
                placeholder="+1 555 555 5555"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Membership type
            </label>
            <select
              value={form.membershipType}
              onChange={(e) => update("membershipType", e.target.value)}
              className="w-full border px-3 py-2 rounded-sm"
            >
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="corporate">Corporate</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Notes / Special requests
            </label>
            <textarea
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              className="w-full border px-3 py-2 rounded-sm"
              rows={4}
              placeholder="Any preferences or important details..."
            />
          </div>

          {message && (
            <div
              className={
                message.type === "success" ? "text-green-600" : "text-red-600"
              }
            >
              {message.text}
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-gold-500 text-white px-6 py-3 rounded-sm font-medium hover:bg-gold-600 transition-colors"
            >
              {loading ? "Submitting..." : "Register"}
            </button>
            <Link href="/" className="text-luxury-text hover:underline">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
