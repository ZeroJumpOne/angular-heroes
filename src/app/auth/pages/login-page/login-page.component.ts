import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

   constructor(
      private authService: AuthService,
      private router: Router,
   ) {}

   public onLogin() : void {

      this.authService.login('isaac@zerojumpone.mx', 'siempre').subscribe( user => {
         console.log(user);

         this.router.navigateByUrl('/');

      })

   }

}
