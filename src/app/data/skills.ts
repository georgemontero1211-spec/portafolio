import type { L } from '../core/i18n.service';
import type { IconName } from '../shared/icon/icon';

export interface SkillGroup {
  title: L;
  icon: IconName;
  items: L[];
}

/** Para nombres de tecnologías que no cambian entre idiomas */
const same = (text: string): L => ({ es: text, en: text });

export const SKILLS: SkillGroup[] = [
  {
    title: same('Backend'),
    icon: 'server',
    items: [
      { es: 'C# y .NET / ASP.NET Core', en: 'C# and .NET / ASP.NET Core' },
      same('Entity Framework Core'),
      same('MediatR'),
      { es: 'APIs REST', en: 'REST APIs' },
      same('Python'),
      { es: 'Node.js y Express', en: 'Node.js and Express' },
    ],
  },
  {
    title: same('Frontend'),
    icon: 'layout',
    items: [
      same('React'),
      same('TypeScript'),
      same('Angular'),
      same('TanStack Query'),
      same('Vite'),
      { es: 'HTML y CSS', en: 'HTML and CSS' },
    ],
  },
  {
    title: { es: 'Datos y DevOps', en: 'Data & DevOps' },
    icon: 'database',
    items: [
      same('SQL Server'),
      same('PostgreSQL'),
      same('MySQL'),
      same('MongoDB'),
      same('Docker'),
      { es: 'Git, GitHub, Linux y PowerShell', en: 'Git, GitHub, Linux and PowerShell' },
    ],
  },
  {
    title: { es: 'Prácticas e idiomas', en: 'Practices & languages' },
    icon: 'shield',
    items: [
      same('Clean Architecture'),
      { es: 'Autenticación JWT', en: 'JWT authentication' },
      { es: 'Control de acceso por roles (RBAC)', en: 'Role-based access control (RBAC)' },
      { es: 'Español (nativo)', en: 'Spanish (native)' },
      { es: 'Inglés (B1)', en: 'English (B1)' },
    ],
  },
];
