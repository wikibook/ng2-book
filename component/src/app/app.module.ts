import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding

import { routing,
  appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';

import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { ChildComponent } from './child-to-parent/child.component';



import { ParentToChildInputsComponent } from './parent-to-child-inputs/parent-to-child-inputs.component';
import { ChildInputsComponent } from './parent-to-child-inputs/child-inputs.component';


import { ParentToChildInputComponent } from './parent-to-child-input/parent-to-child-input.component';
import { ChildInputComponent } from './parent-to-child-input/child-input.component';


import { ComponentStyleComponent } from './component-style/component-style.component';
import { FirstDepthComponent } from './component-style/first-depth.component';
import { SecondDepthComponent } from './component-style/second-depth.component';

import { NestedParentComponent } from './nested-component/parent.component';
import { NestedChildComponent } from './nested-component/child.component';
import { NestedGrandsonComponent } from './nested-component/grandson.component';

import { ViewchildComponent, Item, ItemComponent } from './viewchild/viewchild.component';
import { HelloComponent } from './hello/hello.component';
import { ViewchildrenComponent, ChildCmp } from './viewchildren/viewchildren.component';

import { WordGroup, Word, ContentChildrenComp } from './contentchildren/contentchildren.component';
import { ButtonGroup, GroupTitle, childButtonCmp, ContentChildComp } from './contentchild/contentchild.component';

@NgModule({
  declarations: [
    AppComponent, IntroComponent,
    ChildToParentComponent, ChildComponent,
    ParentToChildInputsComponent, ChildInputsComponent,
    ParentToChildInputComponent, ChildInputComponent,
    ComponentStyleComponent, FirstDepthComponent, SecondDepthComponent,
    NestedParentComponent, NestedChildComponent, NestedGrandsonComponent,
    ViewchildComponent, Item, ItemComponent,
    HelloComponent,
    ViewchildrenComponent, ChildCmp,
    WordGroup, Word, ContentChildrenComp,
    ButtonGroup, GroupTitle, childButtonCmp, ContentChildComp
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }