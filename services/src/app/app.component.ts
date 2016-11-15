import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">
          <h1>서비스</h1>
        </a>
        <ol class="tree-list">        
        <li><a routerLink="/hello" routerLinkActive="active">Hello 서비스</a></li>
        <li><a routerLink="/oop-service" routerLinkActive="active">객체지향 서비스(주입/상속)</a></li>
        <li><a routerLink="/mock" routerLinkActive="active">목객체 서비스</a></li>
        <li><a routerLink="/promise" routerLinkActive="active">프로미스 서비스</a></li>                
        <li><a routerLink="/shared-service" routerLinkActive="active">서비스를 통한 데이터 교환</a></li>                  
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }