import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  sayHello(){
    return "Hello 서비스!";
  }
  constructor() {}
}