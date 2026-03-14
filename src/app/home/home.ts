import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { Services } from './services/services';
import { About } from './about/about';
import { Technologies } from './technologies/technologies';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { ScrollAnimationService } from '../shared/scroll-animation';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, About, Technologies, Portfolio, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit {
  private scrollAnim = inject(ScrollAnimationService);

  ngOnInit(): void {
    // slight delay to let Angular render the DOM first
    setTimeout(() => this.scrollAnim.init(), 100);
  }
}
