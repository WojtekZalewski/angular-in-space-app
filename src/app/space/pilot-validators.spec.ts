import { FormControl } from "@angular/forms";
import { PilotValidators } from "./pilot-validators";
import { ajax } from "rxjs/ajax";

fdescribe("PilotValidators", () => {
  describe("pilotName", () => {
    describe("when value is empty", () => {
      it("should return null", () => {
        const control = new FormControl("");
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });

    describe("when starts from uppercase letter", () => {
      it("should return null", () => {
        const control = new FormControl("Adam");
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });

    describe("when starts from lowercase letter", () => {
      it("should return null", () => {
        const control = new FormControl("adam");
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });
  });

  describe("PilotForbidden", () => {
    describe("when value is empty", () => {
      it("should return observable with null", () => {
        const control = new FormControl("");
        PilotValidators.pilotForbidden(control).subscribe(result =>
          expect(result).toBeNull()
        );
      });
    });

    describe("when value is forbidden", () => {
      it("should return observable with validation object", () => {
        const control = new FormControl("Ciapciak");
        spyOn(ajax, "getJSON").and.returnValue(of([{ name: "Ciapciak" }]));
        PilotValidators.pilotForbidden(control).subscribe(result =>
          expect(result).toEqual({ pilotForbidden: true })
        );
      });
    });

    describe("when value is not forbidden", () => {
      it("should return observable with null", () => {
        const control = new FormControl("Adama");
        spyOn(ajax, "getJSON").and.returnValue(of([]));
        PilotValidators.pilotForbidden(control).subscribe(result =>
          expect(result).toBeNull()
        );
      });
    });
  });
});