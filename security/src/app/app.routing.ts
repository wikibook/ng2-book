import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { InnerhtmlComponent } from './innerhtml/innerhtml.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TrusturlComponent } from './trusturl/trusturl.component';
import { TrusthtmlComponent } from './trusthtml/trusthtml.component';
import { TrustresourceurlComponent } from './trustresourceurl/trustresourceurl.component';
import { TruststyleComponent } from './truststyle/truststyle.component';

const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'innerhtml', component: InnerhtmlComponent },
    { path: 'interpolation', component: InterpolationComponent },
    { path: 'trusturl', component: TrusturlComponent },
    { path: 'trusthtml', component: TrusthtmlComponent },
    { path: 'trustresourceurl', component: TrustresourceurlComponent },
    { path: 'truststyle', component: TruststyleComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);