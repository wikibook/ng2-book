import { Component } from '@angular/core';

@Component({
  selector: 'promise-method',
  template: `promise all, race, resolve, reject...`
})
export class PromiseMethodComponent {
  
  constructor() {
    var p1 = Promise.resolve(3);
    var p2 = 777;
    var p3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 200, "hello");
    });

    Promise.all([p1, p2, p3]).then(values => {
      console.log("all 프로미스 값 : " + values);
    });

    Promise.race([p1, p2, p3]).then(values => {
      console.log("race 프로미스 값 : " + values);
    });

    Promise.resolve("Success").then(function (value) {
      console.log("resolve 프로미스 값 : "+value);
    }, function (value) {
      //호출되지 않음
    });

    Promise.reject(new Error("fail")).then(function (error) {
      // 이 영역은 실행되지 않음
    }, function (error) {
      console.log(error);
    });
  }

}
