"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";
import { articles, socialPosts, pressItems, pressFormatLabel, type Post, type PressItem } from "@/lib/posts";
import { PostEmbed } from "@/components/PostEmbed";
import { FadeIn } from "@/components/FadeIn";

function formatDate(iso: string, locale: "fr" | "en"): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

function ArticleCard({ post }: { post: Extract<Post, { type: "article" }> }) {
  const { locale, t } = useI18n();

  return (
    <Link
      href={`/actualites/${post.slug}`}
      className="block bg-paper border border-ink/10 rounded-2xl overflow-hidden hover:border-navy/40 transition-all group card-hover"
    >
      {post.cover ? (
        <div className="relative aspect-[16/9] bg-navy">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="aspect-[16/9]"
          style={{
            background:
              "linear-gradient(135deg, var(--navy) 0%, var(--sky) 100%)",
          }}
        />
      )}
      <div className="p-6 md:p-8">
        <p className="text-xs uppercase tracking-widest text-red mb-3">
          {formatDate(post.date, locale)}
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-3 group-hover:text-red transition-colors">
          {post.title}
        </h3>
        <p className="text-ink/70 text-sm md:text-base leading-relaxed mb-4 text-justify">
          {post.excerpt}
        </p>
        <span className="text-xs uppercase tracking-widest text-navy">
          {t.news.readMore} →
        </span>
      </div>
    </Link>
  );
}

function buildYouTubeEmbedUrl(videoId: string, start?: number, end?: number): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
  });
  if (typeof start === "number") params.set("start", String(start));
  if (typeof end === "number") params.set("end", String(end));
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

function PressCard({ item }: { item: PressItem }) {
  const { locale } = useI18n();
  const cta = item.videoEmbed
    ? locale === "fr"
      ? "Voir l'intégrale"
      : "Watch full version"
    : locale === "fr"
      ? "Lire"
      : "Read";

  return (
    <div className="bg-paper border border-ink/10 rounded-2xl overflow-hidden hover:border-navy/40 transition-all group card-hover">
      {item.videoEmbed && item.videoEmbed.provider === "youtube" && (
        <div className="relative aspect-video bg-navy">
          <iframe
            src={buildYouTubeEmbedUrl(
              item.videoEmbed.videoId,
              item.videoEmbed.start,
              item.videoEmbed.end,
            )}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6"
      >
        <div className="flex items-center justify-between mb-4 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {item.sourceLogo ? (
              <div className="relative h-7 w-20 shrink-0">
                <Image
                  src={item.sourceLogo}
                  alt={item.source}
                  fill
                  sizes="80px"
                  className="object-contain object-left"
                />
              </div>
            ) : (
              <span className="font-display text-base text-ink truncate">
                {item.source}
              </span>
            )}
            <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-navy/5 text-navy whitespace-nowrap">
              {pressFormatLabel(item.format, locale)}
            </span>
          </div>
          <span className="text-xs text-ink/40 whitespace-nowrap">
            {formatDate(item.date, locale)}
          </span>
        </div>
        {item.title && (
          <h3 className="font-display text-xl md:text-2xl text-ink leading-tight mb-2 group-hover:text-red transition-colors">
            {item.title}
          </h3>
        )}
        {item.excerpt && (
          <p className="text-ink/70 text-sm leading-relaxed text-justify">
            {item.excerpt}
          </p>
        )}
        <span className="inline-block mt-4 text-xs uppercase tracking-widest text-navy">
          {cta} ↗
        </span>
      </a>
    </div>
  );
}

export default function NewsPage() {
  const { t, locale } = useI18n();

  // Sort newest first
  const sortedArticles = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const sortedSocial = [...socialPosts].sort((a, b) => b.date.localeCompare(a.date));
  const sortedPress = [...pressItems].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <article className="pt-32 md:pt-40 pb-16 bg-cream">
      <div className="container-frame">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            {t.news.title}
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ink mb-6 leading-none">
            {t.news.title}
          </h1>
          <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-12 text-justify">
            {t.news.lead}
          </p>
        </FadeIn>

        {/* ── Section 1 — Actualités (articles maison) ── */}
        {sortedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {sortedArticles.map((post, i) => (
              <FadeIn key={`article-${post.slug}`} delay={Math.min(i * 0.08, 0.32)}>
                <ArticleCard post={post} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <p className="text-ink/50 italic text-center py-12">
            {locale === "fr" ? "Aucune actualité pour le moment." : "No news yet."}
          </p>
        )}

        {/* ── Section 2 — Sur les réseaux sociaux ── */}
        <section className="mt-20 md:mt-28 border-t-2 border-ink/10 pt-12 md:pt-16">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
              {locale === "fr" ? "Sur les réseaux sociaux" : "On social media"}
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-ink mb-6 leading-none">
              {locale === "fr" ? "Coulisses & publications" : "Behind the scenes"}
            </h2>
            <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-10 text-justify">
              {locale === "fr"
                ? "Les publications LinkedIn et Instagram de Frame Production et de Jérôme Lévy."
                : "LinkedIn and Instagram posts from Frame Production and Jérôme Lévy."}
            </p>
          </FadeIn>

          {sortedSocial.length === 0 ? (
            <p className="text-ink/40 italic text-sm">
              {locale === "fr"
                ? "Aucune publication pour le moment."
                : "No social posts yet."}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {sortedSocial.map((post, i) => (
                <FadeIn
                  key={`social-${i}-${post.url}`}
                  delay={Math.min(i * 0.08, 0.32)}
                >
                  <PostEmbed post={post} />
                </FadeIn>
              ))}
            </div>
          )}
        </section>

        {/* ── Section 3 — Dans la presse ── */}
        <section className="mt-20 md:mt-28 border-t-2 border-ink/10 pt-12 md:pt-16">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
              {locale === "fr" ? "Dans la presse" : "In the press"}
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-ink mb-6 leading-none">
              {locale === "fr" ? "Interventions & articles" : "Interviews & articles"}
            </h2>
            <p className="prose-frame text-base md:text-lg text-ink/70 leading-relaxed mb-10 text-justify">
              {locale === "fr"
                ? "Interviews radio, plateaux télé et articles consacrés au travail de Frame Production et à ses films."
                : "Radio interviews, TV appearances, and articles featuring Frame Production's work and films."}
            </p>
          </FadeIn>

          {sortedPress.length === 0 ? (
            <p className="text-ink/40 italic text-sm">
              {locale === "fr"
                ? "Les premières interventions presse seront publiées ici prochainement."
                : "Press appearances will be published here soon."}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {sortedPress.map((item, i) => (
                <FadeIn key={`${item.url}-${i}`} delay={Math.min(i * 0.08, 0.32)}>
                  <PressCard item={item} />
                </FadeIn>
              ))}
            </div>
          )}
        </section>
      </div>
    </article>
  );
}
