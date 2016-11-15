import { Component } from '@angular/core';

import { WikiService } from './wiki.service.promise';

@Component({
    selector: 'wiki-promise-cmp',
    templateUrl: `
    <h3>Jsonp By Promise</h3>
    <input #keyword (keyup)="search(keyword.value)"/>
    <ul>
        <li *ngFor="let item of items">{{item}}</li>
    </ul>`,
    providers: [WikiService]
})
export class WikiPromiseComponent {
    items: string[];
    constructor(private wikiService: WikiService) { }
    
    search(keyword: string) {
        this.wikiService.search(keyword)
            .then(result => this.items = result);
    }
}