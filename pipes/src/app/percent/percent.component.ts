import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent',
  template: `
      <p>01 - {{1.45 | percent:'.1'}}</p>
      <p>02 - {{1.45 | percent:'.3'}}</p>      
      <p>03 - {{1.45 | percent:'.1-2'}}</p>
      <p>04 - {{1.2584 | percent:'4.3-4'}}</p>
      <p>05 - {{1.2584 | percent:'.3-5'}}</p>`})
export class PercentComponent { }