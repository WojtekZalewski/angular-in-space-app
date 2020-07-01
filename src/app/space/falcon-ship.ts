import { SpaceShip } from "./space-ship";
import { Pilot } from "./pilot";

export class FalconShip extends SpaceShip{
    constructor(pilot?: Pilot) {
        super('Sokół Millennium','/assets/falcon.jpg', pilot);
    }
}