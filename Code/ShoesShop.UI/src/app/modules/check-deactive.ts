import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

export interface CheckDeactive {
  checkDeactive(
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean;
}
