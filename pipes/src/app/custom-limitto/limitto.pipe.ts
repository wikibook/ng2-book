import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class LimittoPipe implements PipeTransform {
    transform(input: any, limit: number): any {
        return input.filter(function (elem, index, array) {
            if(index<limit){
                return elem;
            }
        });
    }
}