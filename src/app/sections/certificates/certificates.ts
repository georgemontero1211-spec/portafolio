import { Component, inject } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { CERTIFICATES } from '../../data/certificates';
import { I18nService } from '../../core/i18n.service';

@Component({
  selector: 'app-certificates',
  imports: [Icon],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class CertificatesSection {
  protected readonly certificates = CERTIFICATES;
  protected readonly i18n = inject(I18nService);
}
