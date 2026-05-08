"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  detail: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const updateField =
    (field: keyof typeof initialForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent("HKM Mimarlık görüşme talebi");
    const body = encodeURIComponent(
      [
        "Merhaba HKM Mimarlık,",
        "",
        "Web siteniz üzerinden görüşme talebi oluşturmak istiyorum.",
        "",
        `Ad Soyad: ${form.name}`,
        `Telefon: ${form.phone}`,
        `E-posta: ${form.email}`,
        "",
        "Proje Detayı:",
        form.detail,
      ].join("\n"),
    );

    window.location.href = `mailto:info@hkmmimarlik.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-header">
        <p className="contact-label text-[var(--contact-primary)]">
          Görüşme Talebi
        </p>
        <h2 className="contact-headline-sm text-[var(--contact-on-surface)]">
          Proje bilgilerinizi paylaşın.
        </h2>
      </div>

      <label className="contact-field">
        <span>Ad Soyad</span>
        <input
          required
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={updateField("name")}
          placeholder="Adınız ve soyadınız"
        />
      </label>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className="contact-field">
          <span>Telefon</span>
          <input
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={updateField("phone")}
            placeholder="+90"
          />
        </label>

        <label className="contact-field">
          <span>E-posta</span>
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={updateField("email")}
            placeholder="ornek@mail.com"
          />
        </label>
      </div>

      <label className="contact-field">
        <span>Proje Detayı</span>
        <textarea
          required
          rows={5}
          value={form.detail}
          onChange={updateField("detail")}
          placeholder="Arsa, konut, villa, iç mekan veya danışmanlık ihtiyacınızı kısaca anlatın."
        />
      </label>

      <button type="submit" className="contact-submit">
        Görüşme Talebi Gönder
        <span aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </button>
    </form>
  );
}
