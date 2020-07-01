import { SpaceShip } from "./space-ship";
import { Pilot } from "./pilot";

export class FighterShip extends SpaceShip{
    constructor(pilot?: Pilot) {
        super('X-wing','/assets/xwing.png', pilot);
    }
}
