import { Component, OnInit, ViewChild } from '@angular/core';
import { BomberShip, FighterShip, SpaceShip } from '../space-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  // spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot = null;

  spaceShips = this.spaceShipService.hangarShips;

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
    // this.spaceShips.push(new FighterShip(new Pilot('Lee Adama', '/assets/adama.png')));
    // this.spaceShips.push(new BomberShip());
  }

  assignPilot(spaceShip: SpaceShip): void {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  deassignPilot(spaceShip: SpaceShip): void {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

}

