import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly quickLinks = [
    { label: 'Home',         href: '#home' },
    { label: 'Services',     href: '#services' },
    { label: 'About',        href: '#about' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Portfolio',    href: '#portfolio' },
    { label: 'Contact',      href: '#contact' },
  ];

  readonly services = [
    'Angular Development',
    'Native Mobile Apps',
    'Progressive Web Apps',
    'UI/UX Design',
    'API Integration',
    'Maintenance & Support',
  ];
}
