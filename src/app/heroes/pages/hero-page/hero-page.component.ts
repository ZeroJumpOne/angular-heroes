import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit {

   public hero?: Hero;

   constructor (
      private heroesServices: HeroesService,
      private activateRoute: ActivatedRoute,
      private router: Router
   ) {}

   ngOnInit(): void {

      this.activateRoute.params
         .pipe(
            // delay(3000),
            switchMap( ({ id }) => this.heroesServices.getHeroById( id ) ),

         ).subscribe( hero => {
            console.log({ hero });
            if (!hero) return this.router.navigate(['heroes/list']);

            this.hero = hero;
            return;
         });
   }

   public goBack(): void {

      this.router.navigateByUrl('heroes/list');

   }

}
