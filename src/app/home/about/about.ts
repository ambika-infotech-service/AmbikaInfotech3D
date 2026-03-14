import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Value {
  icon: string;
  title: string;
  text: string;
}

const VALUES: Value[] = [
  { icon: 'bi-bullseye', title: 'Precision', text: 'We write clean, tested, and maintainable code that scales.' },
  { icon: 'bi-lightning-charge', title: 'Speed', text: 'Rapid development cycles without cutting corners on quality.' },
  { icon: 'bi-people', title: 'Partnership', text: 'Your success is our success — we act as an extension of your team.' },
  { icon: 'bi-lock', title: 'Security', text: 'Security baked in from day one, not patched on at the end.' },
];

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly values = VALUES;
}
