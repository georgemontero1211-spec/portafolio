import { Component, inject } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { PROFILE } from '../../data/profile';
import { ThemeService } from '../../core/theme.service';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-navbar',
  imports: [Icon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly profile = PROFILE;
  protected readonly theme = inject(ThemeService);
  protected readonly i18n = inject(I18nService);
}
