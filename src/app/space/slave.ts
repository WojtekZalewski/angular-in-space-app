import { SpaceShip } from "./space-ship";
import { Pilot } from "./pilot";

export class SlaveShip extends SpaceShip {
    constructor(pilot?: Pilot) {
      super('Slave I', '/assets/slaveI.jpeg', pilot);
    }
  }