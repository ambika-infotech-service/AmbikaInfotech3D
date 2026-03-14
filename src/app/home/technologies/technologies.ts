import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Tech {
  name: string;
  icon: string;   // Bootstrap Icons class or SVG letter
  category: string;
  color: string;
}

const TECHNOLOGIES: Tech[] = [
  { name: 'Angular',    icon: 'bi-code-slash',          category: 'Frontend',  color: '#dd0031' },
  { name: 'TypeScript', icon: 'bi-filetype-tsx',         category: 'Language',  color: '#3178c6' },
  { name: 'Capacitor',  icon: 'bi-phone',                category: 'Mobile',    color: '#119eff' },
  { name: 'RxJS',       icon: 'bi-bezier2',              category: 'Reactive',  color: '#b7178c' },
  { name: 'Bootstrap',  icon: 'bi-bootstrap',            category: 'Styling',   color: '#7952b3' },
  { name: 'SCSS',       icon: 'bi-filetype-scss',         category: 'Styling',   color: '#cf649a' },
  { name: 'Node.js',    icon: 'bi-hdd-rack',             category: 'Backend',   color: '#339933' },
  { name: 'Firebase',   icon: 'bi-fire',                 category: 'Backend',   color: '#ffca28' },
  { name: 'Git',        icon: 'bi-git',                  category: 'DevOps',    color: '#f05032' },
  { name: 'Docker',     icon: 'bi-box',                  category: 'DevOps',    color: '#2496ed' },
  { name: 'Figma',      icon: 'bi-vector-pen',           category: 'Design',    color: '#a259ff' },
  { name: 'Jest',       icon: 'bi-bug',                  category: 'Testing',   color: '#99425b' },
];

const CATEGORIES = ['All', ...Array.from(new Set(TECHNOLOGIES.map((t) => t.category)))];

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Technologies {
  readonly all = TECHNOLOGIES;
  readonly categories = CATEGORIES;
  readonly activeCategory = signal('All');

  readonly filtered = computed(() =>
    this.activeCategory() === 'All'
      ? this.all
      : this.all.filter((t) => t.category === this.activeCategory())
  );

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }
}
