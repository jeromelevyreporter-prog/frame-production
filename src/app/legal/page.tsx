"use client";

import { FadeIn } from "@/components/FadeIn";

export default function LegalPage() {
  return (
    <article className="pt-32 md:pt-40 pb-24 bg-cream">
      <div className="container-frame max-w-3xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            Informations légales
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-ink mb-16 leading-none">
            Mentions légales
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-14 text-sm md:text-base text-ink/80 leading-relaxed">

            {/* Éditeur */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Éditeur du site
              </h2>
              <dl className="space-y-3">
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">Raison sociale</dt>
                  <dd className="text-ink font-medium">Frame Production</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">Forme juridique</dt>
                  <dd>Société par actions simplifiée (SAS)</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">Capital social</dt>
                  <dd>1 000,00 €</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">SIREN</dt>
                  <dd>828 915 801</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">SIRET (siège)</dt>
                  <dd>828 915 801 00017</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">N° TVA intracommunautaire</dt>
                  <dd>FR28828915801</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">Code NAF / APE</dt>
                  <dd>5911A · Production de films et de programmes pour la télévision</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">Date de création</dt>
                  <dd>7 avril 2017</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">Siège social</dt>
                  <dd>106 rue Legendre, 75017 Paris</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">Contact</dt>
                  <dd>
                    <a
                      href="mailto:contact@frameproduction.fr"
                      className="hover:text-red transition-colors"
                    >
                      contact@frameproduction.fr
                    </a>
                    <br />
                    +33 6 10 84 69 46
                  </dd>
                </div>
              </dl>
            </section>

            {/* Directeur de la publication */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Directeur de la publication
              </h2>
              <p>
                Jérôme Lévy, en qualité de dirigeant de Frame Production.
              </p>
            </section>

            {/* Hébergeur */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Hébergeur
              </h2>
              <dl className="space-y-3">
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">Société</dt>
                  <dd className="text-ink font-medium">Vercel Inc.</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">Adresse</dt>
                  <dd>340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</dd>
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <dt className="text-ink/50">Site web</dt>
                  <dd>vercel.com</dd>
                </div>
              </dl>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des contenus présents sur ce site (textes, images, extraits vidéo,
                logos, identité visuelle) est la propriété exclusive de Frame Production ou de
                ses ayants droit, et est protégé par les lois françaises et internationales
                relatives à la propriété intellectuelle. Toute reproduction, représentation ou
                diffusion, totale ou partielle, sans autorisation préalable écrite de Frame
                Production, est interdite.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Limitation de responsabilité
              </h2>
              <p>
                Frame Production s'efforce d'assurer l'exactitude et la mise à jour des
                informations diffusées sur ce site. Cependant, Frame Production ne peut
                garantir l'exactitude, la complétude ou l'actualité des informations. En
                conséquence, l'utilisateur reconnaît utiliser ces informations sous sa
                responsabilité exclusive.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Droit applicable
              </h2>
              <p>
                Le présent site et ses mentions légales sont soumis au droit français. En cas
                de litige, et à défaut de résolution amiable, les tribunaux français seront
                seuls compétents.
              </p>
            </section>

          </div>
        </FadeIn>
      </div>
    </article>
  );
}
