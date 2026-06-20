"use client";

import { useI18n } from "@/lib/i18n-context";
import { projects } from "@/lib/data";
import Link from "next/link";

const statusColors: Record<string, string> = {
  développement: "bg-amber-100 text-amber-800",
  tournage: "bg-red-100 text-red-800",
  "post-production": "bg-blue-100 text-blue-800",
};

export default function DeveloppementPage() {
  const { t, locale } = useI18n();

  const statusLabel = (status: string) => {
    if (status === "développement") return t.development.statusDev;
    if (status === "tournage") return t.development.statusFilming;
    return t.development.statusPost;
  };

  return (
    <main className="pt-32 pb-16 px-6 md:px-12">
      <div style={{ maxWidth: "720px", margin: "0 auto 2rem" }}>
        <p className="text-sm uppercase tracking-widest text-red mb-4 font-medium">
          {t.nav.development}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-6">
          {t.development.title}
        </h1>
        <p className="text-lg text-ink/70 leading-relaxed">
          {t.development.lead}
        </p>
      </div>

      <div style={{ maxWidth: "720px", margin: "0 auto" }} className="space-y-0">
        {projects.map((project, i) => (
          <article
            key={project.slug}
            className="border-t border-ink/10 pt-6 pb-5 animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex flex-wrap items-start gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${statusColors[project.status]}`}
              >
                {statusLabel(project.status)}
              </span>
              <span className="text-xs text-ink/40 uppercase tracking-wide pt-1">
                {project.genre} · {project.year}
              </span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">
              {project.title}
            </h2>

            <p className="text-ink/70 leading-relaxed text-justify mb-6">
              {project.synopsis[locale]}
            </p>

            {project.lookingFor && (
              <p className="text-sm text-ink/50 italic">
                <span className="font-semibold not-italic text-ink/70">
                  {t.development.lookingFor} :
                </span>{" "}
                {project.lookingFor[locale]}
              </p>
            )}
          </article>
        ))}
      </div>

      <div
        style={{ maxWidth: "720px", margin: "4rem auto 0" }}
        className="border-t border-ink/10 pt-10 text-center"
      >
        <p className="text-ink/60 mb-4">{t.press.submitLead}</p>
        <Link
          href="/presse"
          className="inline-block bg-ink text-cream px-8 py-3 rounded-full text-sm font-semibold hover:bg-red transition-colors"
        >
          {t.press.submitButton}
        </Link>
      </div>
    </main>
  );
}
