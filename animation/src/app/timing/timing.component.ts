import {Component, animate, state, style, transition, trigger, keyframes} from '@angular/core';

@Component({
  selector: 'timing',
  animations: [
    trigger('timing', [
      state('ease-in', style({ opacity: 1 })), state('ease-out', style({ opacity: 0 })),
      state('delay-in', style({ opacity: 1 })), state('delay-out', style({ opacity: 0 })),
      state('duration-in', style({ opacity: 1 })), state('duration-out', style({ opacity: 0 })),
      transition('* => ease-in', [
        style({ opacity: 0, transform: 'translateX(-100%)' }), animate('0.5s ease-in')
      ]),
      transition('* => ease-out', [
        animate('0.5s 10 ease-out', style({
          opacity: 0, transform: 'translateX(100%)'
        }))
      ]),
      transition('* => delay-in', [
        style({ opacity: 0, transform: 'translateX(-100%)' }), animate('0.2s 500ms')
      ]),
      transition('* => delay-out', [
        animate('0.2s 500ms', style({
          opacity: 0, transform: 'translateX(100%)'
        }))
      ]),
      transition('* => duration-in', [
        style({ opacity: 0, transform: 'translateX(-100%)' }), animate('500ms')
      ]),
      transition('* => duration-out', [
        animate('500ms', style({
          opacity: 0, transform: 'translateX(100%)'
        }))
      ])
    ])
  ],
  template: `
    <h2>상태 : {{state}}</h2>
    <div [@timing]="state">
      <img src="/images/car.png">
    </div>
    <div>
      <button (click)="check('ease-in','ease-out')">Easing 테스트</button>
      <button (click)="check('delay-in','delay-out')">Delay 테스트</button>
      <button (click)="check('duration-in','duration-out')">Duration 테스트</button>
    </div>
    `
})
export class TimingComponent {
  state: string = 'ease-in'

  private check(inName: string,outName: string){
    if (this.state == inName || this.state == outName) {
      this.state = (this.state == outName ? inName:outName);
    } else {
      this.state = inName;
    }
  }
}