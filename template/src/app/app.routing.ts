import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OnewayStatementComponent } from './oneway-statement/oneway-statement.component';
import { OnewayExpressionComponent } from './oneway-expression/oneway-expression.component';
import { TwowayNgmodelComponent } from './twoway-ngmodel/twoway-ngmodel.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgForComponent } from './ngfor/ngfor.component';

import { TemplateInputVariablesComponent } from './template-input-variables/template-input-variables.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TemplateNgforComponent } from './template-ngfor/template-ngfor.component';

const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'interpolation', component: InterpolationComponent },
    { path: 'oneway-expression', component: OnewayExpressionComponent },
    { path: 'oneway-statement', component: OnewayStatementComponent },
    { path: 'twoway-ngmodel', component: TwowayNgmodelComponent },
    { path: 'ngclass', component: NgclassComponent },
    { path: 'ngstyle', component: NgstyleComponent },
    { path: 'ngif', component: NgifComponent },         
    { path: 'ngswitch', component: NgswitchComponent }, 
    { path: 'ngfor', component: NgForComponent }, 
    { path: 'template-input-variables', component: TemplateInputVariablesComponent },
    { path: 'template-reference-variables', component: TemplateReferenceVariablesComponent },
    { path: 'template-ngfor', component: TemplateNgforComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);