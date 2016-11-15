import { Component, trigger, state, style, transition, animate} from '@angular/core';

import { Station } from './station'

@Component({
  selector: 'slide-menu',
  template: `
  <div class="top-bar">출발역을 선택하세요</div>
  <div class="item" *ngFor="let station of stations">
    <div class="title" (click)="station.toggleMenu()" [@Title]="station.status"> {{station.name}} </div>
    <div class="slide-menu" [@SlidMenu]="station.status">
      <button (click)="select(station.name)">선택</button><button (click)="station.status='close'">닫기</button>
    </div>
  </div>`,
  styleUrls: ['slide-menu.component.css'],
  animations: [
    trigger('Title', [      
      transition('void => *', [
        style({ opacity: 0 }), animate('500ms')
      ])      
    ]),    
    trigger('SlidMenu', [
      state('open', style({height: '30px'})),
      state('close', style({height: '0px'})),
      transition('open => close, close => open', animate('200ms ease-in'))
    ])
  ]
})
export class SlideMenuComponent {
  stations: Station[] = [];

  constructor(){
    this.stations.push(new Station('서울역','close'));
    this.stations.push(new Station('대전역','close'));
    this.stations.push(new Station('대구역','close'));
    this.stations.push(new Station('부산역','close'));
  }
  select(name: string){
    alert(name+'을 선택했습니다');
  }
}