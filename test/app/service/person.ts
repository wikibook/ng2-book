export class Person {
  constructor(public id = 0, public name = '') { }
  clone() { return new Person(this.id, this.name); }
}