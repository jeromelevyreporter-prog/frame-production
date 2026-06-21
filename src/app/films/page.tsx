"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";
import { films, projects, directors, type Film, type Project, type Director } from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";

function DirectorCard({ director, index }: { director: Director; index: number }) {
  const { locale } = useI18n();
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = director.photo && !photoFailed;

  return (
    <FadeIn delay={Math.min(index * 0.1, 0.3)}>
      <div>
        <div
          className="relative aspect-[3/4] mb-4 rounded-lg overflow-hidden"
          style={
            showPhoto
              ? undefined
              : {
                  background: `linear-gradient(${145 + index * 25}deg, var(--navy-deep) 0%, var(--navy) 50%, ${
                    index % 2 === 0 ? "rgba(168,192,220,0.3)" : "rgba(200,16,46,0.2)"
                  } 100%)`,
                }
          }
        >
          {showPhoto ? (
            <Image
              src={director.photo!}
              alt={director.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              onError={() => setPhotoFailed(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-paper/20 font-display text-7xl md:text-8xl">
              {director.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
            </div>
          )}
        </div>
        <h3 className="font-display text-xl md:text-2xl text-ink mb-2">{director.name}</h3>
        <p className="text-ink/70 text-sm md:text-base leading-relaxed text-justify">{director.bio[locale]}</p>
      </div>
    </FadeIn>
  );
}

const statusColors: Record<string, string> = {
  développement: "bg-amber-100 text-amber-800",
  tournage: "bg-red-100 text-red-800",
  "post-production": "bg-blue-100 text-blue-800",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { locale, t } = useI18n();

  const statusLabel = (status: string) => {
    if (status === "développement") return t.development.statusDev;
    if (status === "tournage") return t.development.statusFilming;
    return t.development.statusPost;
  };

  return (
    <FadeIn delay={index * 0.1}>
      <article className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-10 border-t border-ink/10 pt-6 pb-8 items-start">
        {/* Photo */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-navy shrink-0">
          {project.photo && (
            <img
              src={project.photo}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>

        {/* Contenu */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${statusColors[project.status]}`}>
              {statusLabel(project.status)}
            </span>
            <span className="text-xs text-ink/40 uppercase tracking-wide">
              {project.genre} · {project.year}
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-ink mb-4">
            {project.title}
          </h3>
          <p className="text-ink/70 leading-relaxed text-justify mb-4">
            {project.synopsis[locale]}
          </p>
          {project.lookingFor && (
            <p className="text-sm text-ink/50 italic mt-auto">
              <span className="font-semibold not-italic text-ink/60">
                {t.development.lookingFor} :
              </span>{" "}
              {project.lookingFor[locale]}
            </p>
          )}
        </div>
      </article>
    </FadeIn>
  );
}

function FilmRow({ film, index }: { film: Film; index: number }) {
  const { locale, t } = useI18n();
  const [videoFailed, setVideoFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const isReversed = index % 2 === 1;

  const showVideo = film.videoSrc && !videoFailed;
  const showPoster = !showVideo && film.poster && !posterFailed;

  return (
    <article
      id={film.slug}
      className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center py-8 md:py-12 border-t border-ink/10"
    >
      <FadeIn className={isReversed ? "md:order-2" : ""} delay={0}>
        <div className="relative aspect-video bg-navy rounded-lg overflow-hidden">
          {showVideo ? (
            <video
              src={film.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => setVideoFailed(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : showPoster ? (
            <img
              src={film.poster}
              alt={film.title}
              onError={() => setPosterFailed(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${135 + index * 25}deg, var(--navy) 0%, var(--sky) 100%)`,
              }}
            />
          )}
        </div>
      </FadeIn>

      <FadeIn className={isReversed ? "md:order-1" : ""} delay={0.15}>
        <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
          {String(index + 1).padStart(2, "0")} · {film.year}
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-4">
          {film.title}
        </h2>
        <p className="text-ink/70 text-base md:text-lg leading-relaxed mb-6 text-justify">
          {film.synopsis[locale]}
        </p>
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs md:text-sm">
          <div>
            <dt className="text-ink/50 uppercase tracking-wider mb-1">{t.films.duration}</dt>
            <dd className="text-ink font-medium">{film.duration ?? ""}</dd>
          </div>
          <div>
            <dt className="text-ink/50 uppercase tracking-wider mb-1">{t.films.broadcaster}</dt>
            <dd className="text-ink font-medium">{film.broadcaster ?? ""}</dd>
          </div>
          <div>
            <dt className="text-ink/50 uppercase tracking-wider mb-1">
              {locale === "fr" ? "Réalisation" : "Director"}
            </dt>
            <dd className="text-ink font-medium">{film.director ?? ""}</dd>
          </div>
          <div>
            <dt className="text-ink/50 uppercase tracking-wider mb-1">
              {locale === "fr" ? "Coproduction" : "Co-production"}
            </dt>
            <dd className="text-ink font-medium">{film.coproduction ?? ""}</dd>
          </div>
        </dl>
      </FadeIn>
    </article>
  );
}

export default function FilmsPage() {
  const { t, locale } = useI18n();

  return (
    <div className="pt-32 md:pt-40 pb-16 bg-cream">
      <div className="container-frame">

        {/* Section 1 — Projets en cours */}
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            {locale === "fr" ? "En ce moment" : "Currently"}
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ink mb-6 leading-none">
            {t.development.title}
          </h1>
          <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-8 text-justify">
            {t.development.lead}
          </p>
        </FadeIn>

        <div className="mb-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Séparateur */}
        <div className="border-t-2 border-ink/10 mb-10" />

        {/* Section 2 — Catalogue */}
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            {locale === "fr" ? "Catalogue" : "Catalogue"}
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-ink mb-6 leading-none">
            {t.films.sectionTitle}
          </h2>
          <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-8 text-justify">
            {locale === "fr"
              ? "Sélection de productions récentes diffusées sur les principales chaînes françaises et plateformes internationales."
              : "A selection of recent productions broadcast on major French networks and international platforms."}
          </p>
        </FadeIn>

        <div>
          {films.map((film, i) => (
            <FilmRow key={film.slug} film={film} index={i} />
          ))}
        </div>

        {/* Section 3 — Réalisateurs */}
        <section className="mt-12 border-t-2 border-ink/10 pt-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
              {locale === "fr" ? "Réalisateurs" : "Directors"}
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-ink mb-4 leading-none">
              {t.directors.sectionTitle}
            </h2>
            <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-8 text-justify">
              {t.directors.sectionSubtitle}
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {directors.map((director, i) => (
              <DirectorCard key={director.slug} director={director} index={i} />
            ))}
          </div>
        </section>

        {/* Section 4 — Partenaires de production */}
        <section className="mt-12 border-t-2 border-ink/10 pt-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
              {locale === "fr" ? "Partenaires" : "Partners"}
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-ink mb-4 leading-none">
              {locale === "fr" ? "Nos partenaires de production" : "Our production partners"}
            </h2>
            <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-8 text-justify">
              {locale === "fr"
                ? "Frame Production collabore avec des sociétés de production indépendantes partageant les mêmes exigences éditoriales et le même engagement pour le documentaire de création."
                : "Frame Production collaborates with independent production companies sharing the same editorial standards and commitment to creative documentary filmmaking."}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: "Amda Production", src: "/partners/amda-production.jpeg" },
                { name: "Cicada Production", src: "/partners/cicada-production.jpeg" },
                { name: "Nova Production", src: "/partners/nova-production.png" },
              ].map((partner) => (
                <div
                  key={partner.name}
                  className="aspect-[3/2] flex items-center justify-center p-4"
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-h-14 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
