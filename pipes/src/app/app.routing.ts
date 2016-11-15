import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { DatePredefinedComponent }  from './date-predefined/date-predefined.component';
import { DateFormatsComponent }  from './date-formats/date-formats.component';
import { DateEtcComponent }  from './date-etc/date-etc.component';
import { DateExpressionComponent }  from './date-expression/date-expression.component';
import { UpperLowerComponent }  from './upper-lower/upper-lower.component';
import { AsyncComponent }  from './async/async.component';
import { JsonComponent }  from './json/json.component';
import { CustomReplaceComponent }  from './custom-replace/custom-replace.component';
import { DecimalComponent }  from './decimal/decimal.component';
import { PercentComponent }  from './percent/percent.component';
import { CurrencyComponent }  from './currency/currency.component';
import { SliceComponent }  from './slice/slice.component';
import { I18nSelectComponent }  from './i18n-select/i18n-select.component';
import { I18nPluralComponent }  from './i18n-plural/i18n-plural.component';
import { ChainingPipesComponent }  from './chaining-pipes/chaining-pipes.component';
import { CustomNumberComponent }  from './custom-number/custom-number.component';
import { CustomLimittoComponent }  from './custom-limitto/custom-limitto.component';
import { CustomFilterComponent }  from './custom-filter/custom-filter.component';
import { CustomOrderbyComponent }  from './custom-orderby/custom-orderby.component';
import { CustomSearchComponent }  from './custom-search/custom-search.component';

const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'date-expression', component: DateExpressionComponent },
    { path: 'date-formats', component: DateFormatsComponent },
    { path: 'date-etc', component: DateEtcComponent },
    { path: 'date-predefined', component: DatePredefinedComponent },
    { path: 'upper-lower', component: UpperLowerComponent },
    { path: 'currency', component: CurrencyComponent },
    { path: 'percent', component: PercentComponent },
    { path: 'async', component: AsyncComponent },
    { path: 'json', component: JsonComponent },
    { path: 'decimal', component: DecimalComponent },
    { path: 'slice', component: SliceComponent },
    { path: 'i18n-select', component: I18nSelectComponent },
    { path: 'i18n-plural', component: I18nPluralComponent },
    { path: 'chaining-pipes', component: ChainingPipesComponent },
    { path: 'custom-replace', component: CustomReplaceComponent },
    { path: 'custom-number', component: CustomNumberComponent },
    { path: 'custom-limitto', component: CustomLimittoComponent },
    { path: 'custom-filter', component: CustomFilterComponent },
    { path: 'custom-orderby', component: CustomOrderbyComponent },
    { path: 'custom-search', component: CustomSearchComponent }


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);