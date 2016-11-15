import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-number',
  template: `{{100000.123456|number:3}}`
})
export class CustomNumberComponent{}