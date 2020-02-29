import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlackHoleComponent } from './black-hole/black-hole.component';

const routes: Routes = [
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
