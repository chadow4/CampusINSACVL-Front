import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrontOfficeRoutingModule} from "./front-office-routing.module";
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule
  ]
})
export class FrontOfficeModule { }
