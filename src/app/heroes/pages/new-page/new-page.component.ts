import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Hero, Publisher } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { filter, switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit {

   public heroForm = new FormGroup({
      id:               new FormControl(''),
      superhero:        new FormControl('', { nonNullable: true }),
      publisher:        new FormControl<Publisher>(Publisher.MarvelComics),
      alter_ego:        new FormControl(''),
      first_appearance: new FormControl(''),
      characters:       new FormControl(''),
      alt_img:          new FormControl(''),
   });

   public poublishers= [
      { id: 'DC Comics', desc: 'DC - Comics'},
      { id: 'Marvel Comics', desc: 'Marvel - Comics'},
   ];

   constructor(
      private heroesService: HeroesService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private snackbar: MatSnackBar,
      private dialog: MatDialog,
   ) {}

   ngOnInit(): void {

      if (!this.router.url.includes('edit')) return;

      this.activatedRoute.params
         .pipe(
            switchMap( ({ id }) => this.heroesService.getHeroById( id)),
         ).subscribe( hero => {

            if (!hero) return this.router.navigateByUrl('/');

            this.heroForm.reset( hero );

            return;
         });
   }

   get currentHero(): Hero {

      const hero = this.heroForm.value as Hero;

      // console.log(hero);

      return hero;
   }

   public onSubmit(): void {

      if (this.heroForm.invalid) return;

      if (this.currentHero.id) {
         this.heroesService.updateHero( this.currentHero ).subscribe( hero => {

            this.onShowSnackbar(`${ hero.superhero } updated!`);

         });

         return;
      }

      this.heroesService.addHero( this.currentHero ).subscribe( hero => {

         this.router.navigate(['heroes/edit', hero.id]);
         this.onShowSnackbar(`${ hero.superhero } created!`);

      });

      // console.log({
      //    formIsValid: this.heroForm.valid,
      //    value: this.heroForm.value
      // });

   }

   onDeleteHero(): void {

      if( !this.currentHero.id ) throw Error('Hero id is required.');

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {

         data: this.currentHero

      });

      dialogRef.afterClosed()
      .pipe(
         filter( (rsp:boolean) => rsp),
         switchMap( () => this.heroesService.deleteHeroById( this.currentHero.id ) ),
         filter( (isDelete: boolean) => isDelete),
      )
      .subscribe( () => {
         this.router.navigateByUrl('/heroes');
      });

      // dialogRef.afterClosed().subscribe( (result) => {


      //    if(!result) return;

      //    this.heroesService.deleteHeroById( this.currentHero.id ).subscribe( isDelete => {

      //       if (isDelete) {
      //          console.log('Heroe eliminado');
      //          this.router.navigateByUrl('/heroes');
      //       }
      //    })


      // });



   }

   onShowSnackbar( msj: string): void {

      this.snackbar.open( msj, 'ok', {

         duration: 2500

      });

   }

}
