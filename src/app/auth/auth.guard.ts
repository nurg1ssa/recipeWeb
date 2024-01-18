import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
class isAuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        const isAuth = !!user;
        if (!isAuth) {
          return this.router.createUrlTree(['/sign-in']);
        }
        return isAuth;
      })
      //   tap((isAuth) => {
      //     if (!isAuth) {
      //       this.router.navigate(['sign-in']);
      //     }
      //   })
    );
  }
}
export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree> => {
  return inject(isAuthGuard).canActivate(route, state);
};
