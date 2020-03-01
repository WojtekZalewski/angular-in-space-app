import { SpaceShipService } from './../space-ship.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-destruction-room',
  templateUrl: './destruction-room.component.html',
  styleUrls: ['./destruction-room.component.css']
})
export class DestructionRoomComponent implements OnInit {
  
  shipIndexControl = new FormControl(null);
  spaceShips = this.spaceShipService.hangarShips;

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
  }

  orderDestruction() {
    this.spaceShipService.removeShip(this.shipIndexControl.value);
    this.shipIndexControl.reset();
  }

}
