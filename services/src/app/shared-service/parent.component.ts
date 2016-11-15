import { Component, Input } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'parent-component',
  template: `
  부모 컴포넌트 : {{s.message}} <button (click)="s.message='parent'">선택</button><br>
  <car-component></car-component><br>
  <taxi-component></taxi-component>`,
  providers: [SharedService]
})
export class ParentComponent {
  constructor(public s: SharedService) {
    s.message = "hello";
  }
}