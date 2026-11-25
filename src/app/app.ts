import { Component } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { ExperienceSection } from './sections/experience/experience';
import { ProjectsSection } from './sections/projects/projects';
import { CertificatesSection } from './sections/certificates/certificates';
import { SkillsSection } from './sections/skills/skills';
import { ContactSection } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Footer,
    Hero,
    ExperienceSection,
    ProjectsSection,
    CertificatesSection,
    SkillsSection,
    ContactSection,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
