import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SpaceShipType } from "../space-ship-type.enum";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { OrderFormValue } from "../order-form-value";
import { SpaceShip } from "../space-ship";
import { SpaceShipService } from "../space-ship.service";
import { map } from "rxjs/operators";

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: "app-engineers-room",
  templateUrl: "./engineers-room.component.html",
  styleUrls: ["./engineers-room.component.css"],
})
export class EngineersRoomComponent implements OnInit {
  shipsCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

  spaceShipTypes: ShipType[] = [
    { label: "X-wing", value: SpaceShipType.Fighter },
    { label: "Tie Fighter", value: SpaceShipType.Tie },
    { label: "Bomber", value: SpaceShipType.Bomber },
    { label: "Lambda", value: SpaceShipType.Lambda },
    { label: "Millennium Falcon", value: SpaceShipType.Falcon }
  ];

  form = new FormGroup({
    shipType: new FormControl(SpaceShipType.Fighter, {
      validators: [Validators.required],
    }),
    shipCount: new FormControl(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
    }),
  });
  isProducing: boolean;
  shipProduced: any;
  shipCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

  constructor(private spaceShipService: SpaceShipService) {}

  ngOnInit() {}

  orderSpaceShips(formValues: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues).subscribe({
      complete: () => (this.isProducing = false),
    });
  }
}
