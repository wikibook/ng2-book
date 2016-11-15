import { Injectable } from '@angular/core';

// 변수 모듈
class District {
  id: number;
  name: string;
}
export var DISTRICT: District[] = [
  { id: 1, name: '서울' }, 
  { id: 2, name: '대전' }, 
  { id: 3, name: '대구' },
  { id: 4, name: '부산' }
];

export var hello: string = "안녕하세요";

// 함수 모듈
export function add(num1: number, num2: number){
  return num1+num2;
}

// 클래스를 모듈
class Car {
  public name: string = "자동차";
  public getTier(): number{
    return 4;
  }
}

export class SuperCar extends Car {
  public name: string = "슈퍼카";
  public getTier(): number{
    return 6;
  }
}