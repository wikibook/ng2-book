import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'number'
})
export class NumberPipe implements PipeTransform {
  transform(input: number, fractionNumber: number): string {
    //정수
    var integer:string =input.toFixed(0).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });

    //소수점
    var fraction=(input % 1).toFixed(fractionNumber).toString();
    fraction=fraction.substr(1,fraction.length);

    //정수와 소수점을 합쳐서 출력
    return integer+fraction;  
  }
}