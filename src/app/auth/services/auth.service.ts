import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interfaces';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   private baseUrl: string = environments.baseURL;
   private user?: User;

   constructor(private http: HttpClient) { }

   get currentUser(): User | undefined {
      if (!this.user) return undefined;

      return structuredClone( this.user );
   }

   login(email: string, password: string): Observable<User> {

      return this.http.get<User>(`${ this.baseUrl }/users/1`)
         .pipe(
            tap( user => this.user = user),
            tap( user => localStorage.setItem('token', '1d21dza.dx241fas3.5dD12')),
         );

   }

   logout() {

      this.user = undefined;
      localStorage.clear();

   }

   checkAuthentication(): Observable<boolean> {

      if ( !localStorage.getItem('token') ) return of(false);

      // const token: string = localStorage.getItem('token');

      return this.http.get<User>(`${ this.baseUrl }/users/1`)
         .pipe(
            tap( (user) => this.user = user ),
            map( user => !!user ),
            catchError( err => of(false ))
         )

   }
}
