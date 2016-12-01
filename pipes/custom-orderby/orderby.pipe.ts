import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderbyPipe implements PipeTransform {
  transform(array: Array<any>, sortType: string, keyName: string): Array<any> {

    if(!sortType) return array;
    
    var key = keyName;
    if (keyName === null) {
      var keyNames = Object.keys(array);
      key = keyNames[0].toLowerCase();
    }

    // 오름차순 : 숫자는 작은수에서 큰수로, 알파벳은 ABC 순으로, 한글은 가나다 순으로 
    if (sortType === 'asc') {
      array.sort(function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      });
    } else if (sortType === 'desc') {
    // 내림차순 : 숫자는 큰수에서 작은수로, 알파벳은 ZYX 순으로, 한글은 하파타 순으로
      array.sort(function (a, b) {
        if (a[key] < b[key]) return 1;
        if (a[key] > b[key]) return -1;
        return 0;
      });
    }
    return array;
  }
}