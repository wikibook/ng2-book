import {Component, animate, state, style, transition, trigger} from '@angular/core';

@Component({
  selector: 'message-box',
  styleUrls: ['message-box.component.css'],
  animations: [trigger(
    'openClose',
    [
      state('close', style({ height: '0px' })),
      state('open', style({ height: '100px', paddingTop: '50px' })),
      transition('void => close', animate(500)),
      transition('close => open', animate(300)),
      transition('open => close', animate(200))
    ])],
  template: `
  <div>
    <button (click)="expand()">열기</button>
    <button (click)="collapse()">닫기</button>
  </div>
  <div class="toggle-popup" [@openClose]="state">      
    Hello<br>
    Angular!    
  </div>`
})
export class MessageBoxComponent {
  state: string;

  constructor() { this.collapse(); }
  expand() { this.state = 'open'; }
  collapse() { this.state = 'close'; }
}