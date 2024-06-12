import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(private herosService: HeroesService) {}

  ngOnInit(): void {
    this.herosService.getHeroes().subscribe( (heroes) => {
      // console.log(heroes);
      this.heroes = heroes;
    })
  }

}
