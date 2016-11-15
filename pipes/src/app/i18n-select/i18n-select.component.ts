import { Component } from '@angular/core';

@Component({
  selector: 'app-i18n-select',
  template: `<div>
  {{ apple | i18nSelect: fruit }}
  {{ 'banana' | i18nSelect: fruit }}
  {{ grape | i18nSelect: fruit }} 
  {{fruit['orange']}}
  {{fruit[mango]}}
  {{fruit.watermelon}}  
  {{fruit.kiwi}}
  </div>`
})
export class I18nSelectComponent {

  apple: string = 'apple';
  grape: string = 'grape';
  mango: string = 'mango';

  fruit: any = {
    'apple': '사과',
    'banana': '바나나',
    'grape': '포도',
    'orange': '오렌지',
    'mango': '망고',
    'watermelon': '수박',
    kiwi: '키위'
  }
}