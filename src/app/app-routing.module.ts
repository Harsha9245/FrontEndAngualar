import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';


const routes: Routes = [
{
  path:'displayMovies',
  component:DisplayMoviesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
