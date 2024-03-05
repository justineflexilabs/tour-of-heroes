import { Component, OnInit } from '@angular/core';
import { Hero } from '@data/hero/hero.types';
import { HeroService } from '@data/hero/hero.service';
import { MessageService } from '@shared/service/message.service';

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
