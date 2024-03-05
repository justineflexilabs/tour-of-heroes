import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/data/schema/hero';
import { HeroService } from 'src/app/data/service/hero.service';
import { MessageService } from 'src/app/shared/service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];

  /**
   * subscribe for Observable events or ASYNC calls
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
