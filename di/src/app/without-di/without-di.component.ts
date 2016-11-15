import { Component, OnInit } from '@angular/core';
import { add, SuperCar, DISTRICT as ITEMS, hello } from './hello.module';

@Component({
  selector: 'app-without-di',
  template: `
  인사말 : {{hello}} <br>
  도시명 : {{items[0].name}} <br>  
  1 + 2 = {{sum}} <br>
  차 정보 : {{carInfo}}`
})
export class WithoutDiComponent {
  items: Object;
  hello: string;
  sum: number;
  carInfo: string;

  constructor() {

    // 변수 모듈 사용
    this.hello = hello;
    this.items = ITEMS;

    // 함수 모듈 사용  
    this.sum = add(1, 2);

    // 클래스 모듈 사용
    let mySuperCar = new SuperCar();
    this.carInfo = mySuperCar.name + "(타이어 개수 : " + mySuperCar.getTier() + "개)";
  }
}