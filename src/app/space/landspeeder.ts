import { SpaceShip } from "./space-ship";
import { Pilot } from "./pilot";

export class LandspeederShip extends SpaceShip {
    constructor(pilot?: Pilot) {
      super('Landspeeder', '/assets/landspeeder.jpg', pilot);
    }
  }