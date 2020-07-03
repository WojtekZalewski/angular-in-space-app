import { Pilot } from './pilot';

export abstract class SpaceShip {
  modelName: string;
  imageUrl: string;
  health = 75;
  activeShields = true;
  activeWeapons = true;
  pilot: Pilot;

  constructor(modelName: string, imageUrl: string, pilot: Pilot) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
    this.pilot = pilot;
  }
}

export class FighterShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('X-wing', '/assets/xwing.png', pilot);
  }
}

export class TieShip extends SpaceShip{
  constructor(pilot?: Pilot) {
      super('Tie fighter','/assets/tie.png', pilot);
  }
}

export class BomberShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Bomber', '/assets/bomber.ico', pilot);
  }
}

export class LambdaShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Lambda', '/assets/lambda.png', pilot);
  }
}

export class FalconShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Millennium Falcon', '/assets/falcon.png', pilot);
  }
}