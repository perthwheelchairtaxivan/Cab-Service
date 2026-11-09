"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { BUSINESS_EMAIL } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Wheelchair Taxi",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    passengers: "1-4",
    notes: "",
  });

  const [hpEmail, setHpEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getWhatsAppMessage = () => {
    const lines = [
      `*New Quick Booking Enquiry*`,
      `• Name: ${formData.name || "Customer"}`,
      `• Phone: ${formData.phone || "Not specified"}`,
      `• Service: ${formData.service}`,
      formData.pickup ? `• Pickup: ${formData.pickup}` : null,
      formData.destination ? `• Destination: ${formData.destination}` : null,
      formData.date ? `• Date: ${formData.date} at ${formData.time || "TBA"}` : null,
      `• Passengers: ${formData.passengers}`,
      formData.notes ? `• Notes: ${formData.notes}` : null,
      ``,
      `Please provide fixed quote and vehicle availability.`,
    ].filter(Boolean);

    return `https://wa.me/61493252766?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please provide your name and phone number.");
      return;
    }

    setLoading(true);

    try {
      trackEvent("quote_submit", {
        service: formData.service,
        passengers: formData.passengers,
        source: "contact_quick_form",
      });

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: formData.service.toLowerCase().includes("wheelchair") ? "wheelchair" : "airport",
          name: formData.name,
          phone: formData.phone,
          email: BUSINESS_EMAIL,
          hp_email: hpEmail,
          pickupLocation: formData.pickup || "Perth",
          destination: formData.destination || "Perth",
          pickupDate: formData.date || new Date().toISOString().split("T")[0],
          pickupTime: formData.time || "12:00",
          wheelchairType: formData.service.toLowerCase().includes("wheelchair") ? "manual" : "none",
          staysSeated: true,
          babySeatCapsule: 0,
          babySeatChild: 0,
          babySeatBooster: 0,
          passengersCount: parseInt(formData.passengers, 10) || 4,
          luggageCount: 2,
          flightNumber: "",
          isReturnTrip: false,
          returnDate: "",
          returnTime: "",
          accessibilityNotes: formData.notes,
        }),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(json?.error || "Unable to send inquiry. Please use WhatsApp direct.");
      }

      setSubmitted(true);

      const targetUrl = json?.whatsappUrl || getWhatsAppMessage();
      if (typeof window !== "undefined") {
        window.location.href = targetUrl;
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission error.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-zinc-900 border-4 border-emerald-500 shadow-[8px_8px_0px_0px_#10b981] p-8 sm:p-10 text-center rounded-3xl">
        <div className="w-16 h-16 bg-emerald-500 text-black border-2 border-black flex items-center justify-center mx-auto mb-4 rounded-2xl shadow-[2px_2px_0px_0px_#000]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-xs font-black uppercase tracking-widest text-emerald-400 block mb-2">
          Enquiry Received
        </span>
        <h3 className="text-2xl font-black uppercase text-white mb-3">
          Thank you, {formData.name}!
        </h3>
        <p className="text-sm text-zinc-300 mb-6 leading-relaxed max-w-md mx-auto font-medium">
          Launching WhatsApp with your enquiry details... If WhatsApp didn't open automatically, click the button below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 border-2 border-black shadow-[4px_4px_0px_0px_#000] rounded-full transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Open in WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="px-6 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider border-2 border-zinc-600 rounded-full transition-all cursor-pointer"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border-2 sm:border-4 border-amber-400 shadow-[4px_4px_0px_0px_#facc15] sm:shadow-[8px_8px_0px_0px_#facc15] p-4 sm:p-8 rounded-2xl sm:rounded-3xl relative">
      
      {/* Form Header */}
      <div className="mb-6 pb-4 border-b-2 border-zinc-800 flex items-center justify-between">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-300 block mb-1">
            Secure Your Ride
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Quick Enquiry Form
          </h3>
        </div>
        <span className="text-[11px] font-black uppercase tracking-wider px-3.5 py-1 bg-emerald-500 text-black font-extrabold border-2 border-black shadow-[2px_2px_0px_0px_#000] rounded-full">
          Response &lt; 5m
        </span>
      </div>

      {/* Bot spam prevention honeypot (visually hidden) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact_hp_field">Do not fill this</label>
        <input
          id="contact_hp_field"
          type="text"
          value={hpEmail}
          onChange={(e) => setHpEmail(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {error && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-5 p-3.5 bg-rose-500/20 border-2 border-rose-500 flex items-center gap-2.5 text-xs font-bold text-rose-300"
        >
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-black uppercase tracking-wider text-white mb-1.5">
              Your Name <span className="text-amber-400">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-4 py-2.5 bg-white text-zinc-950 font-bold text-sm border-2 border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 rounded-md placeholder:text-zinc-400 focus:outline-none transition-all shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-xs font-black uppercase tracking-wider text-white mb-1.5">
              Phone Number <span className="text-amber-400">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+61 400 000 000"
              className="w-full px-4 py-2.5 bg-white text-zinc-950 font-bold text-sm border-2 border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 rounded-md placeholder:text-zinc-400 focus:outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Row 2: Service & Passengers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-service" className="block text-xs font-black uppercase tracking-wider text-white mb-1.5">
              Service Type
            </label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-white text-zinc-950 font-bold text-sm border-2 border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 rounded-md focus:outline-none transition-all shadow-sm cursor-pointer"
            >
              <option value="Wheelchair Taxi">Wheelchair Accessible Taxi</option>
              <option value="Medical Transport">Hospital &amp; NDIS Transport</option>
              <option value="Maxi Cab (Up to 10 Passengers)">Maxi Cab (Up to 10 Passengers)</option>
              <option value="Baby Seat Taxi">Baby Seat Taxi (Capsules/Boosters)</option>
              <option value="Airport Transfer">Airport Transfer (T1–T4)</option>
              <option value="Weddings & Events">Weddings, Tours &amp; Events</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-passengers" className="block text-xs font-black uppercase tracking-wider text-white mb-1.5">
              Passengers
            </label>
            <select
              id="contact-passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-white text-zinc-950 font-bold text-sm border-2 border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 rounded-md focus:outline-none transition-all shadow-sm cursor-pointer"
            >
              <option value="1-4">1 to 4 Passengers</option>
              <option value="5-7">5 to 7 Passengers</option>
              <option value="8-10">8 to 10 Passengers</option>
              <option value="Wheelchair + Companions">Wheelchair + Companions</option>
            </select>
          </div>
        </div>

        {/* Row 3: Pickup & Dropoff */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-pickup" className="block text-xs font-black uppercase tracking-wider text-white mb-1.5">
              Pickup Suburb / Airport
            </label>
            <input
              id="contact-pickup"
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="e.g. Perth Airport T1 or Subiaco"
              className="w-full px-4 py-2.5 bg-white text-zinc-950 font-bold text-sm border-2 border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 rounded-md placeholder:text-zinc-400 focus:outline-none transition-all shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="contact-destination" className="block text-xs font-black uppercase tracking-wider text-white mb-1.5">
              Destination Suburb
            </label>
            <input
              id="contact-destination"
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Fremantle, Joondalup, CBD"
              className="w-full px-4 py-2.5 bg-white text-zinc-950 font-bold text-sm border-2 border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 rounded-md placeholder:text-zinc-400 focus:outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Row 4: Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-date" className="block text-xs font-black uppercase tracking-wider text-white mb-1.5">
              Pickup Date
            </label>
            <input
              id="contact-date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-white text-zinc-950 font-bold text-sm border-2 border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 rounded-md focus:outline-none transition-all shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="contact-time" className="block text-xs font-black uppercase tracking-wider text-white mb-1.5">
              Approx. Time
            </label>
            <input
              id="contact-time"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-white text-zinc-950 font-bold text-sm border-2 border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 rounded-md focus:outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Row 5: Notes / Requirements */}
        <div>
          <label htmlFor="contact-notes" className="block text-xs font-black uppercase tracking-wider text-white mb-1.5">
            Special Requirements / Luggage Notes
          </label>
          <textarea
            id="contact-notes"
            name="notes"
            rows={2}
            value={formData.notes}
            onChange={handleChange}
            placeholder="e.g. Power wheelchair, 2 baby seats, flight QF80 arrival..."
            className="w-full px-4 py-2.5 bg-white text-zinc-950 font-bold text-sm border-2 border-zinc-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 rounded-md placeholder:text-zinc-400 focus:outline-none transition-all shadow-sm resize-none"
          />
        </div>

        {/* Submission Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black text-xs uppercase tracking-wider py-4 px-6 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000] transition-all cursor-pointer disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{loading ? "Sending..." : "Submit Quick Enquiry"}</span>
          </button>

          <a
            href={getWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider py-4 px-6 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000] transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </form>

      {/* Footer hint */}
      <div className="mt-5 pt-4 border-t-2 border-zinc-800 text-center">
        <p className="text-sm sm:text-base text-zinc-300 font-bold">
          Need multi-stop booking?{" "}
          <a 
            href="/enquire" 
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4 decoration-2 decoration-amber-400/60 hover:decoration-amber-300 font-black inline-flex items-center gap-1 transition-colors"
          >
            <span>Open Full Booking &rarr;</span>
          </a>
        </p>
      </div>

    </div>
  );
}
