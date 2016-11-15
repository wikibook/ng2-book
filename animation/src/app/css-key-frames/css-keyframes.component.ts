import { Component } from '@angular/core';

@Component({
  selector: 'app-css-keyframes',
  template: `<img src="/images/car.png">`,
  styles: [`
  img {
    animation-duration: 2s;  
    animation-name: infinite-move;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
  @keyframes infinite-move {
    from {margin-left: 0}
    50% {margin-left: 500px}
    to {margin-left: 1000px}
  }
`]})
export class CssKeyframesComponent{}