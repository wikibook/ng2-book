import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'person-list',
  templateUrl: 'person-list.component.html',
  providers: [PersonService],
  styleUrls: ['styles.css']
})
export class PersonListComponent implements OnInit {
  errMessage: string;
  persones: Person[];
  mode: string = "Observable";

  constructor(private personService: PersonService) { }

  ngOnInit() { this.getPersones(); }

  getPersones() {
    this.personService.getPersones()
      .subscribe(
      persones => this.persones = persones,
      error => this.errMessage = <any>error);
  }

  addPerson(name: string) {
    if (!name) { return; }
    this.personService.addPerson(name)
      .subscribe(
      person => this.persones.push(person),
      error => this.errMessage = <any>error);
  }

  resultMessage: string;

  doPut(person: Person) {
    this.personService.putPerson(person)
      .subscribe(
      result => this.resultMessage = result,
      error => this.errMessage = <any>error).add(this.getPersones());
  }


  doDelete(person: Person) {
    this.personService.delPerson(person)
      .subscribe(
      result => this.resultMessage = result,
      error => this.errMessage = <any>error).add(this.getPersones());

  }
}
