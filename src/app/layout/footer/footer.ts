import { Component, inject } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { PROFILE } from '../../data/profile';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  template: `
    @let ui = i18n.ui();
    <footer class="container footer">
      <p>© {{ year }} {{ profile.name }} · {{ ui.footer.builtWith }}</p>
      <a href="#inicio" class="top">
        {{ ui.footer.backToTop }}
        <app-icon name="arrow-up" />
      </a>
    </footer>
  `,
  styles: `
    .footer {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding-top: 28px;
      padding-bottom: 36px;
      color: var(--text-subtle);
      font-size: 0.85rem;
    }
    /* Línea superior alineada con el contenido (igual que la barra de navegación) */
    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: var(--gutter);
      right: var(--gutter);
      height: 1px;
      background: var(--border);
    }
    .top {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 600;
      --icon-size: 14px;
    }
    .top:hover {
      color: var(--accent);
    }
    @media (max-width: 560px) {
      .footer {
        flex-direction: column;
        text-align: center;
      }
    }
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly i18n = inject(I18nService);
  protected readonly year = new Date().getFullYear();
}
