import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'router-link-test',
  template: `
  <h3>/pages 로 시작</h3>
  <a routerLink="/pages/first-page">1</a> 
  <a routerLink="/pages/second-page">2</a> 
  <a routerLink="/pages/third-page">3</a> <br><br>
  
  <h3>../pages 로 시작</h3>
  <a routerLink="../pages/first-page">1</a>
  <a routerLink="../pages/second-page">2</a> 
  <a routerLink="../pages/third-page">3</a> <br><br>

  <h3>메서드를 이용</h3>
  <button (click)="one()">1. navigateByUrl</button>
  <button (click)="two()">2. navigate</button>
  <button (click)="three()">3. createUrlTree</button>
  <button (click)="four()">4. createUrlTree, segmentPath</button>
  `
})
export class RouterLinkTestComponent {
  constructor(public _router: Router) { }
  one() {
    this._router.navigateByUrl("/pages/first-page");
  }

  two() {
    this._router.navigate(['pages', 'second-page']);
  }

  three() {
    let url = this._router.createUrlTree(['pages', 'third-page']);
    this._router.navigateByUrl(url);
  }

  four() {
    let url = this._router.createUrlTree([{segmentPath: 'third-page'}]);
    this._router.navigateByUrl(url);
  }

}