// ═════════════════════════════════════════════════════════════════════════════
//  SITE CONFIG — fichier unique à modifier par client
// ═════════════════════════════════════════════════════════════════════════════

export const siteConfig = {
  // Navigation (landing 1 page)
  nav: [
    { label: 'Services',  href: '#services' },
    { label: 'À propos',  href: '#apropos' },
    { label: 'FAQ',       href: '#faq' },
    { label: 'Contact',   href: '#contact' },
  ],

  // ── 1. INFORMATIONS BUSINESS ───────────────────────────────────────────────
  business: {
    name:     'AV Plomberie',
    tagline:  'Votre expert plomberie et sanitaire de confiance',
    industry: 'plombier',
    icon:     'wrench',
    phone:    '06 24 67 31 10',
    email:    'contact@av-plomberie.fr',
    address: {
      street:     '6 avenue Oche',
      city:       'Monestier de Clermont',
      postalCode: '38650',
      country:    'FR',
    },
    openingHours: {
      monday:    '08:00-18:00',
      tuesday:   '08:00-18:00',
      wednesday: '08:00-18:00',
      thursday:  '08:00-18:00',
      friday:    '08:00-18:00',
      saturday:  null,
      sunday:    null,
    },
    socialLinks: {
      linkedin:  '',
      instagram: '',
      facebook:  '',
      twitter:   '',
    },
    siret:        '',
    availability: 'Disponible',
    urgency: {
      active:    true,
      label:     'Urgence 24h/7j',
      phone:     '06 24 67 31 10',
    },
    serviceArea: [
      'Monestier de Clermont',
      'Isère (38)',
      'Trièves'
    ],
    certifications: [
      { label: 'Intervention Rapide', sublabel: 'Disponibilité 24h/24', icon: '⚡' },
      { label: 'Travail Garanti', sublabel: 'Assurance professionnelle', icon: '🛡️' },
      { label: 'Devis Gratuit', sublabel: 'Tarifs transparents', icon: '✅' },
    ],
    assurance: {
      name:   '',
      numero: '',
    },
  },

  // ── 2. BRANDING ────────────────────────────────────────────────────────────
  branding: {
    primaryColor:    '#0266FF',
    primaryDark:     '#0047BB',
    primarySoft:     '#f8fafc',
    secondaryColor:  '#0f172a',
    accentColor:     '#f08c00',
    fontHeading:     'Outfit',
    fontBody:        'Outfit',
    fontMono:        'Geist Mono',
    logoPath:        '/assets/logo.svg',
    faviconPath:     '/favicon.svg',
  },

  // ── 3. SEO ─────────────────────────────────────────────────────────────────
  seo: {
    titleTemplate:      '%s | AV Plomberie',
    defaultTitle:       'AV Plomberie — Plombier à Monestier de Clermont',
    defaultDescription: 'Entreprise de plomberie professionnelle à Monestier de Clermont. Dépannage urgence 24/7, fuites, sanitaire, chauffage. Devis gratuit.',
    keywords: [
      'plombier',
      'Monestier de Clermont',
      'dépannage plomberie',
      'urgence plomberie',
      'rénovation salle de bain',
      'fuite eau'
    ],
    googleBusinessUrl:   '',
    googleAnalyticsId:   '',
    googleSearchConsole: '',
    bingWebmasterKey:    '',
    plausibleDomain:     '',
    sentryDsn:           '',
    locale:              'fr_FR',
    siteUrl:             'https://av-plomberie.vercel.app',
    ogImage:             '/assets/og-image.jpg',
  },

  // ── 4. DESIGN VARIANTS ─────────────────────────────────────────────────────
  design: {
    isSketchy: false,
    variants: {
      header:       'A',
      hero:         'A',
      services:     'A',
      about:        'A',
      testimonials: 'A',
      pricing:      'A',
      faq:          'A',
      cta:          'A',
      footer:       'A',
    },
  },

  // ── 5. PAGES (multipage) ──────────────────────────────────────────────────
  pages: {
    home: {
      slug:        '/',
      title:       'Accueil',
      description: 'Dépannage et installation plomberie à Monestier de Clermont.',
    },
  },

  // ── 6. FEATURES ────────────────────────────────────────────────────────────
  features: {
    blog:          false,
    booking:       false,
    multilingual:  false,
    pricing:       false,
    testimonials:  true,
    newsletter:    false,
    cookieBanner:  true,
    analytics:     false,
    plausible:     false,
    sentry:        false,
  },

  // ── 7. CONTENT ─────────────────────────────────────────────────────────────
  content: {

    hero: {
      eyebrow:  'PLOMBERIE & SANITAIRE EN ISÈRE',
      h1:       'Votre plombier expert à Monestier de Clermont',
      subtitle: 'Nous intervenons rapidement pour tous vos besoins en plomberie : réparation de fuites, rénovation de salle de bain et dépannage d\'urgence 24h/24 et 7j/7. Un service fiable et de qualité.',
      image:    '/assets/images/placeholder-hero.png',
      cta1:     { label: 'Demander une intervention', href: '#contact' },
      cta2:     { label: 'Découvrir nos services', href: '#services' },
      trust:    ['Dépannage 24/7', 'Devis gratuit', 'Intervention rapide'],
      badge:    { label: 'Avis Client', value: '5/5', sub: 'Excellente satisfaction' },
      infoCard: { status: 'Disponible pour les urgences', hours: '24h/24 - 7j/7', location: '6 avenue Oche, 38650 Monestier de Clermont' },
    },

    services: {
      eyebrow:  '— Nos prestations',
      title:    'Des services complets pour votre plomberie',
      subtitle: 'De la petite réparation à la rénovation complète, nous sommes équipés pour répondre à toutes vos demandes avec professionnalisme.',
      items: [
        {
          icon:  'drop',
          title: 'Recherche et réparation de fuites',
          text:  'Intervention rapide pour stopper et réparer vos fuites d\'eau avant que les dégâts ne s\'aggravent. Diagnostic précis garanti.',
          link:  'Nous contacter →',
          tag:   'Urgence possible',
          features: ['Détection non destructive', 'Réparation immédiate', 'Mise en sécurité'],
        },
        {
          icon:  'bathtub',
          title: 'Installation et rénovation sanitaire',
          text:  'Création ou rénovation de votre salle de bain, installation d\'équipements sanitaires, WC, douches à l\'italienne.',
          link:  'Demander un devis →',
          tag:   'Sur mesure',
          features: ['Conception 3D possible', 'Choix des matériaux', 'Finitions soignées'],
        },
        {
          icon:  'thermometer',
          title: 'Chauffe-eau & Ventilation',
          text:  'Vente, installation et entretien de vos systèmes de ventilation et de production d\'eau chaude sanitaire.',
          link:  'En savoir plus →',
          tag:   'Confort',
          features: ['Chauffe-eau électrique/thermo', 'VMC Simple/Double flux', 'Dépannage rapide'],
        },
      ],
    },

    about: {
      eyebrow: '— À propos de nous',
      title:   'AV Plomberie : L\'expertise locale à votre service',
      text: [
        'AV Plomberie est une entreprise professionnelle offrant des services de qualité supérieure à ses clients dans la région de Monestier de Clermont et le Trièves. Nos plombiers expérimentés sont bien équipés pour répondre à tous vos besoins.',
        'Nous sommes passionnés par notre métier et déterminés à offrir une expérience client exceptionnelle à chaque intervention. Nous avons à cœur de fournir des services fiables, rapides et abordables, avec une disponibilité 24h/24 et 7j/7 pour les urgences.'
      ],
      stats: [
        { value: '24/7',   label: 'Disponibilité' },
        { value: '100%',  label: 'Engagement Qualité' },
        { value: '38',  label: 'Interventions en Isère' },
      ],
      cta:    { label: 'Contactez-nous', href: '#contact' },
      image:  '/assets/images/placeholder-about.png',
      author: { name: 'Équipe', role: 'AV Plomberie', image: '/assets/images/placeholder-portrait.png' },
    },

    testimonials: {
      eyebrow:   '— Témoignages',
      title:     'Ce que nos clients disent de nous',
      ratingStr: '5 / 5 · Basé sur les avis clients',
      items: [
        {
          quote:   'Intervention ultra rapide pour une fuite un dimanche soir. Le plombier a été très professionnel et les tarifs sont restés raisonnables malgré l\'urgence. Je recommande les yeux fermés !',
          name:    'Client Local',
          role:    'Monestier de Clermont',
          initial: 'C',
        },
      ],
    },

    pricing: {
      eyebrow:  '— Tarifs',
      title:    'Nos Tarifs',
      subtitle: '',
      plans: [],
    },

    faq: {
      eyebrow: '— Questions fréquentes',
      title:   'Vos questions sur nos interventions',
      items: [
        { q: 'Intervenez-vous en urgence la nuit ou le week-end ?', a: 'Oui, nous sommes à votre disposition 24h/24 et 7j/7 pour toutes vos urgences en plomberie.' },
        { q: 'Faites-vous des devis gratuits pour la rénovation de salle de bain ?', a: 'Absolument. Nous nous déplaçons chez vous pour évaluer votre projet et vous fournir un devis détaillé gratuitement.' },
        { q: 'Quels sont vos délais d\'intervention classiques ?', a: 'Pour les urgences (fuite importante, dégât des eaux), nous intervenons dans les plus brefs délais. Pour les installations, nous planifions ensemble la date qui vous convient.' },
      ],
    },

    cta: {
      eyebrow:  'BESOIN D\'UN PLOMBIER ?',
      title:    'Contactez-nous dès aujourd\'hui',
      subtitle: 'Nous sommes prêts à intervenir pour réparer, installer ou rénover vos équipements de plomberie.',
      cta1:     { label: 'Appeler le 06 24 67 31 10', href: 'tel:+33624673110' },
      cta2:     { label: 'Demander un devis',  href: '#contact' },
    },

    contact: {
      eyebrow:        '— Contact',
      title:          'Demande d\'intervention',
      subtitle: 'Remplissez le formulaire ci-dessous ou appelez-nous directement. Pour une urgence, privilégiez toujours le téléphone.',
      successMessage: 'Votre demande a bien été envoyée. Nous vous recontactons dans les meilleurs délais.',
      formTypes:      ['Urgence Fuite', 'Devis Rénovation', 'Entretien Chauffe-eau', 'Autre'],
    },
    
    certifications: {
      eyebrow:  '— Notre Engagement',
      title:    'Un travail soigné et garanti',
      subtitle: 'Nous mettons un point d\'honneur à respecter les normes en vigueur et à assurer la satisfaction de nos clients sur chaque chantier.',
    },

    footer: {
      description: 'AV Plomberie, votre artisan plombier de confiance à Monestier de Clermont. Interventions d\'urgence et rénovations.',
      links: [
        { label: 'Services',  href: '#services' },
        { label: 'À propos',  href: '#apropos' },
        { label: 'FAQ',       href: '#faq' },
        { label: 'Contact',   href: '#contact' },
      ],
      legal: [
        { label: 'Mentions légales', href: '/mentions-legales' },
        { label: 'CGV',              href: '/cgv' },
        { label: 'RGPD',             href: '/rgpd' },
      ],
      madeBy: 'Site réalisé par <a href="https://guyboireau.com" rel="noopener" target="_blank">guyboireau.com</a>',
    },
    
    portfolio: {
      items: []
    },

  }, // fin content

} as const;

// ─── Re-exports nommés (compat avec les composants existants) ──────────────
export type Variant = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export const { business, branding, seo, design, features, pages, nav, content } = siteConfig;
export const variants      = siteConfig.design.variants;
export const hero          = siteConfig.content.hero;
export const services      = siteConfig.content.services;
export const about         = siteConfig.content.about;
export const testimonials  = siteConfig.content.testimonials;
export const pricing       = siteConfig.content.pricing;
export const faq           = siteConfig.content.faq;
export const cta           = siteConfig.content.cta;
export const contact       = siteConfig.content.contact;
export const footer        = siteConfig.content.footer;
export const portfolio     = siteConfig.content.portfolio;
export const certifications = siteConfig.content.certifications;
