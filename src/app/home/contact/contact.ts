import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: 'bi-envelope-fill',
    label: 'Email',
    value: 'hello@ambikainfotech.in',
    href: 'mailto:hello@ambikainfotech.in',
  },
  {
    icon: 'bi-telephone-fill',
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: 'bi-geo-alt-fill',
    label: 'Location',
    value: 'Ahmedabad, Gujarat, India',
    href: '#',
  },
  {
    icon: 'bi-clock-fill',
    label: 'Working Hours',
    value: 'Mon – Fri, 9 AM – 7 PM IST',
    href: '#',
  },
];

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private fb = inject(FormBuilder);

  readonly contactInfo = CONTACT_INFO;
  readonly submitted = signal(false);
  readonly sending = signal(false);

  readonly form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending.set(true);
    // Simulate async submit (replace with real API call)
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.form.reset();
    }, 1500);
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
}
