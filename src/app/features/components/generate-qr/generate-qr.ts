import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-qr',
  standalone: true,
  template: `
  <div class="flex flex-col justify-center items-center p-5">
    <div class="flex flex-col justify-center items-center p-5">
      <input class="w-90 border-2 border-gray-300 rounded-lg p-3" type="text" placeholder="Enter Video URL" #videoUrlInput />
      <span class="my-4"></span>
      @if (qrCodeUrl) {
        <img class="object-contain rounded-lg" [src]="qrCodeUrl" alt="Generated QR Code will appear here"/>
      }
    </div>
    <div class="flex flex-row justify-center items-center">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600" (click)="generate(videoUrlInput.value)">
        Generate QR code
      </button>
      <span class="mx-6"></span>
      <button class="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600" (click)="clear(videoUrlInput)">
        Clear
      </button>
      <span class="mx-6"></span>
      <button class="bg-green-500 text-white px-4 py-2 rounded-2xl hover:bg-green-600 font-bold">
		  Download QR Code
	    </button>
    </div>
  <div>
  `,
})
export class GenerateQr {

  qrCodeUrl: String = "";

  generate(text: string) {
  
    if (text.trim() === "") return;

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=350x350`;
    this.qrCodeUrl = qrCodeUrl;
  }

  clear(inputElement: HTMLInputElement) {   
    this.qrCodeUrl = "";
    inputElement.value = "";
  }

}
