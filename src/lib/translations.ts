export type Locale = "fr" | "en";

type Dictionary = {
  nav: {
    home: string;
    films: string;
    directors: string;
    news: string;
    about: string;
    contact: string;
    development: string;
    press: string;
    festivals: string;
  };
  news: {
    title: string;
    lead: string;
    readMore: string;
    backToList: string;
    seeOnLinkedIn: string;
    seeOnInstagram: string;
  };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  films: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewAll: string;
    year: string;
    duration: string;
    broadcaster: string;
  };
  directors: { sectionTitle: string; sectionSubtitle: string };
  about: {
    title: string;
    lead: string;
    body: string[];
    founder: {
      sectionLabel: string;
      title: string;
      role: string;
      bio: string[];
      placeholderNote: string;
    };
  };
  contact: {
    title: string;
    lead: string;
    labels: { general: string; production: string; press: string; address: string };
  };
  footer: { rights: string; legal: string; privacy: string; newsletter: string; newsletterPlaceholder: string; newsletterButton: string };
  development: { title: string; lead: string; statusDev: string; statusFilming: string; statusPost: string; lookingFor: string };
  press: { title: string; lead: string; contactLabel: string; resourcesLabel: string; submitTitle: string; submitLead: string; submitButton: string };
  festivals: { title: string; lead: string; selection: string; award: string };
  stats: { years: string; films: string; broadcasters: string; countries: string };
};

export const translations: Record<Locale, Dictionary> = {
  fr: {
    nav: {
      home: "Accueil",
      films: "Réalisations",
      directors: "Réalisateurs",
      news: "Actualités",
      about: "À propos",
      contact: "Contact",
      development: "En développement",
      press: "Presse",
      festivals: "Festivals",
    },
    news: {
      title: "Actualités",
      lead: "Diffusions, coulisses, prises de parole. Le carnet de bord de Frame Production.",
      readMore: "Lire l'article",
      backToList: "← Toutes les actualités",
      seeOnLinkedIn: "Voir le post sur LinkedIn",
      seeOnInstagram: "Voir le post sur Instagram",
    },
    hero: {
      tagline: "Société de production indépendante",
      title: "Le réel,\nraconté autrement.",
      subtitle:
        "Frame Production accompagne réalisateurs et journalistes dans la création de documentaires d'auteur, d'investigation et de société.",
      cta: "Découvrir nos films",
    },
    films: {
      sectionTitle: "Réalisations",
      sectionSubtitle:
        "Sélection de productions récentes : récits sociétaux, investigations et portraits.",
      viewAll: "Voir tous les films",
      year: "Année",
      duration: "Durée",
      broadcaster: "Diffuseur",
    },
    directors: {
      sectionTitle: "Réalisateurs",
      sectionSubtitle:
        "Une équipe d'auteurs aux écritures singulières, engagés dans le documentaire de création.",
    },
    about: {
      title: "À propos",
      lead: "Frame Production produit des documentaires indépendants, attentifs au terrain et au temps long.",
      body: [
        "Implantée entre Paris et la Provence, Frame Production développe et produit des documentaires d'auteur : unitaires, séries et films d'investigation. Nos productions sont diffusées sur les principales chaînes françaises (ARTE, France Télévisions, France 3 PACA, M6) et leurs émissions phares, notamment Envoyé Spécial.",
        "Investigations sociétales, portraits incarnés, récits de territoires. Nous accompagnons les auteurs sur la durée, de l'écriture à la diffusion, autour d'une exigence simple : prendre le temps, écrire juste, soigner le regard du spectateur.",
        "Notre conviction : un documentaire bien pensé, bien filmé et bien défendu reste l'un des derniers récits libres.",
      ],
      founder: {
        sectionLabel: "Le fondateur",
        title: "Jérôme Lévy",
        role: "Fondateur & producteur",
        bio: [
          "Journaliste depuis plus de vingt ans, Jérôme Lévy a couvert les crises politiques avant de se consacrer à la production documentaire. De BFM TV, dont il participe au lancement en 2005, à Capital sur M6, puis de France 2 à la création de Frame Production en 2017, il porte la même conviction : un sujet se prend par le terrain et ne souffre pas l'approximation.",
          "Grand reporter pour Capital sur des enquêtes stratégiques (« Si la France sortait de l'Euro ? », « Espionnage au travail : tous fliqués ? »), journaliste-réalisateur à France 2 où il conçoit le pilote de l'émission économique Tout Compte Fait, il signe ensuite plusieurs documentaires d'investigation, dont « Cacao, le nouvel or noir » diffusé sur France 2.",
          "Depuis 2017, Frame Production est sa maison : une structure indépendante et exigeante, qui produit des films d'auteur autour d'une question simple : qu'a-t-on vraiment à raconter ?",
          "Diplômé en journalisme (École de Journalisme et Communication de Marseille), en droit des médias (Aix-Marseille III) et en droit international (Sheffield), il forme par ailleurs à l'ESJ Pro Montpellier les présentateurs d'ARTE et les journalistes en exercice à la prise de parole publique et à la gestion de crise médiatique.",
        ],
        placeholderNote: "",
      },
    },
    contact: {
      title: "Contact",
      lead: "Une histoire à raconter. Une enquête à mener. Un projet à défendre.",
      labels: {
        general: "Renseignements généraux",
        production: "Production & développement",
        press: "Presse",
        address: "Adresse",
      },
    },
    footer: {
      rights: "Tous droits réservés.",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      newsletter: "Rester informé",
      newsletterPlaceholder: "Votre adresse email",
      newsletterButton: "S'inscrire",
    },
    development: {
      title: "En développement",
      lead: "Projets en cours d'écriture, de financement ou de tournage. Des récits qui cherchent encore leur chemin vers l'écran.",
      statusDev: "En développement",
      statusFilming: "En tournage",
      statusPost: "Post-production",
      lookingFor: "Nous recherchons",
    },
    press: {
      title: "Espace presse",
      lead: "Contacts, ressources et accréditations pour les journalistes et professionnels des médias.",
      contactLabel: "Contact presse",
      resourcesLabel: "Ressources disponibles",
      submitTitle: "Proposer un projet",
      submitLead: "Vous avez un sujet, un angle, une histoire à défendre ? Frame Production étudie les propositions de réalisateurs et de journalistes engagés.",
      submitButton: "Envoyer une proposition",
    },
    festivals: {
      title: "Festivals & Sélections",
      lead: "Les films de Frame Production sur les scènes internationales.",
      selection: "Sélection",
      award: "Prix",
    },
    stats: {
      years: "ans d'existence",
      films: "documentaires produits",
      broadcasters: "diffuseurs partenaires",
      countries: "pays filmés",
    },
  },
  en: {
    nav: {
      home: "Home",
      films: "Productions",
      directors: "Directors",
      news: "News",
      about: "About",
      contact: "Contact",
      development: "In Development",
      press: "Press",
      festivals: "Festivals",
    },
    news: {
      title: "News",
      lead: "Broadcasts, behind-the-scenes, statements. Frame Production's logbook.",
      readMore: "Read article",
      backToList: "← All news",
      seeOnLinkedIn: "View post on LinkedIn",
      seeOnInstagram: "View post on Instagram",
    },
    hero: {
      tagline: "Independent production company",
      title: "Reality,\ntold differently.",
      subtitle:
        "Frame Production supports filmmakers and journalists in creating auteur documentaries, investigations, and stories of our times.",
      cta: "Explore our films",
    },
    films: {
      sectionTitle: "Productions",
      sectionSubtitle:
        "A selection of recent productions: societal narratives, investigations and portraits.",
      viewAll: "View all films",
      year: "Year",
      duration: "Length",
      broadcaster: "Broadcaster",
    },
    directors: {
      sectionTitle: "Directors",
      sectionSubtitle:
        "A team of authors with distinct voices, committed to creative documentary filmmaking.",
    },
    about: {
      title: "About",
      lead: "Frame Production produces independent documentaries committed to careful, long-form storytelling.",
      body: [
        "Based between Paris and Provence, Frame Production develops and produces auteur documentaries: feature-length films, series and investigations. Our productions air on major French networks (ARTE, France Télévisions, France 3 PACA, M6) and their flagship shows, including Envoyé Spécial.",
        "Societal investigations, intimate portraits, stories of place. We work with authors over the long haul, from writing to release, around one simple discipline: take the time, write true, never lose the viewer's attention.",
        "Our conviction: a well-thought, well-shot and well-defended documentary remains one of the last free narratives.",
      ],
      founder: {
        sectionLabel: "The founder",
        title: "Jérôme Lévy",
        role: "Founder & producer",
        bio: [
          "A journalist for over twenty years, Jérôme Lévy covered political crises before turning to documentary production. From BFM TV, which he helped launch in 2005, to Capital on M6, then from France 2 to founding Frame Production in 2017, he carries the same conviction: a subject must be taken from the field and never reduced to approximation.",
          "A senior reporter at Capital on strategic investigations (\"What if France left the Euro?\", \"Workplace surveillance: are we all being watched?\"), journalist-director at France 2 where he designed the pilot of the economic show Tout Compte Fait, he later directed several in-depth documentaries, including \"Cacao, the New Black Gold\" broadcast on France 2.",
          "Since 2017, Frame Production has been his home: an independent and demanding production house that develops auteur films around one simple question: what do we actually have to say?",
          "Holding a Master's in Journalism (School of Journalism and Communication of Marseille), Media Law (Aix-Marseille III) and International Law (Sheffield), he also trains ARTE presenters and working journalists in public speaking and media crisis management at ESJ Pro Montpellier.",
        ],
        placeholderNote: "",
      },
    },
    contact: {
      title: "Contact",
      lead: "A story to tell. An investigation to lead. A project worth defending.",
      labels: {
        general: "General inquiries",
        production: "Production & development",
        press: "Press",
        address: "Address",
      },
    },
    footer: {
      rights: "All rights reserved.",
      legal: "Legal notice",
      privacy: "Privacy policy",
      newsletter: "Stay informed",
      newsletterPlaceholder: "Your email address",
      newsletterButton: "Subscribe",
    },
    development: {
      title: "In Development",
      lead: "Projects currently being written, financed, or filmed. Stories still finding their way to the screen.",
      statusDev: "In Development",
      statusFilming: "In Production",
      statusPost: "Post-production",
      lookingFor: "We are looking for",
    },
    press: {
      title: "Press Room",
      lead: "Contacts, resources, and accreditation for journalists and media professionals.",
      contactLabel: "Press contact",
      resourcesLabel: "Available resources",
      submitTitle: "Submit a project",
      submitLead: "Do you have a subject, an angle, a story worth defending? Frame Production reviews proposals from committed filmmakers and journalists.",
      submitButton: "Send a proposal",
    },
    festivals: {
      title: "Festivals & Selections",
      lead: "Frame Production films on the international stage.",
      selection: "Selection",
      award: "Award",
    },
    stats: {
      years: "years of existence",
      films: "documentaries produced",
      broadcasters: "partner broadcasters",
      countries: "countries filmed",
    },
  },
};

export type TranslationKey = Dictionary;
