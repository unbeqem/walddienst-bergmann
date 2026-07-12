"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContactMessage } from "@/lib/emailjs";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendContactMessage({
        name: form.name,
        recipient: form.email,
        message: form.message,
        phone: form.phone,
      });
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-full border border-linen-50/30 bg-transparent px-5 py-3 text-linen-50 placeholder:text-linen-50/60 outline-none transition-colors focus:border-linen-50";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="font-display text-2xl text-linen-50">
        Kontaktieren Sie uns
      </h3>

      <input
        required
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange("name")}
        className={inputClass}
      />
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
        placeholder="Nachricht"
        value={form.message}
        onChange={handleChange("message")}
        rows={5}
        className="w-full resize-none rounded-3xl border border-linen-50/30 bg-transparent px-5 py-3 text-linen-50 placeholder:text-linen-50/60 outline-none transition-colors focus:border-linen-50"
      />

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-timber-600 px-6 py-3 font-medium text-linen-50 transition-colors hover:bg-timber-700 disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={18} className="animate-spin" />}
        {status === "loading" ? "Wird gesendet…" : "Senden"}
      </motion.button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-linen-50"
        >
          <CheckCircle2 size={18} /> Vielen Dank! Ihre Nachricht wurde
          erfolgreich versandt.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-red-300"
        >
          <AlertCircle size={18} /> Da ist leider etwas schiefgelaufen. Bitte
          versuchen Sie es erneut oder rufen Sie uns direkt an.
        </motion.p>
      )}
    </form>
  );
}
