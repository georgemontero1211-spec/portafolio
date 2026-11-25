import { Component, inject } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { EXPERIENCE } from '../../data/experience';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-experience',
  imports: [Icon],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceSection {
  protected readonly items = EXPERIENCE;
  protected readonly i18n = inject(I18nService);
}
