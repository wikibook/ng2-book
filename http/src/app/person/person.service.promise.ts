import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Person } from './person';
import { handleError } from '../async-handling.promise';

@Injectable()
export class PersonService {
  private personesUrl = 'app/persons';
  constructor(private http: Http) { }

  getPersones(): Promise<Person[]> {
    return this.http.get(this.personesUrl)
      .toPromise()
      .then(this.extractData)
      .catch(handleError);
  }

  addPerson(name: string): Promise<Person> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var body = { name };

    return this.http.post(this.personesUrl, body, options)
      .toPromise()
      .then(this.extractData)
      .catch(handleError);
  }

  putPerson(p: Person) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let url = `${this.personesUrl}/${p.id}`;
    return this.http
      .put(url, JSON.stringify(p), { headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(handleError);
  }

  delPerson(p: Person) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = `${this.personesUrl}/${p.id}`;
    return this.http.delete(url, options)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

}