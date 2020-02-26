import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotComponent } from './pilot/pilot.component';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';

@NgModule({
  imports: [
    CommonModule,
    SpaceRoutingModule
  ],
  declarations: [HangarComponent, SpaceShipComponent, PilotComponent, PilotRoomComponent],
  exports: [
    HangarComponent
  ]
})
export class SpaceModule { }
