import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./Pages/home/home.component";
import {AboutComponent} from "./Pages/about/about.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'a-propos',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule {
}
