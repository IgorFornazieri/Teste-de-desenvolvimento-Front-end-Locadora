import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieRegisterComponent } from './components/movie-register/movie-register.component';

const routes: Routes = [
  { path: 'movie-register', component: MovieRegisterComponent },
  { path: '**', redirectTo: '/movie-register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
