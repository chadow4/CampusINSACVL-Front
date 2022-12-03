import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BackOfficeModule} from "./back-office/back-office.module";
import {FrontOfficeModule} from "./front-office/front-office.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BackOfficeModule,
    FrontOfficeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
