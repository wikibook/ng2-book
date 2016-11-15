import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



/* application router settings */
import { AppRoutingModule, appRoutingProviders } from './app.routing';

/* feature module */
import { MemberModule } from './member/member.module';
import { PlayerModule } from './player/player.module';
import { ChildrenModule } from './children/children.module';

/* global components */
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { HelloComponent } from './hello/hello.component';
import { RouterLinkTestComponent } from './router-link-test/router-link-test.component';
import { HrefTestComponent } from './router-link-test/href-test.component';
import { FirstPageComponent } from './pages/first-page.component';
import { SecondPageComponent } from './pages/second-page.component';
import { ThirdPageComponent } from './pages/third-page.component';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    BrowserModule, CommonModule, FormsModule,
    AppRoutingModule,
    MemberModule, PlayerModule, ChildrenModule
  ],
  providers: [appRoutingProviders],
  declarations: [
    AppComponent, IntroComponent, HelloComponent,
    RouterLinkTestComponent,
    HrefTestComponent,
    FirstPageComponent, SecondPageComponent, ThirdPageComponent,
    LoginComponent,
    AdminComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }