import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { DestructionRoomComponent } from './destruction-room/destruction-room.component';
import { HangarComponent } from './hangar/hangar.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestructionGuard } from './destruction.guard';
import { PilotFormComponent } from './pilot-form/pilot-form.component';
import { PilotResolver } from './pilot.resolver';

const routes: Routes = [
  {
    path: 'space',
    component: HangarComponent,
    children: [
      {path: 'production', component: EngineersRoomComponent},
      {path: 'destruction', component: DestructionRoomComponent, canActivate: [DestructionGuard]},
      {path: '', redirectTo: 'production', pathMatch: 'full'}
    ]
  },
  {
    path: 'space/pilots/:id',
    component: PilotFormComponent,
    resolve: { pilot: PilotResolver}
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class SpaceRoutingModule { }
