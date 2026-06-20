"use client";

import { useI18n } from "@/lib/i18n-context";
import { useState } from "react";

export default function PressePage() {
  const { t, locale } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      locale === "fr" ? "Proposition de projet : Frame Production" : "Project proposal: Frame Production"
    );
    const body = encodeURIComponent(
      `Nom : ${form.name}\nOrganisation : ${form.org}\nEmail : ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:contact@frameproduction.fr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-16 px-6 md:px-12">
      <div style={{ maxWidth: "720px", margin: "0 auto 2rem" }}>
        <p className="text-sm uppercase tracking-widest text-red mb-4 font-medium">
          {t.nav.press}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-6">
          {t.press.title}
        </h1>
        <p className="text-lg text-ink/70 leading-relaxed">{t.press.lead}</p>
      </div>

      <div style={{ maxWidth: "720px", margin: "0 auto" }} className="space-y-10">

        {/* Contact presse */}
        <section className="animate-fade-in">
          <h2 className="font-display text-2xl text-ink mb-6 border-b border-ink/10 pb-4">
            {t.press.contactLabel}
          </h2>
          <div className="space-y-3 text-ink/70">
            <p>
              <span className="text-ink font-semibold">Jérôme Lévy</span>
              <br />
              {locale === "fr" ? "Fondateur & producteur" : "Founder & producer"}
            </p>
            <p>
              <a
                href="mailto:jerome.levy@frameproduction.fr"
                className="hover:text-red transition-colors"
              >
                jerome.levy@frameproduction.fr
              </a>
            </p>
            <p>
              <a href="tel:+33610846946" className="hover:text-red transition-colors">
                +33 6 10 84 69 46
              </a>
            </p>
          </div>
        </section>

        {/* Ressources */}
        <section className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          <h2 className="font-display text-2xl text-ink mb-6 border-b border-ink/10 pb-4">
            {t.press.resourcesLabel}
          </h2>
          <ul className="space-y-4">
            {[
              {
                label: locale === "fr" ? "Dossier de presse : Marseille, le mythe du rêve hollywoodien" : "Press kit: Marseille, the Hollywood dream myth",
                note: locale === "fr" ? "Sur demande" : "On request",
              },
              {
                label: locale === "fr" ? "Biographie de Jérôme Lévy" : "Jérôme Lévy biography",
                note: locale === "fr" ? "Sur demande" : "On request",
              },
              {
                label: locale === "fr" ? "Logos & visuels Frame Production" : "Frame Production logos & visuals",
                note: locale === "fr" ? "Sur demande" : "On request",
              },
            ].map((r, i) => (
              <li key={i} className="flex items-start justify-between gap-4 py-3 border-b border-ink/5">
                <span className="text-ink/80">{r.label}</span>
                <span className="text-xs text-ink/40 uppercase tracking-wide whitespace-nowrap pt-0.5">
                  {r.note}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-ink/50 mt-4 italic">
            {locale === "fr" ? "Pour toute demande de ressources, contactez " : "For any resource request, contact "}
            <a href="mailto:contact@frameproduction.fr" className="hover:text-red transition-colors">
              contact@frameproduction.fr
            </a>
          </p>
        </section>

        {/* Formulaire de soumission */}
        <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h2 className="font-display text-2xl text-ink mb-2 border-b border-ink/10 pb-4">
            {t.press.submitTitle}
          </h2>
          <p className="text-ink/60 mb-8 mt-4">{t.press.submitLead}</p>

          {submitted ? (
            <div className="bg-sky/20 rounded-2xl p-8 text-center">
              <p className="text-ink font-semibold text-lg mb-1">
                {locale === "fr" ? "Votre messagerie s'est ouverte." : "Your email client has opened."}
              </p>
              <p className="text-ink/60 text-sm">
                {locale === "fr"
                  ? "Envoyez le message pour soumettre votre projet à Frame Production."
                  : "Send the message to submit your project to Frame Production."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">
                    {locale === "fr" ? "Nom & prénom" : "Full name"} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/50 transition-colors"
                    placeholder={locale === "fr" ? "Jérôme Lévy" : "Jane Smith"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">
                    {locale === "fr" ? "Email" : "Email"} *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/50 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1.5">
                  {locale === "fr" ? "Organisation / société" : "Organisation / company"}
                </label>
                <input
                  type="text"
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1.5">
                  {locale === "fr" ? "Votre projet" : "Your project"} *
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/50 transition-colors resize-none"
                  placeholder={
                    locale === "fr"
                      ? "Décrivez votre projet : sujet, angle éditorial, stade de développement..."
                      : "Describe your project: subject, editorial angle, development stage..."
                  }
                />
              </div>
              <button
                type="submit"
                className="bg-ink text-cream px-8 py-3 rounded-full text-sm font-semibold hover:bg-red transition-colors"
              >
                {t.press.submitButton}
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
