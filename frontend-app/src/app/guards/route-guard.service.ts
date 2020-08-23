import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(public authService: AuthService) {}

  public canActivate(route: ActivatedRouteSnapshot) {
    console.log('guard');

    this.authService.auth$.subscribe((data) => {
      const user = data.auth;
      console.log('$$', user);

      if (user && user.role == 'ADMIN') {
        return true;
      }
    });
    return false;
  }
}
