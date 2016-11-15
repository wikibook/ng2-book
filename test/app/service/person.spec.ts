import { Person } from './person';

describe('Suite - Person 객체에 대한 테스트', () => {
  
  it('spec - 이름을 포함하는지', () => {    
    const person = new Person(1, '유비');
    expect(person.name).toBe('유비');
  });

  it('spec - 아이디를 가지는지', () => {
    const person = new Person(1, '관우');
    expect(person.id).toBe(1);
  });

  it('spec - 생성한 객체가 동일한 객체인지', () => {
    const person = new Person(1, '장비');
    const clone = person.clone();
    expect(person).toEqual(clone);
  });

});
