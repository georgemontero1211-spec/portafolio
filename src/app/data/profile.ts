import type { L } from '../core/i18n.service';

export interface Profile {
  name: string;
  shortName: string;
  role: L;
  tag: string;
  summary: L;
  location: L;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  photo: string;
}

export const PROFILE: Profile = {
  name: 'George Montero Nuñez',
  shortName: 'George Montero',
  role: {
    es: 'Desarrollador de Software · Backend .NET y Full-Stack',
    en: 'Software Developer · .NET Backend & Full-Stack',
  },
  tag: 'ITLA · Sysgenda',
  summary: {
    es:
      'Desarrollo APIs con C# y .NET y aplicaciones full-stack con React y TypeScript. ' +
      'Construí Sysgenda, un sistema de gestión clínica que hoy funciona en producción en una clínica real, ' +
      'y automatizo operaciones de TI con Python, C# y PowerShell.',
    en:
      'I build APIs with C# and .NET and full-stack applications with React and TypeScript. ' +
      'I built Sysgenda, a clinic management system now running in production at a real medical clinic, ' +
      'and I automate IT operations with Python, C# and PowerShell.',
  },
  location: {
    es: 'Santo Domingo, República Dominicana',
    en: 'Santo Domingo, Dominican Republic',
  },
  email: 'georgemontero1211@gmail.com',
  github: 'https://github.com/georgemontero1211-spec',
  linkedin: 'https://www.linkedin.com/in/george-montero-nu%C3%B1ez-78970a327/',
  cv: 'cv/George_Montero_CV.pdf',
  photo: 'img/george-montero.webp',
};
