import { Component, Input, trigger, state, style, animate, transition, keyframes, AnimationTransitionEvent } from '@angular/core';

@Component({
  selector: 'animation-callback',
  template: `
  <h2>상태 : {{state}}</h2>
  {{msg | json}}
  <div
      (@inOut.start)="moveIn($event)"
      (@inOut.done)="moveOut($event)"
      [@inOut]="state">
    <img src="/images/car.png"> 
  </div>
  <div>      
    <button (click)="state='in'" *ngIf="state=='out'">차 부르기</button>
    <button (click)="state='out'" *ngIf="state=='in'">차 보내기</button>
  </div>
  `, 
  animations: [
    trigger('inOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'scale(0)' })),
      transition('out => *', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
        ]))
      ]),
      transition('* => out', [
        animate(1000, keyframes([
          style({ opacity: 1, transform: 'translateX(-20px)', offset: 0 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class AnimationCallbackComponent {
  state: string ="in";
  msg: any;
  moveIn(event: AnimationTransitionEvent) {
    console.warn('애니메이션 시작: ', event);
  }

  moveOut(event: AnimationTransitionEvent) {
    console.warn('애니메이션 마침: ', event);
    this.msg = event;
  }
}