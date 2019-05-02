import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const episodes = [
      { id: 1, name: 'Serentiy' },
      { id: 2, name: 'The Train Job' },
      { id: 3, name: 'Bushwhacked' },
      { id: 4, name: 'Shindig' },
      { id: 5, name: 'Safe' },
      { id: 6, name: 'Our Misses Reynolds' },
      { id: 7, name: 'Jaynestown' },
      { id: 8, name: 'Out of Gas' },
      { id: 9, name: 'Ariel' },
      { id: 10, name: 'War Stories' },
      { id: 11, name: 'Trash' },
      { id: 12, name: 'The Message' },
      { id: 13, name: 'Heart of Gold' },
      { id: 14, name: 'Objects in Space' }
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
    return { episodes, movies };
  }
}
