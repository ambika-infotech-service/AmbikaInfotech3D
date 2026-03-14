import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  accentColor: string;
}

const SERVICES: Service[] = [
  {
    icon: 'bi-code-slash',
    title: 'Angular Web Development',
    description:
      'High-performance, scalable single-page applications built with the latest Angular — leveraging signals, standalone components, and lazy loading.',
    features: [
      'Angular 21 (Standalone)',
      'Reactive Forms & Signals',
      'SSR / SSG with Angular Universal',
      'Performance-first architecture',
    ],
    accentColor: '#dd0031',
  },
  {
    icon: 'bi-phone-fill',
    title: 'Native Mobile Apps',
    description:
      'Ship to iOS and Android from a single Angular codebase using Capacitor — giving you true native device access without sacrificing developer experience.',
    features: [
      'iOS & Android from one codebase',
      'Native plugin ecosystem',
      'Capacitor + Ionic integration',
      'App Store / Play Store publishing',
    ],
    accentColor: '#119eff',
  },
  {
    icon: 'bi-globe',
    title: 'Progressive Web Apps',
    description:
      'Deliver app-like experiences on the web with offline support, push notifications, and instant loading — no install friction.',
    features: [
      'Service Worker & offline caching',
      'Web Push Notifications',
      'Installable on any device',
      'Lighthouse 100 performance scores',
    ],
    accentColor: '#00d4ff',
  },
  {
    icon: 'bi-palette2',
    title: 'UI/UX Design & Prototyping',
    description:
      'Pixel-perfect, accessible interfaces that delight users and convert visitors — designed mobile-first with a focus on WCAG AA compliance.',
    features: [
      'Figma design & prototyping',
      'Design system creation',
      'Responsive & accessible UI',
      'Animation & micro-interactions',
    ],
    accentColor: '#a855f7',
  },
  {
    icon: 'bi-arrow-repeat',
    title: 'API Integration',
    description:
      'Seamlessly connect your Angular frontend to any REST or GraphQL API — including auth flows, real-time via WebSockets, and third-party services.',
    features: [
      'REST & GraphQL clients',
      'Auth (JWT, OAuth 2.0)',
      'Real-time via WebSockets',
      'Third-party SDK integration',
    ],
    accentColor: '#f59e0b',
  },
  {
    icon: 'bi-wrench-adjustable-circle',
    title: 'Maintenance & Support',
    description:
      'Long-term partnership beyond launch — performance monitoring, dependency upgrades, bug fixes, and feature evolution for your Angular products.',
    features: [
      'Regular Angular upgrades',
      'Performance audits',
      'Bug tracking & SLA support',
      'Code review & refactoring',
    ],
    accentColor: '#10b981',
  },
];

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  readonly services = SERVICES;
}
