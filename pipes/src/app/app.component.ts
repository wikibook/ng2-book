import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">                
          <h1>파이프</h1>
        </a>
        <ol class="tree-list">
            <li><a routerLink="/date-expression">Date 파이프(표현식)</a></li>
            <li><a routerLink="/date-formats">Date 파이프(사용자지정방식:날짜시간)</a></li>
            <li><a routerLink="/date-etc">Date 파이프(사용자지정방식:기타)</a></li>
            <li><a routerLink="/date-predefined">Date 파이프(사전정의방식)</a></li>
            <li><a routerLink="/upper-lower">대문자 소문자 파이프</a></li>
            <li><a routerLink="/currency">통화 파이프</a></li>
            <li><a routerLink="/percent">퍼센트 파이프</a></li>            
            <li><a routerLink="/async">비동기 파이프</a></li>
            <li><a routerLink="/json">JSON 파이프</a></li>
            <li><a routerLink="/decimal">소수점 파이프</a></li>
            <li><a routerLink="/slice">슬라이스 파이프</a></li>
            <li><a routerLink="/i18n-select">I18nSelectPipe 파이프</a></li>            
            <li><a routerLink="/i18n-plural">I18nPluralPipe 파이프</a></li>                      
            <li><a routerLink="/chaining-pipes">체이닝 파이프</a></li>
            <li><a routerLink="/custom-replace">커스텀 교체 파이프</a></li>
            <li><a routerLink="/custom-number">커스텀 숫자 파이프</a></li>
            <li><a routerLink="/custom-limitto">커스텀 제한 파이프</a></li>
            <li><a routerLink="/custom-filter">커스텀 필터 파이프</a></li>
            <li><a routerLink="/custom-orderby">커스텀 정렬 파이프</a></li>
            <li><a routerLink="/custom-search">커스텀 검색 파이프</a></li>
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }