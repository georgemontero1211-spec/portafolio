import { Injectable, computed, effect, signal } from '@angular/core';
import { UI } from './ui-strings';

export type Lang = 'es' | 'en';

/** Texto en los dos idiomas del sitio. */
export interface L {
  es: string;
  en: string;
}

const STORAGE_KEY = 'lang';

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    /* sin almacenamiento */
  }
  return (navigator.language ?? 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
}

/** Idioma activo (español / inglés). Recuerda la elección; si no hay, usa el idioma del navegador. */
@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(initialLang());

  /** Textos fijos de la interfaz en el idioma activo. */
  readonly ui = computed(() => UI[this.lang()]);

  constructor() {
    effect(() => {
      const ui = this.ui();
      document.documentElement.lang = this.lang();
      document.title = ui.meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', ui.meta.description);
    });
  }

  /** Devuelve el texto en el idioma activo. Se puede usar en plantillas (es reactivo). */
  t(text: L): string {
    return text[this.lang()];
  }

  toggle(): void {
    const next: Lang = this.lang() === 'es' ? 'en' : 'es';
    this.lang.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* sin almacenamiento */
    }
  }
}
