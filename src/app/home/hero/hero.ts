import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

const TYPED_WORDS = [
  'Angular Applications',
  'Native Mobile Apps',
  'Progressive Web Apps',
  'Scalable Platforms',
];

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero implements OnInit, OnDestroy {
  readonly displayText = signal('');

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timerId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    if (this.timerId) clearTimeout(this.timerId);
  }

  private type(): void {
    const word = TYPED_WORDS[this.wordIndex];
    if (this.isDeleting) {
      this.displayText.set(word.slice(0, --this.charIndex));
    } else {
      this.displayText.set(word.slice(0, ++this.charIndex));
    }

    let delay = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === word.length) {
      delay = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % TYPED_WORDS.length;
      delay = 400;
    }

    this.timerId = setTimeout(() => this.type(), delay);
  }
}
