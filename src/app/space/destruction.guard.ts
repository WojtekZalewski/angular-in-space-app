import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { SpaceShipService } from './space-ship.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestructionGuard implements CanActivate {
  constructor(private spaceShipService: SpaceShipService,
              private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const hasSpaceShips = this.spaceShipService.hangarShips.getValue().length > 0;
    if (hasSpaceShips) { return true; }

    alert('Nie ma statków w hangarze!');
    return this.router.parseUrl('/');
  }
}

// export class DupaGuard implements CanActivate {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     return true;
//   }
// }
