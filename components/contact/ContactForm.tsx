"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

// TODO: Replace with a real Formspree/Web3Forms endpoint before launch.
// e.g. Formspree: https://formspree.io/f/<form-id>
// See README.md "İletişim Formu" section.
const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink">
          {t("phone")}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-lg border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
      </div>

      <p className="text-xs text-slate">{t("consent")}</p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light disabled:opacity-60"
      >
        {t("submit")}
      </button>

      {status === "sent" && (
        <p className="text-sm text-emerald-700">✓</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Bir hata oluştu, lütfen tekrar deneyin.
        </p>
      )}
    </form>
  );
}
