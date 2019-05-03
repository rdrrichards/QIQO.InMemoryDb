import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const series = [
      { id: 1, name: 'Firefly' }
    ];
    const episodes = [
      { id: 1, name: 'Serenity', seriesId: 1 },
      { id: 2, name: 'The Train Job', seriesId: 1 },
      { id: 3, name: 'Bushwhacked', seriesId: 1 },
      { id: 4, name: 'Shindig', seriesId: 1 },
      { id: 5, name: 'Safe', seriesId: 1 },
      { id: 6, name: 'Our Misses Reynolds', seriesId: 1 },
      { id: 7, name: 'Jaynestown', seriesId: 1 },
      { id: 8, name: 'Out of Gas', seriesId: 1 },
      { id: 9, name: 'Ariel', seriesId: 1 },
      { id: 10, name: 'War Stories', seriesId: 1 },
      { id: 11, name: 'Trash', seriesId: 1 },
      { id: 12, name: 'The Message', seriesId: 1 },
      { id: 13, name: 'Heart of Gold', seriesId: 1 },
      { id: 14, name: 'Objects in Space', seriesId: 1 }
    ];
    const movies = [
      { id: 1, name: 'A New Hope' },
      { id: 2, name: 'The Empire Strikes Back' },
      { id: 3, name: 'Return of the Jedi' },
      { id: 4, name: 'Phantom Menace' },
      { id: 5, name: 'Attack of the Clones' },
      { id: 6, name: 'Revenge of the Sith' },
      { id: 7, name: 'Forrest Gump' },
      { id: 8, name: 'Notting Hill' },
      { id: 9, name: 'Serenity' },
      { id: 10, name: 'Star Trek: The Motion Picture' },
      { id: 11, name: 'Star Trek: The Wrath of Khan' },
      { id: 12, name: 'Star Trek: In Search of Spock' },
      { id: 13, name: 'Star Trek: The Return Home' },
      { id: 14, name: 'Star Trek: The Final Frontier' }
    ];
    return { series, episodes, movies };
  }
}
