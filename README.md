# Portafolio — George Montero Nuñez

Portafolio personal de desarrollador de software, construido desde cero con **Angular**. Presenta mi experiencia, mis proyectos destacados, certificaciones y stack técnico, con **modo oscuro** y versión en **español e inglés**.

## Secciones

- **Presentación**: perfil, resumen y descarga del CV.
- **Experiencia**: Banco BHD, Banco Confisa e ITLA.
- **Proyectos destacados**: Sysgenda (cliente real en producción), UpTask, Cotizador Cripto y este portafolio, cada uno con captura en un marco de navegador.
- **Certificaciones**: Microsoft (Coursera), Udemy y Cisco Networking Academy, con enlace de verificación y PDF.
- **Stack técnico** y **contacto**.

## Características

- **Angular 22** con componentes standalone y **signals**.
- **Modo claro/oscuro**: sigue el tema del sistema en la primera visita y recuerda la elección del visitante. Un script en línea aplica el tema antes de que cargue Angular para evitar el destello.
- **Español / inglés**: detecta el idioma del navegador, recuerda la elección y traduce también el título de la página y la descripción.
- **Diseño responsive** sin scroll horizontal en móvil.
- **Accesibilidad**: etiquetas ARIA traducidas, foco visible y respeto de `prefers-reduced-motion`.
- Imágenes optimizadas en **WebP**.
- Sin dependencias de UI: CSS propio con variables de diseño.

## Estructura

```
src/app/
├── core/          # ThemeService, I18nService y textos de la interfaz
├── data/          # Contenido bilingüe: perfil, experiencia, proyectos, certificados, stack
├── layout/        # Barra de navegación y pie de página
├── sections/      # Presentación, experiencia, proyectos, certificaciones, stack, contacto
└── shared/icon/   # Iconos SVG en línea
public/            # Foto, capturas de proyectos, certificados y CV
```

El contenido está separado de los componentes: para actualizar el portafolio basta con editar los archivos de `src/app/data/`.

## Cómo ejecutarlo

Requisitos: Node.js 20+ y npm.

```bash
npm install
npm start          # http://localhost:4200
```

| Script          | Descripción                                   |
| --------------- | --------------------------------------------- |
| `npm start`     | Servidor de desarrollo                        |
| `npm run build` | Build de producción en `dist/portafolio/browser` |

## Despliegue

Es un sitio estático. En **Vercel** se detecta como proyecto Angular automáticamente; el directorio de salida es `dist/portafolio/browser`.

## Contacto

- Email: [georgemontero1211@gmail.com](mailto:georgemontero1211@gmail.com)
- LinkedIn: [George Montero Nuñez](https://www.linkedin.com/in/george-montero-nu%C3%B1ez-78970a327/)
- GitHub: [georgemontero1211-spec](https://github.com/georgemontero1211-spec)
