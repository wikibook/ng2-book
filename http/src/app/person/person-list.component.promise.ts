import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service.promise';


@Component({
  selector: 'person-list-promise',
  templateUrl: 'person-list.component.html',
  providers: [PersonService],
  styleUrls: ['styles.css']
})
export class PersonListPromiseComponent implements OnInit {
  errMessage: string;
  persones: Person[];
  mode: string = "Promise";

  constructor(private personService: PersonService) { }

  ngOnInit() { this.getPersones(); }

  getPersones() {
    this.personService.getPersones()
      .then(
      persones => this.persones = persones,
      error => this.errMessage = <any>error);
  }

  addPerson(name: string) {
    if (!name) { return; }
    this.personService.addPerson(name)
      .then(
      person => this.persones.push(person),
      error => this.errMessage = <any>error);
  }

  doPut(person: Person) {
    this.personService.putPerson(person)
      .then(error => this.errMessage = <any>error);
  }


  doDelete(person: Person) {
    this.personService.delPerson(person)
      .then(
      person => this.getPersones(),
      error => this.errMessage = <any>error);

  }
}