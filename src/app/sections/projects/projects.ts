import { Component, inject } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { PROJECTS } from '../../data/projects';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-projects',
  imports: [Icon],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsSection {
  protected readonly projects = PROJECTS;
  protected readonly i18n = inject(I18nService);
}
