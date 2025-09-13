# Brief de Développement - Site NDB Nuisibles
## Projet Next.js 14+ avec Tailwind CSS pour Vercel

---

## 🎯 Vue d'Ensemble du Projet

### Client
**NDB Nuisibles** - Entreprise de dératisation et désinsectisation premium basée à Paris, se distinguant par l'utilisation d'un vélo cargo électrique pour ses interventions.

### Objectif Principal
Créer un site web moderne, performant et éco-responsable qui reflète le positionnement premium de l'entreprise tout en mettant en avant son approche innovante et écologique (vélo cargo électrique).

### Stack Technique Requise
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Déploiement**: Vercel
- **Animations**: Framer Motion
- **Icons**: Lucide React ou Heroicons
- **Images**: Next/Image avec optimisation automatique
- **Fonts**: Next/Font avec polices variables

---

## 🎨 Direction Artistique et Design

### Palette de Couleurs
```css
/* Couleurs principales */
--color-primary: #FFFFFF; /* Fond principal */
--color-text: #1A1A1A; /* Texte noir */
--color-accent-1: #8B4513; /* Marron/Terracotta - couleur principale */
--color-accent-2: #D2691E; /* Terracotta clair - accents */
--color-success: #22C55E; /* Vert - éco-responsable */
--color-warning: #F59E0B; /* Orange - urgence */
--color-neutral-light: #F5F5F5; /* Gris très clair */
--color-neutral-dark: #525252; /* Gris foncé */
```

### Typographie
```css
/* Système de fonts */
font-heading: 'Inter', 'Helvetica Neue', sans-serif; /* Titres */
font-body: 'Inter', system-ui, sans-serif; /* Corps de texte */
font-mono: 'JetBrains Mono', monospace; /* Code/Chiffres */

/* Échelle typographique */
text-xs: 0.75rem;
text-sm: 0.875rem;
text-base: 1rem;
text-lg: 1.125rem;
text-xl: 1.25rem;
text-2xl: 1.5rem;
text-3xl: 1.875rem;
text-4xl: 2.25rem;
text-5xl: 3rem;
text-6xl: 3.75rem;
```

### Principes de Design
1. **Minimalisme Moderne**: Espaces blancs généreux, hiérarchie claire
2. **Animations Subtiles**: Micro-interactions fluides (hover, scroll, transitions)
3. **Mobile-First**: Design responsive impeccable
4. **Accessibility First**: WCAG 2.1 AA minimum
5. **Performance**: Core Web Vitals optimaux (LCP < 2.5s, FID < 100ms, CLS < 0.1)

---

## 🏗️ Architecture du Site

### Structure des Pages

```
/
├── / (Accueil)
├── /qui-sommes-nous
├── /services
│   ├── /deratisation
│   ├── /punaises-de-lit
│   ├── /desinsectisation
│   └── /professionnels
├── /tarifs
├── /processus-intervention
├── /chroniques (Blog)
├── /contact
├── /devis
├── /mentions-legales
└── /politique-confidentialite
```

### Composants Clés à Développer

#### 1. Header/Navigation
```jsx
// Fonctionnalités requises:
- Logo animé au scroll (réduction de taille)
- Menu hamburger mobile avec animation fluide
- Mega menu desktop pour Services
- CTA flottant "Urgence 24/7" avec numéro
- Indicateur de page active
- Sticky header avec effet glassmorphism au scroll
```

#### 2. Hero Section (Page d'accueil)
```jsx
// Éléments essentiels:
- Vidéo de fond (vélo cargo en action) avec overlay subtil
- Titre principal avec animation de texte (typewriter ou fade-in)
- Sous-titre mettant en avant l'approche écologique
- 2 CTAs principaux: "Devis Gratuit" et "Urgence 24/7"
- Badge "Certifié Certibiocide"
- Animation parallax subtile au scroll
```

#### 3. Section USP (Unique Selling Points)
```jsx
// Points de différenciation:
- Vélo cargo électrique (icône animée)
- Intervention 24/7
- Approche écologique
- Certifié par le Ministère
- Garantie résultat
// Présentation: Cards avec hover effects et animations au scroll
```

#### 4. Services Grid
```jsx
// Layout moderne avec:
- Cards interactives avec images
- Effet de hover avec transformation 3D légère
- Quick preview au hover
- Animation stagger au scroll (apparition progressive)
- Lien vers page détaillée
```

#### 5. Processus d'Intervention
```jsx
// Timeline interactive:
1. Contact initial
2. État des lieux
3. Traitement adapté
4. Suivi personnalisé
5. Rapport d'intervention
// Avec progression animée et détails expandables
```

#### 6. Section Tarifs
```jsx
// Tableau de prix moderne:
- Toggle Particuliers/Professionnels
- Pricing cards avec effet glassmorphism
- Mise en avant du "Plus populaire"
- Calculateur de devis interactif
- Animation de compteur pour les prix
```

#### 7. Testimonials/Avis
```jsx
// Carousel moderne:
- Intégration Google Reviews API
- Auto-play avec pause au hover
- Cards avec photos clients (si disponibles)
- Note moyenne animée (étoiles)
- Infinite scroll ou pagination dots
```

#### 8. Blog/Chroniques
```jsx
// Grid moderne avec:
- Filtres par catégorie animés
- Search en temps réel
- Cards avec image, titre, excerpt
- Temps de lecture estimé
- Tags cliquables
- Pagination ou infinite scroll
- Animation de skeleton loading
```

#### 9. Footer
```jsx
// Footer informatif avec:
- Newsletter signup avec animation de succès
- Liens rapides organisés
- Réseaux sociaux avec hover effects
- Certifications et agréments
- Map interactive zone d'intervention
- Coordonnées avec click-to-call
```

---

## 🚀 Fonctionnalités Techniques Avancées

### 1. Performance & SEO
```javascript
// Next.js optimizations
- Static Generation (SSG) pour pages statiques
- ISR pour blog posts
- Dynamic imports pour components lourds
- Image optimization avec next/image
- Font optimization avec next/font
- Sitemap.xml automatique
- Robots.txt optimisé
- Schema.org markup (LocalBusiness, Service)
- Open Graph tags dynamiques
- Twitter Cards
```

### 2. Formulaires Intelligents
```javascript
// Fonctionnalités:
- Validation en temps réel avec Zod
- Multi-step form pour devis complexes
- Upload de photos pour diagnostic
- Géolocalisation pour zone d'intervention
- Calendrier de réservation intégré
- Envoi email avec Resend ou SendGrid
- Confirmation animée après soumission
```

### 3. Intégrations Tierces
```javascript
// APIs à intégrer:
- Google Maps (zone d'intervention)
- Google Reviews
- WhatsApp Business API
- Google Calendar (prise de RDV)
- Instagram Feed (optionnel)
- Analytics (GA4 + Vercel Analytics)
- Crisp ou Intercom (chat support)
```

### 4. Animations & Interactions
```javascript
// Framer Motion patterns:
- Scroll-triggered animations
- Page transitions fluides
- Parallax effects subtils
- Hover animations 3D
- Loading states créatifs
- Progress indicators
- Smooth scroll avec offset
- Cursor custom (desktop)
```

### 5. PWA Features
```javascript
// Progressive Web App:
- Service Worker pour offline
- App manifest
- Push notifications (urgences)
- Add to homescreen prompt
- Offline fallback pages
```

---

## 📱 Responsive Design Breakpoints

```css
/* Tailwind Config */
screens: {
  'xs': '475px',    // Petits mobiles
  'sm': '640px',    // Mobiles
  'md': '768px',    // Tablettes portrait
  'lg': '1024px',   // Tablettes paysage
  'xl': '1280px',   // Desktop
  '2xl': '1536px',  // Large desktop
  '3xl': '1920px'   // Ultra wide
}
```

---

## 🔧 Configuration Next.js Recommandée

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  experimental: {
    optimizeCss: true,
  },
}
```

---

## 📦 Structure de Dossiers Recommandée

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── [pages...]
│   ├── api/
│   │   ├── contact/
│   │   ├── devis/
│   │   └── newsletter/
│   └── globals.css
├── components/
│   ├── ui/           # Composants réutilisables
│   ├── layout/       # Header, Footer, etc.
│   ├── sections/     # Sections de pages
│   └── forms/        # Formulaires
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── animations.ts
├── hooks/            # Custom React hooks
├── types/            # TypeScript types
└── public/
    ├── images/
    ├── videos/
    └── fonts/
```

---

## 🎯 Checklist de Développement

### Phase 1: Foundation (Semaine 1)
- [ ] Setup Next.js avec TypeScript
- [ ] Configuration Tailwind CSS avec custom theme
- [ ] Structure de base des pages
- [ ] Header/Footer responsive
- [ ] Navigation fonctionnelle
- [ ] SEO de base

### Phase 2: Core Features (Semaine 2)
- [ ] Page d'accueil complète
- [ ] Pages de services
- [ ] Formulaire de contact
- [ ] Intégration Google Maps
- [ ] Section tarifs
- [ ] Processus d'intervention

### Phase 3: Advanced Features (Semaine 3)
- [ ] Blog/Chroniques avec CMS headless
- [ ] Système de devis interactif
- [ ] Animations Framer Motion
- [ ] Optimisation performances
- [ ] Tests responsives
- [ ] PWA features

### Phase 4: Polish & Launch (Semaine 4)
- [ ] Intégration analytics
- [ ] A/B testing setup
- [ ] Optimisation images/vidéos
- [ ] Tests cross-browser
- [ ] Documentation
- [ ] Déploiement Vercel

---

## 🎨 Inspirations Spécifiques à Implémenter

### De Urban Arrow:
- Vidéo hero avec overlay subtil
- Navigation sticky élégante
- Couleurs vives sur fond neutre

### De Apple:
- Animations de scroll fluides
- Typography bold et minimale
- Espaces blancs généreux

### De Dose:
- Interactions dynamiques
- Contrastes de couleurs marqués
- Navigation intuitive

### Des sites concurrents appréciés:
- Structure claire de lesderatiseursmodernes.com
- Élégance sobre d'opunaise.com
- Professionnalisme de docteur-nuisibles.com

---

## 📝 Contenus Spécifiques à Intégrer

### Textes Clés:
- **Headline**: "Dératisation Premium & Écologique à Paris"
- **Tagline**: "Le vélo cargo au service de votre tranquillité"
- **CTA Principal**: "Intervention Express 24/7"
- **Certification**: "Agréé Certibiocide - Ministère de la Transition Écologique"

### Coordonnées:
- **Téléphone**: 06 63 61 41 57
- **Email**: contact@ndbnuisibles.com
- **WhatsApp**: Lien direct vers conversation
- **Zone**: Paris et Île-de-France

### Réseaux Sociaux:
- Instagram: @ndbnuisibles
- LinkedIn: NDB Nuisibles
- Google My Business: À configurer

---

## ⚡ Points Critiques pour le Succès

1. **Performance Mobile**: Le site doit être ultra-rapide sur mobile (majorité du trafic)
2. **SEO Local**: Optimisation pour "dératisation Paris" et variantes
3. **Conversion**: CTAs visibles et processus de contact simplifié
4. **Trust Signals**: Certifications, avis, garanties bien visibles
5. **Différenciation**: Le vélo cargo doit être LE point de différenciation visible
6. **Urgence**: Mise en avant du 24/7 et intervention rapide

---

## 🚦 Métriques de Succès

- **Core Web Vitals**: Tous en vert
- **Lighthouse Score**: > 95 sur toutes les catégories
- **Taux de conversion**: > 5% (visiteur → contact)
- **Temps de chargement**: < 2 secondes
- **Taux de rebond**: < 40%
- **Mobile usability**: Score parfait Google

---

## 💡 Recommandations Finales

1. **Commencer simple**: MVP fonctionnel puis itérations
2. **Mobile-first**: Développer d'abord pour mobile
3. **Tests utilisateurs**: Dès le MVP, tester avec de vrais users
4. **Analytics dès le début**: Pour mesurer et optimiser
5. **Accessibilité**: Ne pas la négliger, c'est aussi du SEO
6. **Documentation**: Commenter le code pour maintenance future

Ce site doit incarner la modernité, l'efficacité et l'approche écologique unique de NDB Nuisibles. Chaque élément doit servir à convertir les visiteurs en clients tout en construisant une image de marque premium et responsable.