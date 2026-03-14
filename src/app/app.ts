import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { SeoService } from './shared/seo/seo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPage({
      title: 'Ambika Infotech | Angular Web & Native Mobile App Developers',
      description:
        'Ambika Infotech is a boutique software studio in Ahmedabad, India, specialising in Angular web development and cross-platform native mobile apps with Capacitor. 7+ years, 50+ projects delivered.',
      url: 'https://www.3d.ambikainfotech.online/',
      image: 'https://www.3d.ambikainfotech.online/og-image.png',
    });
  }
}
