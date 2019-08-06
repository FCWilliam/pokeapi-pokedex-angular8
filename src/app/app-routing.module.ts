import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PokeListComponent },
  { path: 'details/:id', component: PokeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
