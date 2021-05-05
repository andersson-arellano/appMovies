import { SeriesListComponent } from './pages/series-list/series-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { MoviesListComponent } from "./pages/movies-list/movies-list.component";
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  {
    path: 'movies',
    children: [
      { path: 'list', component: MoviesListComponent },
      { path: '**', redirectTo: 'list' }
    ]
  },
  {
    path:'series',
    children: [
      { path: 'list', component:SeriesListComponent},
      { path: '**', redirectTo:'list'}
    ]
  },
  { path:'about', component:AboutComponent},
  { path: '**', redirectTo:''}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
