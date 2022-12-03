import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashBoardComponent} from "./Pages/dash-board/dash-board.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule {
}
