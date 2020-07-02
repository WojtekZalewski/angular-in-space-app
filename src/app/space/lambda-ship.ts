import { SpaceShip } from "./space-ship";
import { Pilot } from "./pilot";

export class LambdaShip extends SpaceShip {
    constructor(pilot?: Pilot) {
      super('Lambda', '/assets/lambda.png', pilot);
    }
  }