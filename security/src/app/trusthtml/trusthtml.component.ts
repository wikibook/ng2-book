import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-trusthtml',
  template: `
  <h3>신뢰할 수 없는 HTML</h3>
  <div [innerHtml]="notTrustHtml"></div>
  
  <h3>신뢰할 수 있는 HTML</h3>
  <div [innerHtml]="trustHtml"></div><br>`
})
export class TrusthtmlComponent {

  trustHtml: SafeHtml;
  notTrustHtml: string = `<script>function hello(){ alert("헬로우 메서드 알림창!"); }</script>
  <style>button{font-size:20px;padding:10px;font-style:italic;}</style>
  <button onclick="hello()">메서드 호출 by onclick</button>
  <button (click)="hello()">메서드 호출 by (click)</button><br><br>
  
  <button onclick="javascript:alert('헬로우 알림창!')">Hello 알림창 띄우기</button>`;

  constructor(private _sanitizer: DomSanitizer) {    
    this.trustHtml = this._sanitizer.bypassSecurityTrustHtml(this.notTrustHtml);
  }

  hello(){ alert('hello'); }

}