import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-cmp',
  template: `  
      <div>날짜표시 디폴트형식 : {{ today | date }} </div>
      <div>날짜표시 yyyy-mm-dd 형식 : {{ today | date:"yyyy-MM-dd" }} </div>
      <div>소문자를 대문자로 : {{ nameLowerCase | uppercase}} </div>
      <div>대문자를 소문자로 : {{ nameUppercase | lowercase}} </div><br>      
      <div>미국통화 : {{ usdMoney | currency:'USD':false }} </div>
      <div>미국통화 : {{ usdMoney | currency:'USD':true }} </div>
      <div>미국통화 : {{ usdMoney | currency:'USD':false:'3.2-2'}} </div>
      <div>미국통화 : {{ usdMoney | currency:'USD':true:'3.2-2'}} </div><br>

      <div>퍼센트 : {{ score | percent}}  </div>
      <div>퍼센트 : {{ score | percent:'4.3-5'}}  </div>    
  `
})
export class BasicComponent {
  today = new Date(2000,1,1); // April 15, 1988
  nameUppercase:string;
  nameLowerCase:string;

  usdMoney=100.01;
  
  score=99;

  constructor() {
    this.nameUppercase="HAPPYGRAMMER";
    this.nameLowerCase="happygrammer";
    
  }
}