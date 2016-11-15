import { Injectable } from '@angular/core';

import { Person }       from './person';

export var Persons: Person[] = [
  new Person(1, '유비'),
  new Person(2, '관우'),
  new Person(3, '장비')
];

@Injectable()
export class PersonService {
  getPersons() {
    return Promise.resolve(Persons);
  }

  getPerson(id: number | string): Promise<Person> {
    if (typeof id === 'string') {
      id = parseInt(id as string, 10);
    }
    return this.getPersons().then(
      persons => persons.find(person => person.id === id)
    );
  }
}