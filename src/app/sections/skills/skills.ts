import { Component, inject } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { SKILLS } from '../../data/skills';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-skills',
  imports: [Icon],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsSection {
  protected readonly groups = SKILLS;
  protected readonly i18n = inject(I18nService);
}
