import type { L } from '../core/i18n.service';

export interface ProjectLink {
  label: L;
  url: string;
  kind: 'demo' | 'repo';
}

export interface Project {
  id: string;
  title: L;
  badge: L;
  badgeTone: 'live' | 'personal';
  description: L;
  highlights: L[];
  stack: string[];
  image: string;
  imageAlt: L;
  frameUrl: L;
  links: ProjectLink[];
  featured?: boolean;
}

const GH = 'https://github.com/georgemontero1211-spec';
const VIEW_CODE: L = { es: 'Ver código', en: 'View code' };

export const PROJECTS: Project[] = [
  {
    id: 'sysgenda',
    title: { es: 'Sysgenda', en: 'Sysgenda' },
    badge: { es: 'Cliente real · En producción', en: 'Real client · In production' },
    badgeTone: 'live',
    description: {
      es: 'Sistema de gestión clínica full-stack que usa a diario una clínica privada: agenda por médico, consultas con diagnóstico CIE-10, recetas imprimibles, ventas, dashboard financiero y cierre de caja, con permisos por rol.',
      en: 'Full-stack clinic management system used daily by a private clinic: per-doctor scheduling, consultations with ICD-10 diagnoses, printable prescriptions, sales, a financial dashboard and daily cash closing, with role-based permissions.',
    },
    highlights: [
      { es: '3 roles', en: '3 roles' },
      { es: '13 módulos', en: '13 modules' },
      { es: 'CIE-10', en: 'ICD-10' },
      { es: 'JWT + RBAC', en: 'JWT + RBAC' },
    ],
    stack: ['.NET 10', 'EF Core', 'PostgreSQL', 'React', 'TanStack Query', 'Docker'],
    image: 'projects/sysgenda.webp',
    imageAlt: {
      es: 'Dashboard financiero de Sysgenda con ingresos del mes y gráfico por período',
      en: 'Sysgenda financial dashboard with monthly revenue and a revenue-over-time chart',
    },
    frameUrl: { es: 'sysgenda · panel administrativo', en: 'sysgenda · admin panel' },
    links: [{ label: VIEW_CODE, url: `${GH}/sysgenda`, kind: 'repo' }],
    featured: true,
  },
  {
    id: 'uptask',
    title: { es: 'UpTask', en: 'UpTask' },
    badge: { es: 'Proyecto personal · Full-Stack', en: 'Personal project · Full-Stack' },
    badgeTone: 'personal',
    description: {
      es: 'Gestor de proyectos colaborativo: tablero de tareas por estado, equipos con manager y colaboradores, notas por tarea y registro con confirmación por email.',
      en: 'Collaborative project manager: a task board by status, teams with a manager and collaborators, notes on each task and sign-up with email confirmation.',
    },
    highlights: [
      { es: '5 estados', en: '5 statuses' },
      { es: 'Equipos', en: 'Teams' },
      { es: 'Notas', en: 'Notes' },
    ],
    stack: ['MongoDB', 'Express', 'React', 'TanStack Query', 'JWT'],
    image: 'projects/uptask.webp',
    imageAlt: {
      es: 'Tablero de UpTask con tareas en columnas por estado',
      en: 'UpTask board with tasks in columns by status',
    },
    frameUrl: { es: 'uptask · tablero del proyecto', en: 'uptask · project board' },
    links: [{ label: VIEW_CODE, url: `${GH}/UpTask-Main`, kind: 'repo' }],
  },
  {
    id: 'cripto',
    title: { es: 'Cotizador Cripto', en: 'Crypto Price Tracker' },
    badge: { es: 'Proyecto personal · Frontend', en: 'Personal project · Frontend' },
    badgeTone: 'personal',
    description: {
      es: 'Cotizador de criptomonedas en tiempo real con la API pública de CoinGecko, respuestas validadas con Zod y aviso cuando la API alcanza su límite de consultas.',
      en: 'Real-time cryptocurrency price tracker using the public CoinGecko API, with responses validated by Zod and a notice when the API hits its rate limit.',
    },
    highlights: [
      { es: 'Precios en vivo', en: 'Live prices' },
      { es: '4 monedas', en: '4 currencies' },
    ],
    stack: ['React', 'Zustand', 'Zod', 'CoinGecko API'],
    image: 'projects/cripto.webp',
    imageAlt: {
      es: 'Cotización de Bitcoin en dólares en el Cotizador Cripto',
      en: 'Bitcoin price in US dollars in the Crypto Price Tracker',
    },
    frameUrl: { es: 'cotizador-cripto · demo', en: 'crypto-tracker · demo' },
    links: [{ label: VIEW_CODE, url: `${GH}/cripto-react-typescript`, kind: 'repo' }],
  },
  {
    id: 'portafolio',
    title: { es: 'Este portafolio', en: 'This portfolio' },
    badge: { es: 'Proyecto personal · Angular', en: 'Personal project · Angular' },
    badgeTone: 'personal',
    description: {
      es: 'Este mismo sitio, construido desde cero con Angular: componentes standalone, signals, modo oscuro y versión en inglés.',
      en: 'This very site, built from scratch with Angular: standalone components, signals, dark mode and a Spanish/English version.',
    },
    highlights: [
      { es: 'Responsive', en: 'Responsive' },
      { es: 'ES / EN', en: 'ES / EN' },
    ],
    stack: ['Angular 22', 'TypeScript', 'Signals', 'CSS'],
    image: 'projects/portafolio.webp',
    imageAlt: { es: 'Página de inicio de este portafolio', en: 'Home page of this portfolio' },
    frameUrl: { es: 'portafolio · inicio', en: 'portfolio · home' },
    links: [{ label: VIEW_CODE, url: `${GH}/portafolio`, kind: 'repo' }],
  },
];
