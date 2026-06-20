"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { FadeIn } from "@/components/FadeIn";

export default function ContactPage() {
  const { t, locale } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", org: "", role: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      locale === "fr" ? "Proposition de projet : Frame Production" : "Project proposal: Frame Production"
    );
    const body = encodeURIComponent(
      `Nom : ${form.name}\nOrganisation : ${form.org}\nQualité : ${form.role}\nEmail : ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:contact@frameproduction.fr?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const resources = [
    locale === "fr"
      ? "Dossier de presse : Marseille, le mythe du rêve hollywoodien"
      : "Press kit: Marseille, the Hollywood dream myth",
    locale === "fr" ? "Biographie de Jérôme Lévy" : "Jérôme Lévy biography",
    locale === "fr" ? "Logos & visuels Frame Production" : "Frame Production logos & visuals",
  ];

  return (
    <article className="pt-32 md:pt-40 pb-16 bg-cream">
      <div className="container-frame">

        {/* En-tête */}
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            {t.contact.title}
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ink mb-10 leading-none">
            {t.contact.lead}
          </h1>
        </FadeIn>

        {/* Section 1 — Coordonnées */}
        <section id="contact">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <FadeIn delay={0.05}>
              <h2 className="text-xs uppercase tracking-widest text-ink/40 mb-3">
                {locale === "fr" ? "Renseignements" : "General inquiries"}
              </h2>
              <a
                href="mailto:contact@frameproduction.fr"
                className="text-base font-semibold text-ink hover:text-red transition-colors block break-all"
              >
                contact@frameproduction.fr
              </a>
              <p className="text-ink/60 text-sm mt-2">+33 6 10 84 69 46</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-xs uppercase tracking-widest text-ink/40 mb-3">
                {t.contact.labels.production}
              </h2>
              <a
                href="mailto:jerome.levy@frameproduction.fr"
                className="text-base font-semibold text-ink hover:text-red transition-colors block break-all"
              >
                jerome.levy@frameproduction.fr
              </a>
              <p className="text-ink/60 text-sm mt-2">Jérôme Lévy</p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2 className="text-xs uppercase tracking-widest text-ink/40 mb-3">
                {t.contact.labels.address}
              </h2>
              <p className="text-base font-semibold text-ink leading-snug">
                106 rue Legendre
                <br />
                75017 Paris
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 2 — Collaboration */}
        <section id="collaboration" className="border-t border-ink/10 mt-12 pt-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
              Collaboration
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-4 leading-none">
              {locale === "fr" ? "Proposer un projet" : "Submit a project"}
            </h2>
            <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-8 text-justify">
              {locale === "fr"
                ? "Réalisateur, journaliste, coproducteur ou diffuseur, si vous avez un projet documentaire à développer ou à coproduire, Frame Production étudie toutes les propositions sérieuses."
                : "Filmmaker, journalist, co-producer or broadcaster, if you have a documentary project to develop or co-produce, Frame Production reviews all serious proposals."}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            {sent ? (
              <div className="bg-sky/10 rounded-2xl p-10 text-center max-w-lg">
                <p className="font-display text-2xl text-ink mb-2">
                  {locale === "fr" ? "Votre messagerie s'est ouverte." : "Your email client opened."}
                </p>
                <p className="text-ink/60">
                  {locale === "fr"
                    ? "Envoyez le message pour transmettre votre projet à Frame Production."
                    : "Send the message to submit your project to Frame Production."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ink/50 mb-2">
                      {locale === "fr" ? "Nom & prénom" : "Full name"} *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ink/50 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/40 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ink/50 mb-2">
                      {locale === "fr" ? "Société / organisation" : "Company / organisation"}
                    </label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ink/50 mb-2">
                      {locale === "fr" ? "Qualité (réalisateur, coproducteur…)" : "Role (director, co-producer…)"}
                    </label>
                    <input
                      type="text"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/40 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ink/50 mb-2">
                    {locale === "fr" ? "Votre projet" : "Your project"} *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={
                      locale === "fr"
                        ? "Sujet, angle éditorial, stade de développement, format envisagé…"
                        : "Subject, editorial angle, development stage, intended format…"
                    }
                    className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-ink text-cream px-8 py-3 rounded-full text-sm font-semibold hover:bg-red transition-colors"
                >
                  {locale === "fr" ? "Envoyer la proposition" : "Send proposal"}
                </button>
              </form>
            )}
          </FadeIn>
        </section>

        {/* Section 3 — Presse */}
        <section id="presse" className="border-t border-ink/10 mt-12 pt-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
              {t.nav.press}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-4 leading-none">
              {t.press.title}
            </h2>
            <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-8 text-justify">
              {t.press.lead}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
            <FadeIn delay={0.1}>
              <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-4">
                {t.press.contactLabel}
              </h3>
              <div className="space-y-2 text-ink/70">
                <p>
                  <span className="text-ink font-semibold">Jérôme Lévy</span>
                  <br />
                  {locale === "fr" ? "Fondateur & producteur" : "Founder & producer"}
                </p>
                <p>
                  <a href="mailto:jerome.levy@frameproduction.fr" className="hover:text-red transition-colors">
                    jerome.levy@frameproduction.fr
                  </a>
                </p>
                <p>
                  <a href="tel:+33610846946" className="hover:text-red transition-colors">
                    +33 6 10 84 69 46
                  </a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h3 className="text-xs uppercase tracking-widest text-ink/40 mb-4">
                {t.press.resourcesLabel}
              </h3>
              <ul className="space-y-0">
                {resources.map((label, i) => (
                  <li key={i} className="flex items-start justify-between gap-4 py-3 border-b border-ink/5">
                    <span className="text-ink/80 text-sm">{label}</span>
                    <span className="text-xs text-ink/40 uppercase tracking-wide whitespace-nowrap pt-0.5">
                      {locale === "fr" ? "Sur demande" : "On request"}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ink/50 mt-4 italic">
                {locale === "fr" ? "Demandes : " : "Requests: "}
                <a href="mailto:contact@frameproduction.fr" className="hover:text-red transition-colors underline underline-offset-2">
                  contact@frameproduction.fr
                </a>
              </p>
            </FadeIn>
          </div>
        </section>

      </div>
    </article>
  );
}
