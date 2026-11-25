/** Textos fijos de la interfaz (botones, títulos, etiquetas de accesibilidad). */
const es = {
  meta: {
    title: 'George Montero · Desarrollador de Software',
    description:
      'Portafolio de George Montero Nuñez, desarrollador de software backend .NET y full-stack con React y TypeScript.',
  },
  nav: {
    switchLang: 'Cambiar idioma a inglés',
    langLabel: 'EN',
    toDark: 'Activar modo oscuro',
    toLight: 'Activar modo claro',
  },
  hero: {
    downloadCv: 'Descargar CV',
    sendEmail: 'Enviar email',
    photoAlt: 'Foto de George Montero Nuñez',
  },
  sections: {
    experience: 'Experiencia',
    projects: 'Proyectos destacados',
    certificates: 'Certificaciones',
    skills: 'Stack técnico',
    contact: '¿Trabajamos juntos?',
  },
  projects: {
    highlights: 'Aspectos destacados',
    live: 'En vivo',
    codeSoon: 'Código disponible próximamente',
  },
  certificates: {
    verify: 'Verificar',
    viewPdf: 'Ver PDF',
    finalProject: 'Proyecto final',
    open: 'Abrir certificado',
    alt: 'Certificado',
  },
  contact: {
    lead: 'Estoy abierto a oportunidades como desarrollador backend .NET o full-stack. Escríbeme y te respondo pronto.',
    copyEmail: 'Copiar email',
    copied: 'Copiado',
    location: 'Santo Domingo, RD',
    writeMe: 'Escríbeme',
    cv: 'CV',
  },
  footer: {
    builtWith: 'Diseñado y desarrollado con Angular.',
    backToTop: 'Volver arriba',
  },
};

export type UiStrings = typeof es;

const en: UiStrings = {
  meta: {
    title: 'George Montero · Software Developer',
    description:
      'Portfolio of George Montero Nuñez, a .NET backend and full-stack software developer working with React and TypeScript.',
  },
  nav: {
    switchLang: 'Switch language to Spanish',
    langLabel: 'ES',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
  },
  hero: {
    downloadCv: 'Download CV',
    sendEmail: 'Send email',
    photoAlt: 'Photo of George Montero Nuñez',
  },
  sections: {
    experience: 'Experience',
    projects: 'Featured projects',
    certificates: 'Certifications',
    skills: 'Tech stack',
    contact: "Let's work together",
  },
  projects: {
    highlights: 'Highlights',
    live: 'Live',
    codeSoon: 'Code coming soon',
  },
  certificates: {
    verify: 'Verify',
    viewPdf: 'View PDF',
    finalProject: 'Final project',
    open: 'Open certificate',
    alt: 'Certificate',
  },
  contact: {
    lead: "I'm open to opportunities as a .NET backend or full-stack developer. Send me a message and I'll get back to you soon.",
    copyEmail: 'Copy email',
    copied: 'Copied',
    location: 'Santo Domingo, DR',
    writeMe: 'Email me',
    cv: 'CV',
  },
  footer: {
    builtWith: 'Designed and built with Angular.',
    backToTop: 'Back to top',
  },
};

export const UI = { es, en };
