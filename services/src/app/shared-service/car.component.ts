import { Component, Input } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'car-component',
  template: `car 컴포넌트 : {{ s.message}} <button (click)="s.message='car'">선택</button>`
})
export class CarComponent {
  constructor(public s: SharedService) {
  }
}