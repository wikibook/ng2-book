import { Component } from '@angular/core';
import { ValueProvider, Config } from './value.provider';

@Component({
  selector: 'app-value-provider',
  template: `<div>서비스명 : {{config.serviceName}}</div>
  <div>회원등급 : {{config.grade|json}}</div>
  <div>정보 : <span [innerHTML]="config.getInfo()"></span></div>`,
  providers: [ValueProvider]
})
export class ValueProviderComponent {
  constructor(public config: Config) {
  }
}