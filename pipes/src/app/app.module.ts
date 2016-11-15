import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing,
  appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { DatePredefinedComponent }  from './date-predefined/date-predefined.component';
import { DateFormatsComponent }  from './date-formats/date-formats.component';
import { DateEtcComponent }  from './date-etc/date-etc.component';
import { DateExpressionComponent }  from './date-expression/date-expression.component';
import { UpperLowerComponent }  from './upper-lower/upper-lower.component';
import { AsyncComponent }  from './async/async.component';
import { JsonComponent }  from './json/json.component';

import { DecimalComponent }  from './decimal/decimal.component';
import { PercentComponent }  from './percent/percent.component';
import { CurrencyComponent }  from './currency/currency.component';
import { SliceComponent }  from './slice/slice.component';
import { I18nSelectComponent }  from './i18n-select/i18n-select.component';
import { I18nPluralComponent }  from './i18n-plural/i18n-plural.component';
import { ChainingPipesComponent }  from './chaining-pipes/chaining-pipes.component';

import { CustomFilterComponent }  from './custom-filter/custom-filter.component';
import { FilterPipe } from './custom-filter/filter.pipe';

import { CustomLimittoComponent }  from './custom-limitto/custom-limitto.component';
import { LimittoPipe } from './custom-limitto/limitto.pipe';

import { CustomNumberComponent }  from './custom-number/custom-number.component';
import { NumberPipe } from './custom-number/number.pipe';

import { CustomOrderbyComponent }  from './custom-orderby/custom-orderby.component';
import { OrderbyPipe } from './custom-orderby/orderby.pipe';

import { CustomSearchComponent }  from './custom-search/custom-search.component';
import { SearchPipe } from './custom-search/search.pipe';


import { CustomReplaceComponent }  from './custom-replace/custom-replace.component';
import { ReplacePipe } from './custom-replace/replace.pipe'

@NgModule({
  declarations: [
    AppComponent, IntroComponent, DatePredefinedComponent, DateFormatsComponent, DateEtcComponent, DateExpressionComponent, UpperLowerComponent, AsyncComponent, JsonComponent, 
    DecimalComponent, PercentComponent, CurrencyComponent, SliceComponent, I18nSelectComponent, I18nPluralComponent, ChainingPipesComponent,

    CustomFilterComponent, FilterPipe,
    CustomLimittoComponent, LimittoPipe,
    CustomNumberComponent, NumberPipe,
    CustomOrderbyComponent, OrderbyPipe,
    CustomSearchComponent, SearchPipe,
    CustomReplaceComponent, ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    routing
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
