import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'hello',
  template: `{{welcome}}`,
  providers: [HelloService]
})
export class HelloComponent {
  welcome: string;

  constructor(helloService: HelloService) {
    this.welcome = helloService.sayHello();
    
  }
}