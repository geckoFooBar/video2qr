import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Import any global components here, like your GenerateQr component
import { GenerateQr } from './features/components/generate-qr/generate-qr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GenerateQr], // Add imports directly to the component
  template: `
    <h1>{{ title }}</h1>
    <app-generate-qr></app-generate-qr>
  `,
  styles: `
    h1 {
      font-family: Helvetica;
      font-size: 24px;
    }
    `
})
export class App {
  title: any = 'Video2QR';
}