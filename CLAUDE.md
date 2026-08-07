# salomemichaux.eu — contexte projet

À placer à la racine du repo. Claude Code le lit automatiquement à chaque session.

---

## Le projet

Site professionnel de Salomé Michaux, Product Consultant & Builder indépendante à Bruxelles. Objectif : générer des leads qualifiés et du revenu récurrent. C'est son **premier canal d'acquisition en propre** — pas un portfolio.

**Domaine de production : `https://salomemichaux.eu`** — jamais `salome-michaux.lovable.app`.

## Stack

- React + Tailwind CSS + shadcn/ui, hébergé par Lovable
- Supabase pour la base, l'authentification et les Edge Functions
- Sync GitHub bidirectionnel : Lovable ne synchronise **qu'une seule branche à la fois** (par défaut `main`). Pousser sur une autre branche = Lovable ne voit rien.
- La publication se fait exclusivement depuis Lovable

## Positionnement

**Product Consultant & Builder — Digitalisation de process.**

Transformer les process internes d'équipes sans tech interne en outils sur-mesure, de l'audit à la mise en production.

**Cible :** PME, scale-ups et ASBL sans équipe tech interne.
**Hors cible :** founders au stade MVP. Ne jamais écrire « MVP », « votre idée », « votre vision », « startup ».

## Règles non négociables

1. **Aucune métrique inventée.** Aucun chiffre invérifiable. Interdits : « 100 % de satisfaction », « -50 % de temps », « X+ plateformes ». Seul chiffre validé : **362 k€** levés sur HireRing (euros, pas dollars).
2. **Les outils ne sont pas l'identité.** « No-code », Lovable, Make, Bubble, Wix n'apparaissent ni dans les titres, ni dans les H1, ni dans les accroches. Ils vivent dans une section méthode ou en pied de page.
3. **Canonical toujours auto-référencée** sur `https://salomemichaux.eu` + le chemin de la page. Jamais vers lovable.app. Jamais vers la page d'accueil depuis une page interne.
4. **Une page, une intention.** Ne jamais viser deux intentions de recherche sur une même page.
5. **Registre consultante senior.** Bannis : « hello! », « let's go! », « prête à… », « donner vie à votre idée ». Ton direct, affirmatif, professionnel.
6. **Pas de PDF nu.** Toute ressource téléchargeable est enveloppée dans une page HTML indexable.
7. **Aucune page orpheline.** Chaque page reçoit au moins un lien interne depuis un pilier ou une page connexe.

## Identité visuelle

```
--ink:        #1a2632
--blue:       #3d5a80   (bleu signature)
--blue-deep:  #2c4a6e
--blue-light: #a8c5db
--pale:       #e8f1f8
--mint:       #4ecdc4   (accent fonctionnel uniquement — jamais structurant)
--cream:      #fafbfc
```

**Typographie :** Fraunces (titres), Jost (corps).
**Caveat est retirée du projet.** Ne pas la réintroduire.
**Logo :** marque signature en trait, sombre, conçue pour fonds clairs. Recolorer en clair sur fonds sombres.

## Architecture — 22 pages FR, miroir sous `/en/`

```
/                                      Accueil
/audit-de-process/                     Offre d'entrée — 3 500 € affichés
/digitalisation-de-process/            Offre projet
/accompagnement-continu/               Retainer — 490 / 1 190 / 2 200 €/mois
/tarifs/                               Transactionnel

/reprendre-un-outil-interne/           Symptôme — page la plus différenciante
/automatiser-un-reporting/             Symptôme
/synchroniser-ses-outils/              Symptôme
/automatiser-le-suivi-des-demandes/    Symptôme
/automatiser-les-relances/             Symptôme
/automatiser-un-onboarding/            Symptôme
/par-ou-commencer-digitalisation/      Symptôme — alimente l'audit

/site-optimise-ia/                     Page de test, adossée au cas WWF
/no-code-ou-developpement-sur-mesure/  Page arbitrage — forte valeur AEO/GEO

/cas-clients/                          Hub
/cas-clients/wwf/
/cas-clients/purpose-recruiting/
/cas-clients/teach-for-belgium/
/cas-clients/medicheck/

/ressources/diagnostic/                Aimant à leads
/a-propos/                             E-E-A-T, schema Person, HireRing
/contact/
```

## Règle d'affichage des clients

| Projets | Traitement |
|---|---|
| WWF, Purpose Recruiting, Teach for Belgium | Client nommé, cas complet |
| MediCheck | Client nommé, avec la mention « mission via dualoop » |
| Projets réalisés via Boldys | **Client jamais nommé.** Décrire par la nature du produit. |

Aucun badge « powered by boldys.ai » nulle part.

## Conventions de code

- Chaque page rend `<Seo />` en premier élément, avec `title`, `description`, `path` et son `jsonLd`.
- Valeurs Tailwind personnalisées : préférer `style={{}}` inline. Les classes arbitraires (`bg-[#...]`, `gap-[18px]`) donnent des résultats incohérents dans ce projet.
- Ne jamais créer un second client Supabase. Utiliser celui de `src/integrations/supabase/client.ts`.
- Aucune écriture directe du navigateur vers Supabase sur les tables de leads ou de tracking : tout passe par une Edge Function.
- RLS activée sur toutes les tables avant toute insertion de données.
- Le sel journalier du hachage visiteur est un secret d'Edge Function. Jamais côté client, jamais dans le repo.

## Contenu XEO — à appliquer sur chaque page de contenu

- Un bloc de réponse directe de 40 à 60 mots en tête, autonome et citable tel quel.
- Une section FAQ avec schema `FAQPage`.
- Auteur nommé (Salomé Michaux) avec schema `Person`, et `dateModified` exposé.
- Langage affirmatif. Les formulations prudentes ne se font pas citer par les moteurs IA.
- Titre et H1 en mot-clé classique ; ouverture et FAQ en langage symptôme.
