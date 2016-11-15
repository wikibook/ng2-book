import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myupper' })
export class MyUpperPipe implements PipeTransform {
  transform(phrase: string) {
    return phrase.toUpperCase();
  }
}