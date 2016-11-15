import { async, inject, TestBed } from '@angular/core/testing';

import { PersonService, Persons } from './person.service';

describe('Suite - PersonService에 대한 테스트', () => {

  let service: PersonService;

  beforeEach(async(() => {
    service = new PersonService();

    TestBed.configureTestingModule({
      providers: [
        PersonService
      ]
    })
      .compileComponents();
  }));

  it('spec - 서비스가 제대로 주입되었는지',

    inject([PersonService], (service: PersonService) => {
      expect(service instanceof PersonService).toBe(true);
    }));

  it('spec - 데이터 크기가 동일한지', async(inject([], () => {

    service.getPersons()      
      .then(persons => {
        expect(persons.length).toBe(Persons.length,
          'should have expected no. of heroes');
      });

  })));

  it('spec - id가 1인 사람이 유비가 맞는지', async(inject([], () => {
    service.getPerson(1)
      .then(person => {
        expect(person.name).toBe("유비");
      });
  })));

});