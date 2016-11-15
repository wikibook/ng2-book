import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { WikiService } from './wiki.service';

@Component({
    selector: 'wiki-cmp',
    templateUrl: `
    <h3>Jsonp By Observable</h3>
    <input #keyword (keyup)="search(keyword.value)"/>
    <ul>
        <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
    <br><br>

    <h3>Jsonp By Observable (with Operator)</h3>
    <input #keyword2 (keyup)="searchOperator(keyword2.value)"/>
    <ul>
        <li *ngFor="let item of itemsOperator | async">{{item}}</li>
    </ul>`,
    providers: [WikiService]
})
export class WikiComponent {
    // RxJS 연산자를 사용하지 않음
    items: Observable<string[]>;
    search(keyword: string) {
        this.items = this.wikiService.search(keyword);
    }

    // RxJS 연산자를 사용함
    itemsOperator: Observable<string[]>;
    private searchKeyStream = new Subject<string>();
    constructor(private wikiService: WikiService) {
        this.itemsOperator = this.searchKeyStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((keyword: string) => this.wikiService.search(keyword));
    }
    searchOperator(keyword: string) {        
        this.searchKeyStream.next(keyword);
    }
}