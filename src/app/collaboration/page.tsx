"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { FadeIn } from "@/components/FadeIn";

export default function CollaborationPage() {
  const { locale } = useI18n();
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

  const labels = {
    lead: locale === "fr"
      ? "Réalisateur, journaliste, coproducteur ou diffuseur, si vous avez un projet documentaire à développer ou à coproduire, Frame Production étudie toutes les propositions sérieuses."
      : "Filmmaker, journalist, co-producer or broadcaster, if you have a documentary project to develop or co-produce, Frame Production reviews all serious proposals.",
    name: locale === "fr" ? "Nom & prénom" : "Full name",
    org: locale === "fr" ? "Société / organisation" : "Company / organisation",
    role: locale === "fr" ? "Qualité (réalisateur, coproducteur…)" : "Role (director, co-producer…)",
    message: locale === "fr" ? "Votre projet" : "Your project",
    messagePlaceholder: locale === "fr"
      ? "Sujet, angle éditorial, stade de développement, format envisagé…"
      : "Subject, editorial angle, development stage, intended format…",
    button: locale === "fr" ? "Envoyer la proposition" : "Send proposal",
    sentTitle: locale === "fr" ? "Votre messagerie s'est ouverte." : "Your email client opened.",
    sentBody: locale === "fr"
      ? "Envoyez le message pour transmettre votre projet à Frame Production."
      : "Send the message to submit your project to Frame Production.",
  };

  return (
    <main className="pt-32 md:pt-40 pb-16 bg-cream">
      <div className="container-frame">

        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            Collaboration
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ink mb-6 leading-none">
            {locale === "fr" ? "Proposer un projet" : "Submit a project"}
          </h1>
          <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-10 text-justify">
            {labels.lead}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {sent ? (
            <div className="bg-sky/10 rounded-2xl p-10 text-center max-w-lg">
              <p className="font-display text-2xl text-ink mb-2">{labels.sentTitle}</p>
              <p className="text-ink/60">{labels.sentBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ink/50 mb-2">{labels.name} *</label>
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
                  <label className="block text-xs uppercase tracking-widest text-ink/50 mb-2">{labels.org}</label>
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ink/50 mb-2">{labels.role}</label>
                  <input
                    type="text"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-ink/50 mb-2">{labels.message} *</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={labels.messagePlaceholder}
                  className="w-full border border-ink/20 rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:border-ink/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-ink text-cream px-8 py-3 rounded-full text-sm font-semibold hover:bg-red transition-colors"
              >
                {labels.button}
              </button>
            </form>
          )}
        </FadeIn>

      </div>
    </main>
  );
}
