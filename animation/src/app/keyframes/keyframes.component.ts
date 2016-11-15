import {Component, animate, state, style, transition, trigger, keyframes} from '@angular/core';

@Component({
  selector: 'keyframes',
  animations: [
    trigger('inOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out, void', style({ transform: 'scale(0)' })),
      transition('out => *', [
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateX(-30%) translateY(-10px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => out', [
        animate(500, keyframes([
          style({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateX(60%) translateY(-10px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])
  ],
  template: `
    <h2>상태 : {{state}}</h2>
    <div [@inOut]="state">
      <img src="/images/car.png">
    </div>
    <div>
      <button (click)="state='in'" *ngIf="state=='out'">차 부르기</button>
      <button (click)="state='out'" *ngIf="state=='in'">차 보내기</button>
    </div>
    `
})
export class KeyframesComponent {
  state: string = 'in'
}