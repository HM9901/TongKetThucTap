import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { EditProductComponent } from '../components/edit-product/edit-product.component';

@Injectable({
  providedIn: 'root',
})
export class CanLeaveEditGuardService
  implements CanDeactivate<EditProductComponent>
{
  canDeactivate(
    component: EditProductComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) {
    return component.canExit();
  }
  constructor() {}
}
