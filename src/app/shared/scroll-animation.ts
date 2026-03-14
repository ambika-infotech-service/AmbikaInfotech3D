import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollAnimationService {
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      this.observer!.observe(el);
    });
  }

  observe(el: Element): void {
    this.observer?.observe(el);
  }

  disconnect(): void {
    this.observer?.disconnect();
  }
}
