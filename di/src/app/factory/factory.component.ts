import { Component } from '@angular/core';
import { mainFactory } from './animal-factory';

@Component({
  selector: 'app-factory',
  template: `
  {{animal1.getAnimalName()}} : {{animal1.getBark()}}<br>
  {{animal2.getAnimalName()}} : {{animal2.getBark()}}<br>
  {{animal1 === animal2}}
  `
})
export class FactoryComponent{
  animal1= mainFactory();
  animal2= mainFactory();
}