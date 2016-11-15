import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyUpperPipe } from './my-upper.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [MyUpperPipe, HighlightDirective],
  exports: [MyUpperPipe, HighlightDirective,
    CommonModule, FormsModule]
})
export class SharedModule { }