import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  
  selector: 'app-trustresourceurl',
  template: `<iframe width="250px" height="150px" [src]="trustResourceURL"></iframe>`
})
export class TrustresourceurlComponent {

  trustResourceURL: SafeResourceUrl;
  
  constructor(private _sanitizer: DomSanitizer) {
    let url="https://angular.io";
    this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}