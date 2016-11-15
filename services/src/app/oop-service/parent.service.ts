import { Injectable } from '@angular/core';

@Injectable()
export class Parent {

  getName(){    
    return "Parent 서비스!";
  }
  
}