import type { L } from '../core/i18n.service';

export interface Experience {
  organization: string;
  role: L;
  period: L;
  tags: L[];
  description: L;
  kind: 'work' | 'education';
}

export const EXPERIENCE: Experience[] = [
  {
    organization: 'Banco BHD',
    role: { es: 'Soporte de TI', en: 'IT Support' },
    period: { es: 'Abr 2026 – Actualidad', en: 'Apr 2026 – Present' },
    tags: [
      { es: 'Python', en: 'Python' },
      { es: 'C#', en: 'C#' },
      { es: 'PowerShell', en: 'PowerShell' },
    ],
    description: {
      es: 'Automaticé la actualización masiva de BIOS: el script detecta el modelo de cada equipo, descarga la versión correcta y programa la tarea en Windows. Creo herramientas que eliminan trabajo manual en TI y resuelvo incidentes de hardware, software y Active Directory.',
      en: 'I automated bulk BIOS updates: the script detects each machine’s model, downloads the right version and schedules the task in Windows. I build tools that remove manual IT work and resolve hardware, software and Active Directory incidents.',
    },
    kind: 'work',
  },
  {
    organization: 'Banco Confisa',
    role: { es: 'Pasante de Desarrollo Full-Stack', en: 'Full-Stack Development Intern' },
    period: { es: 'Oct 2024 – Sep 2025', en: 'Oct 2024 – Sep 2025' },
    tags: [
      { es: 'React', en: 'React' },
      { es: 'TypeScript', en: 'TypeScript' },
      { es: 'Python', en: 'Python' },
    ],
    description: {
      es: 'Desarrollé una aplicación de transcripción de audio para que el área de satisfacción al cliente organice y analice sus llamadas grabadas: transcripción automática en Python e interfaz en React y TypeScript.',
      en: 'I developed an audio transcription app so the customer satisfaction team could organize and analyze recorded calls: automatic transcription in Python and a React and TypeScript interface.',
    },
    kind: 'work',
  },
  {
    organization: 'ITLA',
    role: { es: 'Desarrollo de Software', en: 'Software Development' },
    period: { es: 'Ene 2026 – En curso', en: 'Jan 2026 – In progress' },
    tags: [{ es: 'Educación', en: 'Education' }],
    description: {
      es: 'Carrera técnica en el Instituto Tecnológico de las Américas, Santo Domingo.',
      en: 'Technical degree at the Instituto Tecnológico de las Américas (ITLA), Santo Domingo.',
    },
    kind: 'education',
  },
];
