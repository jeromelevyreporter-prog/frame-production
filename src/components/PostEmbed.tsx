"use client";

import { useEffect } from "react";
import {
  type SocialPost,
  extractLinkedInActivityId,
  extractInstagramShortcode,
} from "@/lib/posts";
import { useI18n } from "@/lib/i18n-context";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export function PostEmbed({ post }: { post: SocialPost }) {
  const { t } = useI18n();

  if (post.source === "linkedin") {
    const activityId = extractLinkedInActivityId(post.url);
    if (!activityId) {
      return (
        <FallbackCard
          url={post.url}
          source="linkedin"
          label={t.news.seeOnLinkedIn}
          date={post.date}
        />
      );
    }

    return (
      <div className="bg-paper border border-ink/10 rounded-2xl overflow-hidden">
        <iframe
          src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}`}
          className="w-full block"
          height={460}
          frameBorder="0"
          allowFullScreen
          title={`Post LinkedIn · ${post.date}`}
          loading="lazy"
        />
      </div>
    );
  }

  // Instagram
  const shortcode = extractInstagramShortcode(post.url);
  if (!shortcode) {
    return (
      <FallbackCard
        url={post.url}
        source="instagram"
        label={t.news.seeOnInstagram}
        date={post.date}
      />
    );
  }

  return <InstagramEmbed url={post.url} date={post.date} />;
}

function InstagramEmbed({ url, date }: { url: string; date: string }) {
  // Instagram requires their embed.js script to render the blockquote
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    } else {
      const existing = document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]',
      );
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [url]);

  return (
    <div className="bg-paper border border-ink/10 rounded-2xl overflow-hidden p-2">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: "transparent", border: 0, margin: 0, padding: 0, width: "100%" }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </blockquote>
      <p className="sr-only">Date : {date}</p>
    </div>
  );
}

function FallbackCard({
  url,
  source,
  label,
  date,
}: {
  url: string;
  source: "linkedin" | "instagram";
  label: string;
  date: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block aspect-[4/5] bg-paper border border-ink/10 rounded-2xl p-6 flex flex-col justify-between hover:border-navy/40 transition-colors"
    >
      <p className="text-xs uppercase tracking-widest text-muted">
        {source === "linkedin" ? "LinkedIn" : "Instagram"} · {date}
      </p>
      <p className="font-display text-xl text-ink">{label} →</p>
    </a>
  );
}
