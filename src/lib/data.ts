export type Film = {
  slug: string;
  title: string;
  year: string;
  duration?: string;
  broadcaster?: string;
  director?: string;
  synopsis: { fr: string; en: string };
  poster?: string; // path under /public, e.g. /films/marseille.jpg
  videoSrc?: string; // path under /public, e.g. /videos/marseille-pagnol-netflix.mp4
  coproduction?: string;
};

export const films: Film[] = [
  {
    slug: "marseille-pagnol-netflix",
    title: "De Pagnol à Netflix : Marseille, le mythe du rêve hollywoodien",
    year: "2024",
    duration: "52 min",
    broadcaster: "France 3 PACA",
    director: "Audrey Avram",
    synopsis: {
      fr: "Marseille n'est pas Hollywood. C'est pire. C'est plus brûlant. Depuis Pagnol jusqu'à Netflix, la ville fascine les caméras sans jamais se laisser apprivoiser. Aujourd'hui, l'État, les plateformes et les studios injectent des millions pour faire d'elle une fabrique à fictions. Mais Marseille n'est pas un algorithme : elle déborde, elle résiste, elle raconte. Une enquête entre rêve industriel et cinéma guérilla, sur ce que la ville peut vraiment dire au monde.",
      en: "Marseille isn't Hollywood; it's worse, it burns hotter. From Pagnol to Netflix, the city has always fascinated the camera without ever letting itself be tamed. Today, the State, the streaming giants and the studios are injecting millions to turn it into a fiction factory. But Marseille is no algorithm: it spills over, resists, tells its own stories. An investigation between industrial dream and guerrilla cinema, on what the city truly has to say to the world.",
    },
    videoSrc: "/videos/marseille-pagnol-netflix.mp4",
  },
  {
    slug: "bataille-de-marseille",
    title: "La Bataille de Marseille",
    year: "2023",
    duration: "90 min",
    broadcaster: "France 3",
    synopsis: {
      fr: "Plongée dans une ville en mutation, entre violence, politique et réinvention urbaine.",
      en: "An immersion in a city in transformation, between violence, politics and urban reinvention.",
    },
    videoSrc: "/videos/bataille-de-marseille.mp4",
  },
  {
    slug: "madagascar-ia",
    title: "Madagascar : les petites mains de l'IA",
    year: "2024",
    duration: "60 min",
    synopsis: {
      fr: "À Madagascar, des milliers de travailleurs annotent les données qui entraînent les intelligences artificielles du monde entier.",
      en: "In Madagascar, thousands of workers label the data that trains artificial intelligence systems worldwide.",
    },
    videoSrc: "/videos/madagascar-ia.mp4",
  },
  {
    slug: "maxime-frederic",
    title: "Maxime Frédéric : le chef du Cheval Blanc",
    year: "2024",
    duration: "52 min",
    synopsis: {
      fr: "Portrait du chef pâtissier le plus suivi de sa génération, sacré au sommet de la gastronomie française.",
      en: "A portrait of the most-followed pastry chef of his generation, crowned at the summit of French gastronomy.",
    },
    videoSrc: "/videos/maxime-frederic.mp4",
  },
  {
    slug: "chambon-sur-lignon",
    title: "Le Chambon-sur-Lignon, un legs pour l'Histoire",
    year: "2023",
    duration: "75 min",
    synopsis: {
      fr: "Récit du village qui a sauvé des milliers de Juifs pendant la Seconde Guerre mondiale, et de ce qu'il en reste aujourd'hui.",
      en: "The story of the village that saved thousands of Jews during World War II, and what remains today.",
    },
    videoSrc: "/videos/chambon-sur-lignon.mp4",
  },
  {
    slug: "surtourisme-provence",
    title: "Surtourisme : la Provence peut-elle accueillir toute la richesse du monde ?",
    year: "2024",
    duration: "60 min",
    synopsis: {
      fr: "Enquête sur les limites du modèle touristique provençal et les tensions qu'il génère sur les territoires.",
      en: "An investigation into the limits of the Provençal tourism model and the tensions it creates in local communities.",
    },
    videoSrc: "/videos/surtourisme-provence.mp4",
  },
];

export type Project = {
  slug: string;
  title: string;
  status: "développement" | "tournage" | "post-production";
  genre: string;
  synopsis: { fr: string; en: string };
  year: string;
  lookingFor?: { fr: string; en: string };
  photo?: string;
};

export const projects: Project[] = [
  {
    slug: "etincelle-los-angeles",
    title: "L'Étincelle : le Français qui a embrasé Los Angeles",
    status: "développement",
    genre: "Documentaire",
    year: "2025",
    photo: "https://images.unsplash.com/photo-1580193813605-a5c91dc7d0d8?w=800&h=600&fit=crop&q=80",
    synopsis: {
      fr: "Janvier 2025, Los Angeles brûle. Neuf mois plus tard, le principal suspect du Palisades Fire est un jeune Français de 29 ans, fils de pasteur évangélique du Var. Le documentaire croise le suivi du procès à Los Angeles avec une enquête menée en France, dans l'entourage familial et religieux du suspect à Hyères, pour comprendre comment un homme ordinaire devient en quelques mois l'un des accusés les plus exposés des États-Unis.",
      en: "January 2025, Los Angeles is burning. Nine months later, the main suspect in the Palisades Fire is a 29-year-old Frenchman, son of an evangelical pastor from the Var. The documentary weaves the trial proceedings in Los Angeles with an investigation conducted in France, in the family and religious circles of the suspect in Hyères, to understand how an ordinary man becomes, in a matter of months, one of the most high-profile defendants in the United States.",
    },
    lookingFor: {
      fr: "Diffuseur et partenaires de coproduction",
      en: "Broadcaster and co-production partners",
    },
  },
  {
    slug: "face-cachee-ia",
    title: "La face cachée de l'intelligence artificielle",
    status: "développement",
    genre: "Enquête",
    year: "2026",
    photo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&q=80",
    synopsis: {
      fr: "Derrière l'apparente magie des intelligences artificielles génératives se cache une chaîne industrielle invisible : data centers énergivores, travailleurs du clic sous-payés dans le Sud, captation massive de données, modèles entraînés sur le travail d'autrui. Ce documentaire enquête sur ce que coûte vraiment l'IA, humainement, écologiquement et politiquement, et sur ceux qui paient pour notre confort numérique.",
      en: "Behind the apparent magic of generative AI lies an invisible industrial chain: energy-hungry data centers, underpaid click workers in the Global South, mass data harvesting, models trained on others' labor. This documentary investigates the true cost of AI, humanly, ecologically and politically, and those who pay for our digital comfort.",
    },
    lookingFor: {
      fr: "Diffuseur et partenaires de coproduction",
      en: "Broadcaster and co-production partners",
    },
  },
];

export type FestivalSelection = {
  filmTitle: string;
  festival: string;
  city: string;
  country: string;
  year: string;
  selection: { fr: string; en: string };
  award?: { fr: string; en: string };
};

export const festivalSelections: FestivalSelection[] = [
  {
    filmTitle: "De Pagnol à Netflix : Marseille, le mythe du rêve hollywoodien",
    festival: "DOC LA, Los Angeles Documentary Film Festival",
    city: "Los Angeles",
    country: "États-Unis",
    year: "2026",
    selection: { fr: "Sélection officielle", en: "Official Selection" },
  },
];

export type Director = {
  slug: string;
  name: string;
  bio: { fr: string; en: string };
  /** Photo path under /public, e.g. /directors/azzedine-ahmed-chaouch.jpg */
  photo?: string;
  films?: string[]; // slugs
};

export const directors: Director[] = [
  {
    slug: "azzedine-ahmed-chaouch",
    name: "Azzedine Ahmed-Chaouch",
    photo: "/directors/azzedine-ahmed-chaouch.jpg",
    bio: {
      fr: "Journaliste et réalisateur, Azzedine Ahmed-Chaouch signe des documentaires d'investigation diffusés sur les principales chaînes françaises.",
      en: "Journalist and filmmaker, Azzedine Ahmed-Chaouch directs investigative documentaries broadcast on major French television networks.",
    },
  },
  {
    slug: "audrey-avram",
    name: "Audrey Avram",
    photo: "/directors/audrey-avram.jpg",
    bio: {
      fr: "Réalisatrice et autrice, Audrey Avram explore le réel à travers des récits intimes et des portraits sociétaux.",
      en: "Director and author, Audrey Avram explores reality through intimate narratives and societal portraits.",
    },
  },
  {
    slug: "youcef-khemane",
    name: "Youcef Khemane",
    photo: "/directors/youcef-khemane.jpg",
    bio: {
      fr: "Réalisateur documentariste, Youcef Khemane développe des projets ancrés dans les réalités sociales et les récits de territoire.",
      en: "Documentary filmmaker, Youcef Khemane develops projects rooted in social realities and stories of place.",
    },
  },
];
