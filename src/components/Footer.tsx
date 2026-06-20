"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";

export function Footer() {
  const { t, locale } = useI18n();
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent(locale === "fr" ? "Inscription newsletter Frame Production" : "Newsletter subscription: Frame Production");
    const body = encodeURIComponent(`Email : ${email}`);
    window.location.href = `mailto:contact@frameproduction.fr?subject=${subject}&body=${body}`;
    setSubscribed(true);
  };

  return (
    <footer className="bg-navy-deep text-paper mt-16">
      {/* Newsletter band */}
      <div className="border-b border-paper/10">
        <div className="container-frame py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-sky/60 mb-1">{t.footer.newsletter}</p>
              <p className="text-sm text-sky-soft/70">
                {locale === "fr"
                  ? "Diffusions, sélections, coulisses, directement dans votre boîte mail."
                  : "Broadcasts, selections, behind-the-scenes, straight to your inbox."}
              </p>
            </div>
            {subscribed ? (
              <p className="text-sm text-sky/70 italic">
                {locale === "fr" ? "Votre messagerie s'est ouverte. Merci !" : "Your email client opened. Thank you!"}
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  className="flex-1 md:w-64 bg-paper/10 border border-paper/20 rounded-full px-4 py-2.5 text-sm text-paper placeholder:text-paper/40 focus:outline-none focus:border-sky/50"
                />
                <button
                  type="submit"
                  className="bg-paper text-navy px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sky transition-colors whitespace-nowrap"
                >
                  {t.footer.newsletterButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="container-frame py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <h3 className="font-display text-2xl mb-4">Frame Production</h3>
            <p className="text-sky-soft/70 text-sm leading-relaxed max-w-xs italic">
              Des récits qui ne plient pas.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-sky/70 mb-4">
              {locale === "fr" ? "Navigation" : "Navigation"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/films" className="hover:text-sky transition-colors">
                  {t.nav.films}
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:text-sky transition-colors">
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-sky/70 mb-4">
              {locale === "fr" ? "Professionnels" : "Professionals"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/developpement" className="hover:text-sky transition-colors">
                  {t.nav.development}
                </Link>
              </li>
              <li>
                <Link href="/contact#presse" className="hover:text-sky transition-colors">
                  {t.nav.press}
                </Link>
              </li>
              <li>
                <Link href="/contact#collaboration" className="hover:text-sky transition-colors">
                  Collaboration
                </Link>
              </li>
              <li>
                <Link href="/festivals" className="hover:text-sky transition-colors">
                  {t.nav.festivals}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-sky/70 mb-4">
              Contact
            </h4>
            <p className="text-sm text-sky-soft/80 leading-relaxed">
              <a href="mailto:contact@frameproduction.fr" className="hover:text-sky transition-colors">
                contact@frameproduction.fr
              </a>
              <br />
              106 rue Legendre, 75017 Paris
              <br />
              <a href="tel:+33610846946" className="hover:text-sky transition-colors">
                +33 6 10 84 69 46
              </a>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/frame_production_france/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky/60 hover:text-sky transition-colors uppercase tracking-wide"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579511858511"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky/60 hover:text-sky transition-colors uppercase tracking-wide"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/frame-production/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky/60 hover:text-sky transition-colors uppercase tracking-wide"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-paper/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sky-soft/60">
          <p>
            © {year} Frame Production. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-sky">
              {t.footer.legal}
            </Link>
            <Link href="/privacy" className="hover:text-sky">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
