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
    return { episodes };
  }
}
