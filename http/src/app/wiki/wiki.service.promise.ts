import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import { handleError } from '../async-handling.promise';

@Injectable()
export class WikiService {
  constructor(private jsonp: Jsonp) { }

  search(keyword: string) {

    let wikiUrl = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', keyword);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(wikiUrl, { search: params })
      .toPromise()
      .then(response => <string[]>response.json()[1])
      .catch(handleError);
  }

}