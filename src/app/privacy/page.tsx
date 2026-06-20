"use client";

import { FadeIn } from "@/components/FadeIn";

export default function PrivacyPage() {
  return (
    <article className="pt-32 md:pt-40 pb-24 bg-cream">
      <div className="container-frame max-w-3xl">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-red mb-3">
            RGPD
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-ink mb-16 leading-none">
            Politique de confidentialité
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-14 text-sm md:text-base text-ink/80 leading-relaxed">

            {/* Responsable du traitement */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Responsable du traitement
              </h2>
              <p>
                Le responsable du traitement des données à caractère personnel collectées sur
                ce site est :
              </p>
              <p className="mt-4">
                <strong className="text-ink">Frame Production</strong>
                <br />
                106 rue Legendre, 75017 Paris
                <br />
                SIREN : 828 915 801
                <br />
                <a
                  href="mailto:contact@frameproduction.fr"
                  className="hover:text-red transition-colors"
                >
                  contact@frameproduction.fr
                </a>
              </p>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Données collectées
              </h2>
              <p>
                Ce site est un site vitrine à caractère informatif. Il ne collecte aucune
                donnée personnelle via un formulaire de contact ou un système d'inscription.
              </p>
              <p className="mt-4">
                Les seules données susceptibles d'être enregistrées sont des données
                techniques de navigation (adresse IP, navigateur, pages visitées) conservées
                automatiquement dans les journaux du serveur d'hébergement (Vercel Inc.)
                conformément aux obligations légales, et ce pendant une durée maximale de
                13 mois.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Cookies
              </h2>
              <p>
                Ce site utilise uniquement des cookies techniques strictement nécessaires à
                son bon fonctionnement (mémorisation de la langue choisie). Aucun cookie
                publicitaire ou de traçage analytique n'est déposé sur votre terminal.
              </p>
              <p className="mt-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies. Cela
                n'affectera pas votre accès au contenu du site.
              </p>
            </section>

            {/* Finalités et base légale */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Finalités et base légale
              </h2>
              <p>
                Les données de navigation sont traitées sur la base de l'intérêt légitime de
                Frame Production (sécurité du site, prévention des abus, obligations légales
                en matière de journalisation).
              </p>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Destinataires des données
              </h2>
              <p>
                Les données techniques de navigation sont traitées par notre hébergeur
                Vercel Inc. (États-Unis), dans le cadre du Standard Contractual Clauses
                (SCC) de la Commission européenne garantissant un niveau de protection
                adéquat.
              </p>
              <p className="mt-4">
                Frame Production ne vend, ne loue et ne cède aucune donnée personnelle à
                des tiers.
              </p>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Durée de conservation
              </h2>
              <p>
                Les journaux de serveur sont conservés pendant une durée maximale de
                13 mois, conformément aux recommandations de la CNIL.
              </p>
            </section>

            {/* Droits */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Vos droits
              </h2>
              <p>
                Conformément au Règlement général sur la protection des données (RGPD,
                Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez
                des droits suivants sur vos données personnelles :
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-ink/70">
                <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (« droit à l'oubli »)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a
                  href="mailto:contact@frameproduction.fr"
                  className="hover:text-red transition-colors"
                >
                  contact@frameproduction.fr
                </a>
              </p>
              <p className="mt-4">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser
                une réclamation à la CNIL (Commission Nationale de l'Informatique et des
                Libertés) : cnil.fr.
              </p>
            </section>

            {/* Mise à jour */}
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted mb-5 pb-3 border-b border-ink/10">
                Mise à jour
              </h2>
              <p>
                La présente politique de confidentialité a été mise à jour le 28 avril 2026.
                Frame Production se réserve le droit de la modifier à tout moment pour
                refléter les évolutions légales ou techniques du site.
              </p>
            </section>

          </div>
        </FadeIn>
      </div>
    </article>
  );
}
