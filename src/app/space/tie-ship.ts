import { SpaceShip } from "./space-ship";
import { Pilot } from "./pilot";

export class TieShip extends SpaceShip{
    constructor(pilot?: Pilot) {
        super('Tie fighter','/assets/tie.png', pilot);
    }
}