import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(input: any, min: number, max: number): any {
       return input.filter(member  => {
           if (member.age >= min && member.age <= max) return member; 
       });
    }
}