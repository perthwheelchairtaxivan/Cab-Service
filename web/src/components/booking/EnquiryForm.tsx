"use client";

import { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Plane, 
  Users, 
  Luggage, 
  ShieldCheck, 
  ArrowRight,
  Accessibility,
  Baby,
  Car,
  HeartPulse,
  Sparkles
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";

export interface FormDataState {
  serviceType: "wheelchair" | "airport" | "maxi-cab" | "baby-seat" | "medical" | "event";
  name: string;
  phone: string;
  email: string;
  pickupLocation: string;
  destination: string;
  pickupDate: string;
  pickupTime: string;
  isReturnTrip: boolean;
  returnDate: string;
  returnTime: string;
  passengersCount: number;
  luggageCount: number;
  wheelchairType: "none" | "manual" | "electric" | "scooter";
  staysSeated: boolean;
  rearFacingSeats: number;
  forwardFacingSeats: number;
  boosterSeats: number;
  flightNumber: string;
  accessibilityNotes: string;
}

const initialForm: FormDataState = {
  serviceType: "wheelchair",
  name: "",
  phone: "",
  email: "",
  pickupLocation: "",
  destination: "",
  pickupDate: "",
  pickupTime: "",
  isReturnTrip: false,
  returnDate: "",
  returnTime: "",
  passengersCount: 2,
  luggageCount: 2,
  wheelchairType: "manual",
  staysSeated: true,
  rearFacingSeats: 0,
  forwardFacingSeats: 0,
  boosterSeats: 0,
  flightNumber: "",
  accessibilityNotes: "",
};

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormDataState>(initialForm);
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successResult, setSuccessResult] = useState<{
    referenceId: string;
    message: string;
    whatsappUrl: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "number") {
      setFormData((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const setService = (serviceType: FormDataState["serviceType"]) => {
    setFormData((prev) => ({
      ...prev,
      serviceType,
      wheelchairType: serviceType === "wheelchair" || serviceType === "medical" ? "manual" : "none",
      staysSeated: serviceType === "wheelchair" || serviceType === "medical",
      forwardFacingSeats: serviceType === "baby-seat" ? 1 : prev.forwardFacingSeats,
    }));
  };

  const setWheelchair = (wheelchairType: FormDataState["wheelchairType"]) => {
    setFormData((prev) => ({
      ...prev,
      wheelchairType,
      staysSeated: wheelchairType !== "none",
    }));
  };

  const generateWhatsAppUrl = () => {
    const serviceLabels: Record<FormDataState["serviceType"], string> = {
      "wheelchair": "Wheelchair Accessible Taxi",
      "medical": "Medical & Hospital Transfer",
      "maxi-cab": "Maxi Cab (Up to 10 Passengers)",
      "baby-seat": "Taxi with Baby Car Seats",
      "airport": "Perth Airport Transfer",
      "event": "Weddings & Event Charter",
    };

    const wheelchairLabels: Record<FormDataState["wheelchairType"], string> = {
      "none": "No Wheelchair",
      "manual": "Manual Wheelchair",
      "electric": "Electric / Powerchair",
      "scooter": "Mobility Scooter",
    };

    const babySeatsList = [];
    if (formData.rearFacingSeats > 0) babySeatsList.push(`${formData.rearFacingSeats} Rear-Facing Capsule(s)`);
    if (formData.forwardFacingSeats > 0) babySeatsList.push(`${formData.forwardFacingSeats} Forward-Facing Seat(s)`);
    if (formData.boosterSeats > 0) babySeatsList.push(`${formData.boosterSeats} Booster Seat(s)`);

    const lines = [
      `*New Booking Enquiry (Perth Wheelchair Taxi Van)*`,
      `*Service:* ${serviceLabels[formData.serviceType]}`,
      `*Passenger Details:*`,
      `• Name: ${formData.name || "Customer"}`,
      `• Phone: ${formData.phone || "Not provided"}`,
      `*Trip Details:*`,
      `• Pickup: ${formData.pickupLocation || "TBA"}`,
      `• Destination: ${formData.destination || "TBA"}`,
      `• Date: ${formData.pickupDate || "Today/Tomorrow"}`,
      `• Time: ${formData.pickupTime || "TBA"}`,
      formData.flightNumber ? `• Flight No: ${formData.flightNumber}` : null,
      `*Party & Capacity:*`,
      `• Passengers: ${formData.passengersCount}`,
      `• Luggage: ${formData.luggageCount} bags`,
      formData.wheelchairType !== "none" ? `• Wheelchair: ${wheelchairLabels[formData.wheelchairType]} (${formData.staysSeated ? "Stays seated in chair" : "Seat transfer"})` : null,
      babySeatsList.length > 0 ? `• Baby Restraints: ${babySeatsList.join(", ")}` : null,
      formData.isReturnTrip ? `• Return Trip: ${formData.returnDate || "TBA"} at ${formData.returnTime || "TBA"}` : null,
      formData.accessibilityNotes ? `• Notes: ${formData.accessibilityNotes}` : null,
      ``,
      `Please confirm price and vehicle availability.`
    ].filter(Boolean);

    return `https://wa.me/61493252766?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Please provide your name and contact phone number.");
      return;
    }
    if (!formData.pickupLocation.trim() || !formData.destination.trim()) {
      setErrorMsg("Please specify both pickup location and destination.");
      return;
    }
    if (!formData.pickupDate || !formData.pickupTime) {
      setErrorMsg("Please specify pickup date and approximate time.");
      return;
    }

    setLoading(true);

    try {
      trackEvent("quote_submit", {
        service: formData.serviceType,
        passengers: formData.passengersCount,
        wheelchair: formData.wheelchairType,
      });

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, hp_email: honeypot }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to submit enquiry. Please use direct WhatsApp.");
      }

      const targetWhatsAppUrl = json.whatsappUrl || generateWhatsAppUrl();

      setSuccessResult({
        referenceId: json.referenceId,
        message: json.message,
        whatsappUrl: targetWhatsAppUrl,
      });

      // Automatically launch WhatsApp with pre-filled details
      if (typeof window !== "undefined") {
        window.location.href = targetWhatsAppUrl;
      }
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please message our driver via WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  if (successResult) {
    return (
      <div className="bg-zinc-900 border-4 border-amber-400 p-8 sm:p-12 shadow-[8px_8px_0px_0px_#facc15] text-center max-w-2xl mx-auto rounded-3xl text-white">
        <div className="w-16 h-16 bg-emerald-500 text-black border-2 border-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-[3px_3px_0px_0px_#000]">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="inline-block px-3 py-1 bg-amber-400 text-black font-black text-xs uppercase tracking-wider rounded-full mb-3">
          Booking Request Received
        </span>
        <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-2">
          Thank You, {formData.name}!
        </h2>
        <p className="text-zinc-300 text-sm mb-6 font-medium">
          Launching WhatsApp with your booking details... If WhatsApp didn't open automatically, click the button below.
        </p>

        <div className="bg-zinc-950 p-4 rounded-2xl border-2 border-zinc-800 text-xs font-mono mb-8 text-amber-400">
          Booking Reference ID: <strong className="text-white text-sm">{successResult.referenceId}</strong>
        </div>

        <div className="bg-zinc-950 p-6 rounded-2xl border-2 border-zinc-800 text-left text-sm space-y-3 mb-8">
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Pickup:</span>
            <span className="font-bold text-white">{formData.pickupLocation}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Destination:</span>
            <span className="font-bold text-white">{formData.destination}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Date &amp; Time:</span>
            <span className="font-bold text-white">{formData.pickupDate} at {formData.pickupTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Passengers / Luggage:</span>
            <span className="font-bold text-white">
              {formData.passengersCount} passengers, {formData.luggageCount} bags
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={successResult.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000] transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Open in WhatsApp (Instant Confirmation)</span>
          </a>
          <button
            onClick={() => {
              setSuccessResult(null);
              setFormData(initialForm);
            }}
            className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-full border border-zinc-700 transition-all cursor-pointer"
          >
            Submit Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 border-2 sm:border-4 border-amber-400 shadow-[4px_4px_0px_0px_#facc15] sm:shadow-[8px_8px_0px_0px_#facc15] p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl relative text-white"
    >
      {/* Header Bar */}
      <div className="border-b-2 border-zinc-800 pb-5 mb-6 sm:mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-amber-400 text-black text-xs font-black uppercase tracking-wider px-3.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] rounded-full mb-2">
            <Accessibility className="w-3.5 h-3.5" />
            Direct Owner &amp; Dispatch Booking
          </span>
          <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Secure Your Booking
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm mt-1 font-medium">
            Upfront transparent pricing &bull; Reliable airport pickups &bull; Immediate dispatch confirmation
          </p>
        </div>
      </div>

      {/* Bot spam protection honeypot (visually hidden) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="booking_hp_field">Do not fill this field</label>
        <input
          id="booking_hp_field"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMsg && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 p-4 rounded-xl bg-rose-500/20 border-2 border-rose-500 text-rose-300 flex items-center gap-3 text-sm font-bold"
        >
          <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Service Selector Tabs */}
      <div className="mb-8">
        <label className="block text-xs font-black uppercase tracking-wider text-amber-400 mb-2.5">
          Select Service Required
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
          {[
            { id: "wheelchair", label: "Wheelchair Taxi", icon: Accessibility },
            { id: "medical", label: "Medical Transfer", icon: HeartPulse },
            { id: "maxi-cab", label: "Up to 10 Passengers", icon: Users },
            { id: "baby-seat", label: "Taxi w/ Baby Seat", icon: Baby },
            { id: "airport", label: "Airport Transfer", icon: Plane },
            { id: "event", label: "Weddings / Events", icon: Sparkles },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setService(item.id as FormDataState["serviceType"])}
              className={`h-20 sm:h-22 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-wider border-2 transition-all flex flex-col items-center justify-center gap-1.5 text-center cursor-pointer ${
                formData.serviceType === item.id
                  ? "bg-amber-400 text-black border-black shadow-[2px_2px_0px_0px_#000]"
                  : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              <span className="leading-tight line-clamp-2">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Section 1: Trip Itinerary */}
      <div className="space-y-4 sm:space-y-5 mb-8">
        <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
          <span className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center text-[11px] font-black">1</span>
          <h3 className="text-xs font-black uppercase tracking-widest text-amber-400">
            Trip Itinerary
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="enquiry-pickupLocation" className="block text-xs font-black uppercase tracking-wider text-zinc-200 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              Pickup Location *
            </label>
            <input
              id="enquiry-pickupLocation"
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="e.g. Perth Airport Terminal 1, or Suburb Address"
              className="h-12 w-full px-4 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 focus:border-amber-400 focus:outline-none text-sm placeholder:text-zinc-500 placeholder:font-normal shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="enquiry-destination" className="block text-xs font-black uppercase tracking-wider text-zinc-200 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              Destination *
            </label>
            <input
              id="enquiry-destination"
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Fiona Stanley Hospital, Hotel, or Suburb"
              className="h-12 w-full px-4 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 focus:border-amber-400 focus:outline-none text-sm placeholder:text-zinc-500 placeholder:font-normal shadow-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="enquiry-pickupDate" className="block text-xs font-black uppercase tracking-wider text-zinc-200 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              Pickup Date *
            </label>
            <input
              id="enquiry-pickupDate"
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="h-12 w-full px-4 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 focus:border-amber-400 focus:outline-none text-sm shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="enquiry-pickupTime" className="block text-xs font-black uppercase tracking-wider text-zinc-200 mb-1.5 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              Pickup Time *
            </label>
            <input
              id="enquiry-pickupTime"
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="h-12 w-full px-4 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 focus:border-amber-400 focus:outline-none text-sm shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="enquiry-flightNumber" className="block text-xs font-black uppercase tracking-wider text-zinc-200 mb-1.5 flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-sky-400 shrink-0" />
              Flight Number (Optional)
            </label>
            <input
              id="enquiry-flightNumber"
              type="text"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={handleChange}
              placeholder="e.g. QF10, EK420"
              className="h-12 w-full px-4 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 focus:border-amber-400 focus:outline-none text-sm placeholder:text-zinc-500 placeholder:font-normal shadow-sm"
            />
          </div>
        </div>

        {/* Return Trip Checkbox */}
        <div className="pt-1">
          <label htmlFor="enquiry-isReturnTrip" className="inline-flex items-center gap-2.5 cursor-pointer text-sm font-bold text-zinc-200">
            <input
              id="enquiry-isReturnTrip"
              type="checkbox"
              name="isReturnTrip"
              checked={formData.isReturnTrip}
              onChange={handleChange}
              className="w-5 h-5 rounded text-amber-400 focus:ring-amber-400 cursor-pointer accent-amber-400"
            />
            <span>I need a return trip (Guaranteed return pickup)</span>
          </label>

          {formData.isReturnTrip && (
            <div className="mt-3 p-4 bg-zinc-950 border-2 border-zinc-800 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="enquiry-returnDate" className="block text-xs font-black uppercase text-zinc-400 mb-1.5">Return Date</label>
                <input
                  id="enquiry-returnDate"
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="h-11 w-full px-3.5 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 text-xs sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="enquiry-returnTime" className="block text-xs font-black uppercase text-zinc-400 mb-1.5">Return Time</label>
                <input
                  id="enquiry-returnTime"
                  type="time"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  className="h-11 w-full px-3.5 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 text-xs sm:text-sm"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section 2: Passengers & Capacity */}
      <div className="space-y-5 mb-8 border-t border-zinc-800 pt-7">
        <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
          <span className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center text-[11px] font-black">2</span>
          <h3 className="text-xs font-black uppercase tracking-widest text-amber-400">
            Passengers &amp; Luggage
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="enquiry-passengersCount" className="block text-xs font-black uppercase tracking-wider text-zinc-200 mb-1.5 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              Total Passengers (Up to 11)
            </label>
            <select
              id="enquiry-passengersCount"
              name="passengersCount"
              value={formData.passengersCount}
              onChange={handleChange}
              className="h-12 w-full px-4 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 focus:border-amber-400 outline-none text-sm shadow-sm cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Passenger" : "Passengers"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="enquiry-luggageCount" className="block text-xs font-black uppercase tracking-wider text-zinc-200 mb-1.5 flex items-center gap-1.5">
              <Luggage className="w-4 h-4 text-amber-400 shrink-0" />
              Luggage Pieces
            </label>
            <select
              id="enquiry-luggageCount"
              name="luggageCount"
              value={formData.luggageCount}
              onChange={handleChange}
              className="h-12 w-full px-4 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 focus:border-amber-400 outline-none text-sm shadow-sm cursor-pointer"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Suitcase / Large Bag" : "Suitcases / Large Bags"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Baby Seat Restraints Selector */}
        <div className="bg-zinc-950 rounded-2xl p-4 sm:p-5 border-2 border-zinc-800">
          <div className="flex items-center gap-2 mb-1.5">
            <Baby className="w-5 h-5 text-amber-400 shrink-0" />
            <h4 className="font-black text-white text-xs sm:text-sm uppercase tracking-wide">
              Need Child Restraints? (Safety Certified)
            </h4>
          </div>
          <p className="text-[11px] sm:text-xs text-zinc-400 mb-3.5 leading-relaxed">
            Seats are pre-installed and cleaned prior to pickup. Select required quantities:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label htmlFor="enquiry-rearFacingSeats" className="block text-[10px] sm:text-[11px] font-black uppercase text-zinc-300 mb-1">
                Rear-Facing Capsule (0–12m)
              </label>
              <select
                id="enquiry-rearFacingSeats"
                name="rearFacingSeats"
                value={formData.rearFacingSeats}
                onChange={handleChange}
                className="h-11 w-full px-3 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 text-xs sm:text-sm cursor-pointer"
              >
                <option value={0}>0 - None</option>
                <option value={1}>1 Capsule</option>
                <option value={2}>2 Capsules</option>
              </select>
            </div>

            <div>
              <label htmlFor="enquiry-forwardFacingSeats" className="block text-[10px] sm:text-[11px] font-black uppercase text-zinc-300 mb-1">
                Forward-Facing (1–4 yrs)
              </label>
              <select
                id="enquiry-forwardFacingSeats"
                name="forwardFacingSeats"
                value={formData.forwardFacingSeats}
                onChange={handleChange}
                className="h-11 w-full px-3 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 text-xs sm:text-sm cursor-pointer"
              >
                <option value={0}>0 - None</option>
                <option value={1}>1 Child Seat</option>
                <option value={2}>2 Child Seats</option>
                <option value={3}>3 Child Seats</option>
              </select>
            </div>

            <div>
              <label htmlFor="enquiry-boosterSeats" className="block text-[10px] sm:text-[11px] font-black uppercase text-zinc-300 mb-1">
                Booster Seat (4–8 yrs)
              </label>
              <select
                id="enquiry-boosterSeats"
                name="boosterSeats"
                value={formData.boosterSeats}
                onChange={handleChange}
                className="h-11 w-full px-3 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 text-xs sm:text-sm cursor-pointer"
              >
                <option value={0}>0 - None</option>
                <option value={1}>1 Booster</option>
                <option value={2}>2 Boosters</option>
                <option value={3}>3 Boosters</option>
              </select>
            </div>
          </div>
        </div>

        {/* Wheelchair & Accessibility Section */}
        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-amber-400 mb-2">
            Wheelchair or Mobility Device:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-3">
            {[
              { id: "manual", label: "Manual Chair" },
              { id: "electric", label: "Power / Electric" },
              { id: "scooter", label: "Mobility Scooter" },
              { id: "none", label: "No Wheelchair" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setWheelchair(item.id as FormDataState["wheelchairType"])}
                className={`h-11 flex items-center justify-center px-3 rounded-xl text-xs font-black uppercase tracking-wider border-2 transition-all text-center cursor-pointer ${
                  formData.wheelchairType === item.id
                    ? "bg-amber-400 text-black border-black shadow-[2px_2px_0px_0px_#000]"
                    : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {formData.wheelchairType !== "none" && (
            <div className="bg-zinc-950 p-4 rounded-xl border-2 border-zinc-800 flex items-start gap-3.5">
              <input
                type="checkbox"
                id="staysSeated"
                name="staysSeated"
                checked={formData.staysSeated}
                onChange={handleChange}
                className="w-5 h-5 rounded text-amber-400 focus:ring-amber-400 mt-0.5 cursor-pointer accent-amber-400 shrink-0"
              />
              <label htmlFor="staysSeated" className="cursor-pointer">
                <span className="block text-sm font-bold text-white">
                  Passenger stays seated in wheelchair during trip
                </span>
                <span className="block text-xs text-zinc-400 mt-0.5">
                  Our vehicle will deploy the ramp or lift and lock the wheelchair securely with certified restraints and safety harnesses.
                </span>
              </label>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="enquiry-accessibilityNotes" className="block text-xs font-black uppercase tracking-wider text-zinc-200 mb-1.5">
            Special Requests or Mobility Notes (Optional)
          </label>
          <textarea
            id="enquiry-accessibilityNotes"
            name="accessibilityNotes"
            value={formData.accessibilityNotes}
            onChange={handleChange}
            rows={2}
            placeholder="e.g. Extra-wide powerchair, assistance needed from hospital lobby, pram and surfboards on board..."
            className="w-full px-4 py-3 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 focus:border-amber-400 focus:outline-none text-sm placeholder:text-zinc-500 placeholder:font-normal shadow-sm resize-none"
          />
        </div>
      </div>

      {/* Section 3: Passenger Contact Details */}
      <div className="space-y-5 mb-8 border-t border-zinc-800 pt-7">
        <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
          <span className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center text-[11px] font-black">3</span>
          <h3 className="text-xs font-black uppercase tracking-widest text-amber-400">
            Contact Details
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="enquiry-name" className="block text-xs font-black uppercase tracking-wider text-zinc-200 mb-1.5 flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-400 shrink-0" />
              Full Name *
            </label>
            <input
              id="enquiry-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="h-12 w-full px-4 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 focus:border-amber-400 focus:outline-none text-sm placeholder:text-zinc-500 placeholder:font-normal shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="enquiry-phone" className="block text-xs font-black uppercase tracking-wider text-zinc-200 mb-1.5 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              Phone / WhatsApp Number *
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+61 400 000 000"
              className="h-12 w-full px-4 rounded-xl bg-white text-zinc-950 font-bold border-2 border-zinc-300 focus:border-amber-400 focus:outline-none text-sm placeholder:text-zinc-500 placeholder:font-normal shadow-sm"
              required
            />
          </div>
        </div>
      </div>

      {/* Submission Button */}
      <div className="pt-4 border-t-2 border-zinc-800">
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-black uppercase tracking-wider py-4 px-6 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000] transition-all cursor-pointer disabled:opacity-50 text-sm"
        >
          {loading ? (
            <span>Processing Enquiry...</span>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Confirm &amp; Send Booking Enquiry</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Zero Advance Payment Required
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Guaranteed Fixed Quote
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          WA Dept of Transport Licensed
        </span>
      </div>
    </form>
  );
}
