import { Component } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trusturl',
  template: `
  신뢰할 수 없는 URL : <a [href]="riskyURL">연결</a><br>
  신뢰할 수 있는 URL : <a [href]="trustURL">연결</a><br>
  신뢰할 수 없는 URL : <a [href]="'https://angular.io'">연결</a><br>
  신뢰할 수 있는 URL : <a [href]="transToTrustURL('https://angular.io')">연결</a>`
})
export class TrusturlComponent {

  riskyURL: String;
  trustURL: SafeUrl;   

  constructor(private _sanitizer: DomSanitizer) {
    this.riskyURL = "javascript:alert('hello')";
    this.trustURL = this._sanitizer.bypassSecurityTrustUrl("javascript:alert('hello');");
  }

  transToTrustURL(url: string){    
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}