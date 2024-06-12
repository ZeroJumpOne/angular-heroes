import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanMatch, CanActivate {

   constructor(
      private authService: AuthService,
      private router: Router,
   ) { }

   private checkAuthStatus(): boolean | Observable<boolean> {

      return this.authService.checkAuthentication()
         .pipe(
            tap( isAuthenticared => console.log({ isAuthenticared}) ),
            tap( isAuthenticared => {
               if (!isAuthenticared) {
                  this.router.navigateByUrl('/auth/login');
               }
            }),
         );

   }

   canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {

      // console.log('CanMatch');
      // console.log({ route, segments });

      return this.checkAuthStatus();
   }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

      // console.log('CanActivate');
      // console.log({ route, state });

      return this.checkAuthStatus();
   }

}
