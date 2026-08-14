# salomemichaux.eu — contexte projet

Fichier de contexte à la racine du repo. Claude Code le lit automatiquement à chaque session.
**Dernière mise à jour : 13 août 2026**, après recherche de mots-clés Semrush FR et UK.

---

## Le projet

Site professionnel de Salomé Michaux, Product Consultant & Builder indépendante à Bruxelles. Objectif : générer des leads qualifiés et du revenu récurrent. C'est son **premier canal d'acquisition en propre** — pas un portfolio.

**Domaine de production : `https://salomemichaux.eu`** — jamais `salome-michaux.lovable.app`.

## Stack

- React + Tailwind CSS v4 (config dans `src/styles.css`, pas de `tailwind.config.js`) + shadcn/ui
- **TanStack Start avec rendu serveur.** Migré depuis React + Vite. Tout le monde reçoit le même HTML : `curl` et les outils d'audit tiers disent la vérité.
- Supabase pour la base, l'authentification et les Edge Functions
- Sync GitHub bidirectionnel : Lovable ne synchronise **qu'une seule branche à la fois** (`main`). Pousser ailleurs = Lovable ne voit rien.
- **La publication se fait exclusivement depuis Lovable.** Merger sur GitHub ne publie rien.

## Positionnement

**Product Consultant & Builder — Digitalisation de process.**

Transformer les process internes d'équipes sans tech interne en outils sur-mesure, de l'audit à la mise en production.

**Cible :** PME, scale-ups et associations sans équipe tech interne.
**Hors cible :** founders au stade MVP. Ne jamais écrire « MVP », « votre idée », « votre vision », « startup ».

## Marchés — décision du 13 août 2026

| Version | Marché visé | Ancrage sémantique |
|---|---|---|
| FR | France | digitalisation / automatisation des processus, logiciel et application sur mesure |
| EN | Royaume-Uni | bespoke software development, business process automation |

**La Belgique n'est pas un marché search.** Les volumes y sont trop faibles pour être exploitables. Bruxelles reste un élément de réassurance dans le contenu et dans le schema `Person`, jamais un levier de positionnement. Pas de SEO local, pas de pages géographiques.

Le site n'est pas une traduction, c'est **deux positionnements pour une même offre**. « Digitalisation de process » n'a aucune demande en anglais — c'est un terme francophone. La version anglaise se réancre sur « bespoke software development ». La symétrie FR/EN est thématique, jamais littérale.

À noter : le meilleur mot-clé anglais (*bespoke software development*, 2 400/mois, KD 19, CPC 17,20 $) dépasse en volume et en valeur le meilleur mot-clé français (*logiciel sur mesure*, 1 000/mois, KD 17). Le marché britannique mérite un effort réel, pas un miroir de politesse.

## Règles non négociables

1. **Aucune métrique inventée.** Aucun chiffre invérifiable. Interdits : « 100 % de satisfaction », « -50 % de temps », « X+ plateformes ». Chiffres validés : **362 k€** levés sur HireRing (euros, pas dollars) ; onboarding client Purpose Recruiting **en quatre clics**.
2. **Aucun slug, aucun mot-clé inventé.** Toute URL et tout titre repose sur un volume mesuré. En l'absence de donnée : slug provisoire et `noindex` maintenu.
3. **Les outils ne sont pas l'identité.** « No-code », Lovable, Make, Bubble, Wix n'apparaissent ni dans les titres, ni dans les H1, ni dans les accroches, ni dans les URL, ni dans les attributs `alt`. Seule exception admise : la liste de compétences de `/a-propos`.
4. **Canonical toujours auto-référencée** sur `https://salomemichaux.eu` + le chemin. Jamais vers lovable.app. Jamais vers l'accueil depuis une page interne.
5. **Une page, une intention.** Deux pages ne visent jamais le même mot-clé.
6. **Registre consultante senior.** Bannis : « hello! », « let's go! », « prête à… », « donner vie à votre idée ».
7. **Pas de PDF nu.** Toute ressource téléchargeable est enveloppée dans une page HTML indexable.
8. **Aucune page orpheline.** Chaque page reçoit au moins un lien interne.

## Mots-clés mesurés — source Semrush, 13 août 2026

### Français (marché France)

| Mot-clé | Volume | KD | Page |
|---|---|---|---|
| automatisation des processus | 1 300 | 36 | `/automatisation-des-processus/` |
| logiciel sur mesure | 1 000 | 17 | `/logiciel-sur-mesure/` |
| application métier sur mesure | 880 | 14 | `/application-metier-sur-mesure/` ⭐ meilleur rapport |
| digitalisation des processus | 480 | 20 | accueil `/` |
| transformation digitale PME | 110 | 17 | `/transformation-digitale-pme/` |

### Anglais (marché Royaume-Uni, orthographe britannique)

| Mot-clé | Volume UK | KD | CPC | Page |
|---|---|---|---|---|
| bespoke software development | 2 400 | 19 | 17,20 $ | `/en/bespoke-software-development` ⭐ |
| digital transformation consultant | 720 | 20 | 10,37 $ | `/en/digital-transformation-consultant` |
| business process automation | 1 300 | 53 | 9,61 $ | `/en/business-process-automation` |
| legacy application support uk | 170 | — | — | `/en/legacy-application-support` |
| custom crm | 170 | 9 | 20,59 $ | `/en/custom-crm` ⭐ preuve directe : le CRM de Purpose Recruiting |
| custom software vs off the shelf | 10 UK / 140 US | 0 / 11 | — | `/en/custom-software-vs-off-the-shelf` |

### À ne jamais cibler — intention « je veux utiliser un outil moi-même »

`make automatisation` (590/mois) · `airtable` (40 500/mois) · `workflow automation` (14 800/mois) · `internal tools` · `no code vs custom development` · `process automation for small business` · `automate business processes` — utilisable en H2 interne, jamais en page cible.

Du volume réel, mais des bricoleurs, pas des acheteurs. Cibler ces termes ramènerait du trafic mal qualifié et compresserait le tarif journalier.

### Orthographe sur `/en/`

Britannique partout : *-isation* et non *-ization*, *optimise* et non *optimize* (4 400/mois contre 1 900). Placer une variante américaine dans une réponse de FAQ pour capter les deux.

## La règle hybride — mot-clé au titre, symptôme au contenu

| Élément | Registre |
|---|---|
| URL, title, H1 | Mot-clé mesuré — se faire trouver |
| Accroche, blocs de réponse, FAQ | Langage symptôme — se faire reconnaître et citer |

Les volumes sont sur les mots-clés solution. Les formulations symptôme n'en ont quasiment aucun. Elles restent le langage du contenu, jamais celui des URL.

## Architecture

Nombre fini de pages durables, rafraîchies trimestriellement. Pas de blog : les rythmes de publication calendaires ne sont pas tenus.

```
FR                                          EN
/                                           /en
/application-metier-sur-mesure/             /en/bespoke-software-development
/logiciel-sur-mesure/                       /en/custom-software-vs-off-the-shelf
/automatisation-des-processus/              /en/business-process-automation
/transformation-digitale-pme/               /en/digital-transformation-consultant
/reprendre-un-outil-interne/                /en/legacy-application-support
/crm-sur-mesure/  (volume FR à mesurer)     /en/custom-crm
/audit-de-process/                          /en/process-audit
/accompagnement-continu/                    /en/ongoing-support
/tarifs/                                    /en/pricing
/cas-clients/                               /en/case-studies
  /cas-clients/wwf/
  /cas-clients/purpose-recruiting/
  /cas-clients/teach-for-belgium/
  /cas-clients/medicheck/
/site-optimise-ia/   (page de test)
/ressources/diagnostic/
/a-propos/                                  /en/about
/contact/                                   /en/contact
/mentions-legales/  /politique-de-confidentialite/
```

Pages symptôme (faible volume, fort AEO et forte conversion) : `/automatiser-un-reporting/`, `/synchroniser-ses-outils/`.

**Ordre de construction :** `/application-metier-sur-mesure/` → `/logiciel-sur-mesure/` → `/audit-de-process/` et `/tarifs/` → cas clients → `/en/bespoke-software-development` → le reste.

Slugs anglais non figés tant que le volume n'est pas mesuré. Provisoire + `noindex`.

## Multilingue

Français à la racine, anglais sous `/en/`. Routes dédiées dans `src/routes/en/`, important les mêmes composants de page.

- La langue vient de l'URL, jamais d'un état client. Pas de détection navigateur, pas de redirection automatique, pas de `localStorage`.
- `src/lib/i18n-routes.ts` : table de correspondance FR ↔ EN, avec un indicateur « miroir existant ». Repli vers `/en` ou `/` quand le miroir n'existe pas.
- Tous les liens internes passent par `localePath()`. Jamais de chemin en dur, jamais de slash final (déclenche un 307).
- Sur `/en`, un lien vers une page sans miroir pointe vers la version française. Un contenu réel vaut mieux qu'un placeholder vide.

## Règle : toute page se construit en paire FR + EN

Une page n'est terminée que si ces huit points sont faits.

1. Page française, contenu réel, slug issu d'un mot-clé mesuré.
2. Miroir anglais, slug issu d'une recherche de mots-clés anglais — jamais une traduction.
3. `src/lib/i18n-routes.ts` mis à jour, paire marquée comme ayant un miroir.
4. `noindex` retiré des deux versions, une fois le contenu réel.
5. Les deux URL ajoutées à `public/sitemap.xml` avec `lastmod`.
6. Hreflang réciproques vérifiés au `curl` dans les deux sens, `x-default` sur le français.
7. Textes dans `LanguageContext`, parité des clés FR/EN vérifiée.
8. Si la page relève de l'offre ou des références, son lien est ajouté au footer, dans les deux langues.

## Contenu XEO — chaque page de contenu

- Bloc de réponse directe de 40 à 60 mots en tête de chaque section, autonome et citable tel quel. C'est la cible de citation des moteurs IA — toujours en HTML lisible, jamais en image ni en pseudo-élément.
- FAQ avec schema `FAQPage`, généré à partir des mêmes données que l'affichage pour qu'ils ne divergent jamais. Réponses visibles dans le DOM, pas masquées par un accordéon fermé.
- Auteur nommé (Salomé Michaux) avec schema `Person`, et `dateModified` visible.
- Langage affirmatif. Les formulations prudentes ne se font pas citer.
- Donnée de première main dès que possible : c'est le premier levier de citation.

## Identité visuelle

```
--ink:        #1a2632
--blue:       #3d5a80   (bleu signature)
--blue-deep:  #2c4a6e
--blue-light: #a8c5db
--pale:       #e8f1f8
--mint:       #4ecdc4   (accent, ou point d'arrêt minoritaire de dégradé)
--cream:      #fafbfc
```

**Typographie :** Fraunces (titres), Jost (corps). **Caveat est retirée du projet.** Ne pas la réintroduire.

**Dégradés :** ils font partie de l'identité, à conserver. Famille des bleus sur les fonds, les blobs et les boutons. `text-gradient-blue` s'applique au segment du H1 portant le mot-clé. Le mint reste minoritaire, jamais un aplat de grande surface.

**Logo :** marque signature en trait, sombre, conçue pour fonds clairs.

## Règle d'affichage des clients

| Projets | Traitement |
|---|---|
| WWF, Purpose Recruiting, Teach for Belgium | Client nommé, cas complet |
| MediCheck | Client nommé, avec la mention « mission via dualoop » |
| Projets réalisés via Boldys | **Client jamais nommé.** Décrire par la nature du produit. |

Aucun badge « powered by boldys.ai » nulle part. Aucune mention de Boldys sur `/a-propos`.

## Conventions de code

- Chaque route déclare ses métadonnées via le `head()` natif de TanStack Router, alimenté par le helper partagé `buildSeoHead({ title, description, path, jsonLd, locale, noindex })` défini dans `src/components/Seo.tsx`. Ne pas installer `react-helmet-async` : le head natif est SSR-safe, helmet ne l'est pas sans câblage serveur manuel.
- `title` ≤ 60 caractères, `description` entre 140 et 155, H1 ≤ 60 caractères et unique sur le site.
- Valeurs Tailwind personnalisées : préférer `style={{}}` inline. Les classes arbitraires (`bg-[#...]`, `gap-[18px]`) donnent des résultats incohérents dans ce projet.
- Ne jamais créer un second client Supabase. Utiliser celui de `src/integrations/supabase/client.ts`.
- Aucune écriture directe du navigateur vers Supabase sur les tables de leads ou de tracking : tout passe par une Edge Function.
- RLS activée sur toutes les tables avant toute insertion de données.
- Le sel journalier du hachage visiteur est un secret d'Edge Function. Jamais côté client, jamais dans le repo.
- `src/routeTree.gen.ts` est régénéré automatiquement. Ne jamais l'éditer.

## Vérifications avant de rendre la main

- `bun run build` et le typecheck passent
- Le contenu apparaît dans le HTML brut au `curl`, pas seulement après hydratation — le SSR rend cette vérification fiable, s'en servir systématiquement
- Aucun lien interne en 404 ni en 307
- Hreflang réciproques vérifiés dans les deux sens
- Parité des clés FR/EN, aucune clé brute affichée
- Rendu correct à 375, 768, 1024 et 1440 px, sans défilement horizontal
- `FAQPage` et `Person` valides sur validator.schema.org
