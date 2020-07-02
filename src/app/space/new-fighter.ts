import { SpaceShip } from "./space-ship";
import { Pilot } from "./pilot";

export class NewFighterShip extends SpaceShip {
    constructor(pilot?: Pilot) {
      super('Myśliwiec', '/assets/fighter.jpg', pilot);
    }
  }