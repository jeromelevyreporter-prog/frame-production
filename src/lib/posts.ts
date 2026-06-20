// ============================================================
// Page Actualités — 3 sections distinctes
// ============================================================
//
// 1) ARTICLES (que nous écrivons nous-mêmes) → `articles`
// 2) POSTS RÉSEAUX SOCIAUX (LinkedIn / Instagram) → `socialPosts`
// 3) DANS LA PRESSE (interviews, articles externes) → `pressItems`
//
// ------------------------------------------------------------
// Comment ajouter un ARTICLE :
//   { slug: "...", title: "...", excerpt: "...",
//     date: "AAAA-MM-JJ", content: ["paragraphe 1", "paragraphe 2"], cover?: "/news/xxx.jpg" }
//   → slug = identifiant URL (sans accents, lowercase, mots séparés par "-")
//   → cover = optionnelle, à déposer dans public/news/
//
// Comment ajouter un POST RÉSEAU SOCIAL :
//   { source: "linkedin" | "instagram", url: "...", date: "AAAA-MM-JJ" }
//
// La liste est triée automatiquement par date (du plus récent au plus ancien).
// ============================================================

export type SocialPost = {
  type: "social";
  source: "linkedin" | "instagram";
  url: string;
  date: string; // YYYY-MM-DD
};

export type FlashArticle = {
  type: "article";
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  content: string[]; // paragraphes
  cover?: string; // path under /public, ex: /news/diffusion-arte.jpg
};

export type Post = SocialPost | FlashArticle;

// --- Articles que nous écrivons nous-mêmes ---
export const articles: FlashArticle[] = [
  {
    type: "article",
    slug: "avant-premiere-marseille-pagnol-netflix-joliette",
    title:
      "Avant-première de «\u202fMarseille, de Pagnol à Netflix\u202f» au cinéma La Joliette",
    date: "2026-04-29",
    excerpt:
      "Le 5 mai 2026, le documentaire d'Audrey Avram sera projeté en avant-première au cinéma La Joliette à Marseille, en présence de l'équipe.",
    content: [
      "Frame Production a le plaisir d'annoncer l'avant-première de Marseille, de Pagnol à Netflix\u202f: le mythe du rêve hollywoodien, le 5 mai 2026 au cinéma La Joliette à Marseille.",
      "Réalisé par Audrey Avram et produit par Jérôme Lévy, le documentaire revient à la maison\u202f: dans la ville qui l'a inspiré, devant le public qui l'a vu naître. Une projection sur grand écran avant la diffusion sur les antennes de France\u202f3 PACA et France.tv.",
      "La séance sera suivie d'un échange avec l'équipe du film. Réservations et informations pratiques à venir auprès du cinéma La Joliette.",
    ],
  },
  {
    type: "article",
    slug: "marseille-pagnol-netflix-la-webfest-2026",
    title:
      "«\u202fMarseille, de Pagnol à Netflix\u202f» sélectionné au LA WEBFEST 2026",
    date: "2026-04-25",
    excerpt:
      "Le documentaire produit par Frame Production est en lice pour le prix du Meilleur documentaire au Los Angeles WebFest 2026.",
    content: [
      "Frame Production est très heureux de l'annoncer\u202f: Marseille, de Pagnol à Netflix\u202f: le mythe du rêve hollywoodien est sélectionné au LA WEBFEST 2026 dans la catégorie «\u202fMeilleur documentaire\u202f».",
      "Réalisé par Audrey Avram pour france.tv et France\u202f3 Provence-Alpes, sous la responsabilité éditoriale d'Anne-Sophie Maxime, le film franchit l'Atlantique pour rejoindre l'une des sélections les plus suivies de la création documentaire indépendante à Los Angeles.",
      "De Marcel Pagnol à Netflix, un film sur une ville devenue décor, personnage et mythe du cinéma. La date de projection officielle sera communiquée prochainement.",
    ],
  },
  {
    type: "article",
    slug: "marseille-fait-son-cinema-2026",
    title:
      "Frame Production au festival Marseille fait son cinéma",
    date: "2026-04-20",
    excerpt:
      "«\u202fMarseille, de Pagnol à Netflix\u202f: le mythe du rêve hollywoodien\u202f» a été projeté dans le cadre du festival Marseille fait son cinéma.",
    content: [
      "Frame Production a participé au festival Marseille fait son cinéma avec la diffusion de Marseille, de Pagnol à Netflix\u202f: le mythe du rêve hollywoodien, réalisé par Audrey Avram.",
      "Le festival célèbre chaque année les productions tournées, écrites ou inspirées par la cité phocéenne. Une scène locale exigeante, qui a accueilli le film comme l'un des récits récents les plus complets sur ce que Marseille fait au cinéma, et sur ce que le cinéma fait à Marseille.",
      "Une projection essentielle\u202f: avant les festivals internationaux, raconter Marseille à Marseille. Merci au public et aux équipes du festival pour leur accueil.",
    ],
  },
];

// --- Posts réseaux sociaux (LinkedIn de Jérôme Lévy) ---
export const socialPosts: SocialPost[] = [
  {
    type: "social",
    source: "linkedin",
    url: "https://www.linkedin.com/posts/djaylevy_merci-%C3%A0laura-sahin-et-radio-jm-pour-l-activity-7454841728567619585-VWO4",
    date: "2026-01-12",
  },
  {
    type: "social",
    source: "linkedin",
    url: "https://www.linkedin.com/posts/djaylevy_la-bataille-de-marseille-documentaire-activity-7443800391303061504--NQ2",
    date: "2025-12-12",
  },
  {
    type: "social",
    source: "linkedin",
    url: "https://www.linkedin.com/posts/djaylevy_apr%C3%A8s-un-premier-sujet-diffus%C3%A9-dansenvoy%C3%A9-activity-7442607998495043585-Q5GT",
    date: "2025-12-09",
  },
  {
    type: "social",
    source: "linkedin",
    url: "https://www.linkedin.com/posts/djaylevy_madagascar-les-petites-mains-de-lia-activity-7414807434344529920-yg8e",
    date: "2025-09-23",
  },
  {
    type: "social",
    source: "linkedin",
    url: "https://www.linkedin.com/posts/djaylevy_le-week-end-dernier-lemission-66-minutes-activity-7407953607557271552-swnH",
    date: "2025-09-04",
  },
];

// Union conservée pour compatibilité (route [slug] notamment)
export const posts: Post[] = [...articles, ...socialPosts];

// ============================================================
// Section "Dans la presse" — interviews, articles, citations
// ============================================================
//
// Comment ajouter une INTERVENTION PRESSE :
//   { source: "Le Monde", format: "article", title: "...",
//     date: "AAAA-MM-JJ", url: "https://...", excerpt?: "...",
//     sourceLogo?: "/press/le-monde.svg" }
//   → format : "article" | "interview-radio" | "interview-tv" | "podcast"
//   → sourceLogo (optionnel) : déposer le fichier dans public/press/
//
// La liste est triée automatiquement par date (du plus récent au plus ancien).
// ============================================================

export type PressFormat =
  | "article"
  | "interview-radio"
  | "interview-tv"
  | "podcast";

export type PressItem = {
  source: string; // ex: "Le Monde", "France Inter"
  sourceLogo?: string; // path under /public, ex: /press/le-monde.svg
  format: PressFormat;
  title: string;
  date: string; // YYYY-MM-DD
  url: string;
  excerpt?: string;
  filmRelated?: string; // slug du film concerné (optionnel)
  /**
   * Embed vidéo optionnel (YouTube). Si présent, la carte affiche un
   * lecteur en haut, limité à start/end (en secondes) pour ne diffuser
   * que l'extrait pertinent. Le lien `url` reste cliquable pour la version intégrale.
   */
  videoEmbed?: {
    provider: "youtube";
    videoId: string; // ex: "NanUfU-NNFc"
    start?: number; // début en secondes
    end?: number; // fin en secondes
  };
};

export const pressItems: PressItem[] = [
  {
    // ⚠️ À COMPLÉTER : remplir source, title et date (Jérôme passe les 10 premières minutes)
    source: "À compléter",
    format: "interview-tv",
    title: "Interview de Jérôme Lévy",
    date: "2026-04-29",
    url: "https://youtu.be/NanUfU-NNFc",
    videoEmbed: {
      provider: "youtube",
      videoId: "NanUfU-NNFc",
      start: 0,
      end: 600, // 10 min
    },
  },
  {
    // ⚠️ À COMPLÉTER : remplir source, title et date exacte
    source: "À compléter",
    format: "interview-tv",
    title: "Intervention de Jérôme Lévy",
    date: "2026-01-01",
    url: "https://www.youtube.com/watch?v=h35W8gAvp-M",
    videoEmbed: {
      provider: "youtube",
      videoId: "h35W8gAvp-M",
    },
  },
  {
    // ⚠️ À COMPLÉTER : remplir source, title et date exacte
    source: "À compléter",
    format: "interview-tv",
    title: "Intervention de Jérôme Lévy",
    date: "2026-01-01",
    url: "https://www.youtube.com/watch?v=lL0QrmIFUI8",
    videoEmbed: {
      provider: "youtube",
      videoId: "lL0QrmIFUI8",
    },
  },
  {
    // ⚠️ À COMPLÉTER : remplir source, title et date exacte
    source: "À compléter",
    format: "interview-tv",
    title: "Intervention de Jérôme Lévy",
    date: "2026-01-01",
    url: "https://www.youtube.com/watch?v=3hgijgdMHns",
    videoEmbed: {
      provider: "youtube",
      videoId: "3hgijgdMHns",
    },
  },
];

export function pressFormatLabel(format: PressFormat, locale: "fr" | "en"): string {
  const labels: Record<PressFormat, { fr: string; en: string }> = {
    article: { fr: "Article presse", en: "Press article" },
    "interview-radio": { fr: "Interview radio", en: "Radio interview" },
    "interview-tv": { fr: "Interview TV", en: "TV interview" },
    podcast: { fr: "Podcast", en: "Podcast" },
  };
  return labels[format][locale];
}

// Extrait l'activity ID d'une URL LinkedIn pour l'embed iframe
export function extractLinkedInActivityId(url: string): string | null {
  const match = url.match(/activity[-:](\d+)/);
  return match ? match[1] : null;
}

// Extrait le shortcode Instagram d'une URL pour l'embed
export function extractInstagramShortcode(url: string): string | null {
  const match = url.match(/instagram\.com\/(?:p|reel)\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
}
