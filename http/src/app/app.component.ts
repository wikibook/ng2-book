import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">
          <h1>HTTP</h1>
        </a>
        <ol class="tree-list">
          <li><a routerLink="/promise-method" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">promise method</a></li>
          <li><a routerLink="/promise-prototype" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">promise prototype</a></li>
          <li><a routerLink="/wiki-promise" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">wiki by promise</a></li>
          <li><a routerLink="/wiki-observable" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">wiki by observable</a></li>
          <li><a routerLink="/promise" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">인물관리 by promise</a></li>
          <li><a routerLink="/observable" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">인물관리 by observable</a></li>
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }