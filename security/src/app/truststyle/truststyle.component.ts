import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


@Pipe({name: 'safe'})
export class Safe implements PipeTransform  {
  constructor(private sanitizer:DomSanitizer){
    this.sanitizer = sanitizer;
  }

  transform(style) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}

@Component({
  selector: 'app-truststyle',
  template: `
  <img [style.background-image]="styleURL">
  <img [style.background-image]="styleURL | safe">
  <img [style.background-image]="trustStyle">
  <img [style.background-image]="'url(' + imageURL + ')\'">
  `,
  styles: [`img{height:128px;width:128px;}`]
})
export class TruststyleComponent {

  imageURL: string = '/images/car.png';
  styleURL: string = "url(\'https://angular.io/resources/images/logos/angular2/angular.svg\')";
  trustStyle: SafeStyle;
  
  constructor(private _sanitizer: DomSanitizer) {
    this.trustStyle = this._sanitizer.bypassSecurityTrustStyle(this.styleURL);
  }

}