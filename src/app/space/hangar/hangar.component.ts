import { Component, OnInit } from '@angular/core';
import { BomberShip, FighterShip, SpaceShip } from '../space-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];

  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new FighterShip(new Pilot('Lee Adama', '/assets/adama.png')));
    this.spaceShips.push(new BomberShip());
  }

}
