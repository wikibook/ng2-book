import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { PersonData } from './data/person-data';
/* application router settings */
import { AppRoutingModule, appRoutingProviders } from './app.routing';

/* feature module */

/* global components */
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { NotFoundComponent } from './not-found.component';

import { PromisePrototypeComponent } from './promise/promise-prototype.component';
import { PromiseMethodComponent } from './promise/promise-method.component';

import { WikiComponent } from './wiki/wiki.component';
import { WikiPromiseComponent } from './wiki/wiki.component.promise';

import { PersonListComponent } from './person/person-list.component';
import { PersonListPromiseComponent } from './person/person-list.component.promise';
import { ItemEditComponent } from './person/item-edit.component';

@NgModule({
  imports: [
    BrowserModule, CommonModule, FormsModule,
    AppRoutingModule,
    HttpModule, JsonpModule,
    InMemoryWebApiModule.forRoot(PersonData)
  ],
  providers: [appRoutingProviders],
  declarations: [
    AppComponent, IntroComponent,
    NotFoundComponent,
    PromisePrototypeComponent, PromiseMethodComponent, 
    WikiComponent, WikiPromiseComponent,
    PersonListComponent, PersonListPromiseComponent,
    ItemEditComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
