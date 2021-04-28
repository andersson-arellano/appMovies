import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesListComponent } from "./pages/movies-list/movies-list.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: MoviesListComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
