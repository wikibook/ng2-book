import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro.component';
import { ElementStatusComponent } from './element-status/element-status.component';
import { BuiltInValidatorComponent } from './built-in-validator/built-in-validator.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormReferenceVariableComponent } from './form-reference-variable/form-reference-variable.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';
import { FormStatusComponent } from './form-status/form-status.component';

const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'built-in-validator', component: BuiltInValidatorComponent },
  { path: 'element-status', component: ElementStatusComponent },
  { path: 'form-reference-variable', component: FormReferenceVariableComponent },
  
  { path: 'form-group', component: FormGroupComponent },
  { path: 'custom-validator', component: CustomValidatorsComponent },
  { path: 'form-status', component: FormStatusComponent },  
  
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);