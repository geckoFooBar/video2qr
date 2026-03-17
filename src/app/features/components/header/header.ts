import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div class="flex flex-row justify-center items-center p-5">
      <h1 class="text-4xl font-bold text-gray-800 select-none">video2QR</h1>
    </div>
  `,
})
export class Header {}
