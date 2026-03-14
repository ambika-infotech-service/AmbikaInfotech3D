import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  gradient: string;
  category: string;
}

const PROJECTS: Project[] = [
  {
    title: 'HealthTrack Pro',
    description: 'Comprehensive healthcare management platform with real-time patient monitoring, appointment scheduling, and telemedicine features.',
    tags: ['Angular', 'Capacitor', 'Firebase', 'RxJS'],
    icon: 'bi-heart-pulse',
    gradient: 'linear-gradient(135deg,#f43f5e,#e11d48)',
    category: 'Healthcare',
  },
  {
    title: 'RetailFlow POS',
    description: 'Cross-platform point-of-sale Progressive Web App used across 200+ retail stores with offline-first architecture.',
    tags: ['Angular PWA', 'IndexedDB', 'Bootstrap'],
    icon: 'bi-shop',
    gradient: 'linear-gradient(135deg,#f59e0b,#d97706)',
    category: 'Retail',
  },
  {
    title: 'LogiTrack',
    description: 'Real-time logistics and fleet tracking application with live map integration, route optimisation, and driver mobile app.',
    tags: ['Angular', 'Capacitor', 'WebSockets', 'Maps API'],
    icon: 'bi-truck',
    gradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
    category: 'Logistics',
  },
  {
    title: 'EduSpark LMS',
    description: 'Modern learning management system for e-learning with video streaming, quizzes, progress tracking, and certificate generation.',
    tags: ['Angular', 'Firebase', 'TypeScript'],
    icon: 'bi-mortarboard',
    gradient: 'linear-gradient(135deg,#8b5cf6,#6d28d9)',
    category: 'EdTech',
  },
  {
    title: 'FinLedger',
    description: 'Personal finance and investment tracker with bank sync, expense categorisation, and AI-powered insights.',
    tags: ['Angular', 'Node.js', 'REST API', 'PWA'],
    icon: 'bi-graph-up-arrow',
    gradient: 'linear-gradient(135deg,#10b981,#059669)',
    category: 'FinTech',
  },
  {
    title: 'PropView 360',
    description: 'Real estate listing platform with 3D property tours, mortgage calculator, and interactive neighbourhood maps.',
    tags: ['Angular', 'Three.js', 'Bootstrap', 'SCSS'],
    icon: 'bi-buildings',
    gradient: 'linear-gradient(135deg,#06b6d4,#0284c7)',
    category: 'Real Estate',
  },
];

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  readonly projects = PROJECTS;
}
