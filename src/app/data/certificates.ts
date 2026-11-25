import type { L } from '../core/i18n.service';

export interface Certificate {
  id: string;
  /** Nombre oficial del curso, tal como aparece en el certificado */
  title: string;
  issuer: string;
  platform: string;
  date: L;
  detail?: L;
  image: string;
  pdf: string;
  verifyUrl?: string;
  relatedRepo?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: 'coursera-dotnet',
    title: 'Back-End Development with .NET',
    issuer: 'Microsoft',
    platform: 'Coursera',
    date: { es: 'Nov 2026', en: 'Nov 2026' },
    detail: { es: 'Curso autorizado por Microsoft', en: 'Course authorized by Microsoft' },
    image: 'certificates/coursera-dotnet.webp',
    pdf: 'certificates/coursera-dotnet.pdf',
    verifyUrl: 'https://coursera.org/verify/G7N5HJQWGCLR',
    relatedRepo: 'https://github.com/georgemontero1211-spec/coursera-assignment-backend-development',
  },
  {
    id: 'udemy-react-ts',
    title: 'React y TypeScript – La Guía Completa Creando +10 Proyectos',
    issuer: 'Juan Pablo De la Torre Valdez',
    platform: 'Udemy',
    date: { es: 'Ene 2026', en: 'Jan 2026' },
    detail: { es: '58 horas', en: '58 hours' },
    image: 'certificates/udemy-react-ts.webp',
    pdf: 'certificates/udemy-react-ts.pdf',
    verifyUrl: 'https://ude.my/UC-76df79b2-d0b6-466c-a3ac-fe460c13269c',
  },
  {
    id: 'cisco-ite',
    title: 'IT Essentials (ITE 7.01)',
    issuer: 'Cisco Networking Academy',
    platform: 'ITLA',
    date: { es: 'Abr 2026', en: 'Apr 2026' },
    detail: { es: 'Hardware, sistemas operativos y redes', en: 'Hardware, operating systems and networking' },
    image: 'certificates/cisco-ite.webp',
    pdf: 'certificates/cisco-ite.pdf',
  },
];
