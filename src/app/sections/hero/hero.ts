import { Component, inject } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { PROFILE } from '../../data/profile';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly i18n = inject(I18nService);
}
