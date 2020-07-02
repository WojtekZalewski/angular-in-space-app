import { OrderFormValue } from "./order-form-value";
import { Injectable } from "@angular/core";
import { Observable, interval, BehaviorSubject } from "rxjs";
import { SpaceShipType } from "./space-ship-type.enum";
import { SpaceShip, FighterShip, TieShip, BomberShip, LambdaShip, SlaveShip, FalconShip, NewFighterShip, LandspeederShip } from "./space-ship";
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class SpaceShipService {
  static shipProductionTime = 2000;

  hangarShips = new BehaviorSubject<SpaceShip[]>([]);

  constructor() {}

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const shipClass =
      (formValues.shipType === SpaceShipType.Fighter) ? FighterShip :
      (formValues.shipType === SpaceShipType.Tie) ? TieShip :
      (formValues.shipType === SpaceShipType.Bomber) ? BomberShip :
      (formValues.shipType === SpaceShipType.Lambda) ? LambdaShip :
      (formValues.shipType === SpaceShipType.Slave) ? SlaveShip :
      (formValues.shipType === SpaceShipType.Falcon) ? FalconShip :
      (formValues.shipType === SpaceShipType.NewFighter) ? NewFighterShip : LandspeederShip;
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
      tap((spaceShip) => this.hangarShips.next([...this.hangarShips.getValue(), spaceShip]))
    );
  }
  
  removeShip(shipIndex: number) {
    const ships = [...this.hangarShips.getValue()];
    ships.splice(shipIndex, 1);
    this.hangarShips.next(ships);
  }
}