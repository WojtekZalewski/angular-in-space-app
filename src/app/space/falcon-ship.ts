import { SpaceShip } from "./space-ship";
import { Pilot } from "./pilot";

export class FalconShip extends SpaceShip{
    constructor(pilot?: Pilot) {
        super('Millennium Falcon','/assets/falcon.jpg', pilot);
    }
}