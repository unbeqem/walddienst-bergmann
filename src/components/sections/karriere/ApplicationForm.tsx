"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { sendApplicationMessage } from "@/lib/emailjs";

type Status = "idle" | "loading" | "success" | "error";

const positions = [
  "Forstwirt / Forstwirtin",
  "Baumpflege / Seilklettertechnik",
  "Maschinenführer (Mähraupe)",
  "Sonstige / Initiativbewerbung",
];

export function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: positions[0],
    message: "",
    consent: false,
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendApplicationMessage({
        name: `${form.firstName} ${form.lastName}`.trim(),
        recipient: form.email,
        phone: form.phone,
        position: form.position,
        message: form.message,
      });
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: positions[0],
        message: "",
        consent: false,
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-full border border-forest-900/15 bg-linen-50 px-5 py-3 text-ink-900 placeholder:text-ink-900/50 outline-none transition-colors focus:border-forest-600";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <select
        required
        value={form.position}
        onChange={handleChange("position")}
        className={inputClass}
      >
        {positions.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          type="text"
          placeholder="Vorname"
          value={form.firstName}
          onChange={handleChange("firstName")}
          className={inputClass}
        />
        <input
          required
          type="text"
          placeholder="Nachname"
          value={form.lastName}
          onChange={handleChange("lastName")}
          className={inputClass}
        />
      </div>

      <input
        required
        type="email"
        placeholder="E-Mail"
        value={form.email}
        onChange={handleChange("email")}
        className={inputClass}
      />
      <input
        type="tel"
        placeholder="Telefon"
        value={form.phone}
        onChange={handleChange("phone")}
        className={inputClass}
      />
      <textarea
        required
        placeholder="Kurze Vorstellung / Motivation"
        value={form.message}
        onChange={handleChange("message")}
        rows={5}
        className="w-full resize-none rounded-3xl border border-forest-900/15 bg-linen-50 px-5 py-3 text-ink-900 placeholder:text-ink-900/50 outline-none transition-colors focus:border-forest-600"
      />

      <p className="text-sm text-ink-900/70">
        Ihren Lebenslauf reichen Sie gerne im Anschluss per E-Mail nach.
      </p>

      <label className="flex items-start gap-2 text-sm text-ink-900/80">
        <input
          required
          type="checkbox"
          checked={form.consent}
          onChange={handleChange("consent")}
          className="mt-1"
        />
        Ich habe die{" "}
        <a href="/datenschutz" className="underline underline-offset-2">
          Datenschutzerklärung
        </a>{" "}
        gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung
        meiner Bewerbung einverstanden.
      </label>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest-600 px-6 py-3 font-medium text-linen-50 transition-colors hover:bg-forest-700 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={18} className="animate-spin" />}
        {status === "loading" ? "Wird gesendet…" : "Kurzbewerbung senden"}
      </motion.button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-forest-700"
        >
          <CheckCircle2 size={18} /> Vielen Dank für Ihre Bewerbung! Wir
          melden uns bei Ihnen.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-red-700"
        >
          <AlertCircle size={18} /> Da ist leider etwas schiefgelaufen. Bitte
          versuchen Sie es erneut oder schreiben Sie uns direkt eine E-Mail.
        </motion.p>
      )}
    </form>
  );
}
