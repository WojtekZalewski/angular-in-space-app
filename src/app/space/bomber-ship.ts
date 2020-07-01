import { SpaceShip } from "./space-ship";
import { Pilot } from "./pilot";

export class BomberShip extends SpaceShip {
    constructor(pilot?: Pilot) {
        super('Bomber','assets/bomber.ico', pilot);
    }
}
