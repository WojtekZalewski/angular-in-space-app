import { Pilot } from './pilot';

export abstract class SpaceShip {
  modelName: string;
  imageUrl: string;
  health = 100;
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

export class BomberShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Bomber', '/assets/bomber.ico', pilot);
  }
}

export class FalconShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('SoŻoł', '/assets/', pilot);
  }
}