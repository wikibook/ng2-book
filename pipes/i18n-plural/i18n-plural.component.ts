import { Component } from '@angular/core';


@Component({
    selector: 'i18n-plural-pipe',
    template: `
    <input type="number" [(ngModel)]="num" placeholder="숫자 입력"><br>
    {{ num | i18nPlural: mappingRules }}`
})
export class I18nPluralComponent {
    num: number = 1;
    mappingRules:
    { [k: string]: string } = { '=0': '없음', '=1': '한개', 'other': '# 개' };
}