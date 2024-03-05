import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/shared/service/message.service';

import { Hero } from '../schema/hero';
import { HEROES } from './hero';

/**
 *  This marks the class as one that participates in the dependency injection system
 * The HeroService class is going to provide an injectable service, and it can also have its own injected dependencies.
 * It doesn't have any dependencies yet.
 */
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  /**
   *
   * @param messageService This is an example of a typical service-in-service scenario in which you
   * inject the MessageService into the HeroService which is injected into the HeroesComponent.
   */
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
