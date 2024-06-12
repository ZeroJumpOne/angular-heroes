import { Injectable } from '@angular/core';
import { CanMatch, CanActivate, Route, UrlSegment, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanMatch, CanActivate {

   constructor(
      private authService: AuthService,
      private router: Router,
   ) {}

   private checkAuthStatus(): boolean | Observable<boolean> {

      return this.authService.checkAuthentication()
         .pipe(
            tap( isAuthenticared => console.log({ isAuthenticared })),
            tap( isAuthenticared => {
               if (isAuthenticared) {
                  this.router.navigateByUrl('./');
               }
            }),
            map( isAuthenticared => !isAuthenticared )
         );

   }

   canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {

      return this.checkAuthStatus();
   }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

      return this.checkAuthStatus();
   }



}
