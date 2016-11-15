import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PersonData implements InMemoryDbService {
  createDb() {
    let persons = [
      { id: 1, name: '유비' },
      { id: 2, name: '관우' },
      { id: 3, name: '장비' },
      { id: 4, name: '조조' },
      { id: 5, name: '조운' },
      { id: 6, name: '여포' },
    ];
    return { persons };
  }
}