import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div class="left-menu">
      <div class="menu">
        <a routerLink="/">                
          <h1>테스트</h1>
        </a>
        <ol class="tree-list">
          <li><a routerLink='/cmp'>컴포넌트</a></li>
          <li><a routerLink='/directive'>지시자</a></li>
          <li><a routerLink='/service'>서비스</a></li>
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }