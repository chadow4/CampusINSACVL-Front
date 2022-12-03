import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackOfficeRoutingModule} from "./back-office-routing.module";
import { DashBoardComponent } from './Pages/dash-board/dash-board.component';

@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
