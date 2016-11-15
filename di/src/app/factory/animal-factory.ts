import { Animal, Config } from './animal';

//팩토리패턴
abstract class Factory {

  // 객체 생성방법 결정
  create() {
     return this.careteAnimal(new Config());
  }
  abstract careteAnimal(Config): Animal;
}

export class AnimalFactory extends Factory{

  // 객체 설정방법 결정
  careteAnimal(config:Config){        
    config.bark="야옹야옹";
    config.name="고양이";
    return new Animal(config);
  }
}

export function mainFactory() {
  let myAnimal:Animal= (new AnimalFactory()).create();
  return myAnimal;
}