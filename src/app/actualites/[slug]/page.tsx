"use client";

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";
import { posts } from "@/lib/posts";
import { FadeIn } from "@/components/FadeIn";

function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  if (!url) return null;

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const share = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "width=600,height=400,noopener,noreferrer");
  };

  const networks = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encoded}&title=${encodedTitle}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    },
  ];

  return (
    <div className="mt-14 pt-8 border-t border-ink/10 flex flex-wrap items-center gap-3">
      <span className="text-xs uppercase tracking-widest text-muted mr-2">
        Partager
      </span>
      {networks.map(({ label, href }) => (
        <button
          key={label}
          onClick={() => share(href)}
          className="text-xs uppercase tracking-widest px-4 py-2 border border-ink/20 text-ink hover:border-red hover:text-red transition-colors rounded-full"
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function formatDate(iso: string, locale: "fr" | "en"): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t, locale } = useI18n();

  const article = posts.find((p) => p.type === "article" && p.slug === slug);
  if (!article || article.type !== "article") {
    notFound();
  }

  const otherArticles = posts
    .filter((p) => p.type === "article" && p.slug !== slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3) as Extract<(typeof posts)[number], { type: "article" }>[];

  return (
    <article className="pt-32 md:pt-40 pb-24 bg-cream">
      <div className="container-frame">
        <Link
          href="/actualites"
          className="text-xs uppercase tracking-widest text-muted hover:text-red transition-colors inline-block mb-10"
        >
          {t.news.backToList}
        </Link>

        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            {formatDate(article.date, locale)}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-ink leading-none mb-10 max-w-4xl">
            {article.title}
          </h1>
        </FadeIn>

        {article.cover && (
          <div className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Two-column layout: content + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Main content */}
          <FadeIn className="lg:col-span-2" delay={0.1}>
            <div className="prose-frame space-y-6 text-base md:text-lg leading-relaxed text-ink/80 text-justify">
              {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <ShareButtons title={article.title} />
          </FadeIn>

          {/* Sidebar */}
          <FadeIn className="lg:col-span-1" delay={0.2}>
          <aside className="space-y-10 lg:sticky lg:top-32">
            {/* Recent articles */}
            {otherArticles.length > 0 && (
              <div>
                <h2 className="text-xs uppercase tracking-widest text-muted mb-5">
                  Autres actualités
                </h2>
                <ul className="space-y-5">
                  {otherArticles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/actualites/${a.slug}`}
                        className="group block"
                      >
                        <p className="text-xs text-muted mb-1">
                          {formatDate(a.date, locale)}
                        </p>
                        <p className="text-sm text-ink group-hover:text-red transition-colors leading-snug">
                          {a.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact */}
            <div className="pt-8 border-t border-ink/10">
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5">
                Contact
              </h2>
              <div className="space-y-3 text-sm text-ink/70 leading-relaxed">
                <a
                  href="mailto:contact@frameproduction.fr"
                  className="block hover:text-red transition-colors"
                >
                  contact@frameproduction.fr
                </a>
                <p>+33 6 10 84 69 46</p>
                <p className="text-ink/50">106 rue Legendre, 75017 Paris</p>
              </div>
            </div>
          </aside>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
