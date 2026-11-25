import { Component, inject, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { PROFILE } from '../../data/profile';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-contact',
  imports: [Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactSection {
  protected readonly profile = PROFILE;
  protected readonly i18n = inject(I18nService);
  protected readonly copied = signal(false);

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Sin permiso de portapapeles: abrir el cliente de correo como alternativa
      window.location.href = `mailto:${this.profile.email}`;
    }
  }
}
