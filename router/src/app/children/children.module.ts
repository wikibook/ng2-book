import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChildrenRoutingModule } from './children-routing.module';
import { ChildrenComponent } from './children.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { Child3Component } from './child3.component';

import { ChildrenResolve } from './children-resolve.service';
import { ChildrenService } from './children.service';

@NgModule({
  imports: [ChildrenRoutingModule, FormsModule],
  declarations: [ChildrenComponent, Child1Component, Child2Component, Child3Component],
  providers: [ChildrenResolve, ChildrenService]
})
export class ChildrenModule { }