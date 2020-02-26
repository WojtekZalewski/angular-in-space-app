import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Sharon Valerii', '/assets/valerii.png'));
    this.pilots.push(new Pilot('Karl Agathon', 'assets/adama.png'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
  }
}
