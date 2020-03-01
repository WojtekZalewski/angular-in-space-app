import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';
import { PilotComponent } from './pilot/pilot.component';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DestructionRoomComponent } from './destruction-room/destruction-room.component';
import { PilotFormComponent } from './pilot-form/pilot-form.component';

@NgModule({
  imports: [
    CommonModule,
    SpaceRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    HangarComponent,
    SpaceShipComponent,
    PilotRoomComponent,
    PilotComponent,
    EngineersRoomComponent,
    DestructionRoomComponent,
    PilotFormComponent
  ],
  exports: [HangarComponent]
})
export class SpaceModule { }
