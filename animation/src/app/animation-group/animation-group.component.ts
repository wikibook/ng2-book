import { Component, Input, trigger, state, style, transition, animate, group} from '@angular/core';
import { ItemList } from './animation-group.service';

@Component({
  selector: 'animation-group',
  template: `
  <div><button (click)="list.itemAdd()">추가</button><button (click)="list.itemRemove()">삭제</button></div>
  <div class="top-bar"> 프리미어리그 팀 </div>
  <div class="title" *ngFor="let team of list.teams" [@itemStatus]="team.itemStatus">{{team.name}}</div>`,
  styleUrls: ['animation-group.component.css'],
  animations: [
    trigger('itemStatus', [
      state('init', style({transform: 'translateX(0)',opacity: 1})),
      transition('void => init', [
        style({transform: 'translateX(-100px)'}),
        group([
          animate('0.5s 0.1s ease', style({
            backgroundColor:'yellow', opacity: 0,
          })),
          animate('0.5s ease', style({
            transform: 'translateX(0)',
          })),
          animate('0.5s ease', style({
            opacity:1
          }))
        ])
      ]),
      transition('init => *', [
        style({transform: 'translateX(0)'}),
        group([
          animate('0.2s ease', style({
            transform: 'translateX(400px)',
            width: 100
          })),
          animate('0.2s 0.1s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ],
  providers: [ItemList]
})
export class AnimationGroupComponent {
  constructor(private list: ItemList) { }
}