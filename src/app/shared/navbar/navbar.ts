import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';

const NAV_LINKS = [
  { label: 'Home',         href: '#home',         icon: 'bi-house' },
  { label: 'Services',     href: '#services',     icon: 'bi-grid-1x2' },
  { label: 'About',        href: '#about',        icon: 'bi-people' },
  { label: 'Technologies', href: '#technologies', icon: 'bi-cpu' },
  { label: 'Portfolio',    href: '#portfolio',    icon: 'bi-briefcase' },
  { label: 'Contact',      href: '#contact',      icon: 'bi-envelope' },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.scrolled]': 'scrolled()',
    '[class.menu-open]': 'menuOpen()',
  },
})
export class Navbar {
  readonly navLinks = NAV_LINKS;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 992) {
      this.menuOpen.set(false);
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
