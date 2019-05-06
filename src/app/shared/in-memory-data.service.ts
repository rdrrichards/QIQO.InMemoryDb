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
    const franchises = [
      { id: 1, name: 'Star Wars' },
      { id: 2, name: 'Star Trek' },
      { id: 3, name: 'N/A' }
    ];
    const movies = [
      { id: 1, name: 'A New Hope', franchiseId: 1 },
      { id: 2, name: 'The Empire Strikes Back', franchiseId: 1 },
      { id: 3, name: 'Return of the Jedi', franchiseId: 1 },
      { id: 4, name: 'Phantom Menace', franchiseId: 1 },
      { id: 5, name: 'Attack of the Clones', franchiseId: 1 },
      { id: 6, name: 'Revenge of the Sith', franchiseId: 1 },
      { id: 7, name: 'Forrest Gump', franchiseId: 3 },
      { id: 8, name: 'Notting Hill', franchiseId: 3 },
      { id: 9, name: 'Serenity', franchiseId: 3 },
      { id: 10, name: 'Star Trek: The Motion Picture', franchiseId: 2 },
      { id: 11, name: 'Star Trek II: The Wrath of Khan', franchiseId: 2 },
      { id: 12, name: 'Star Trek III: In Search of Spock', franchiseId: 2 },
      { id: 13, name: 'Star Trek IV: The Voyage Home', franchiseId: 2 },
      { id: 14, name: 'Star Trek V: The Final Frontier', franchiseId: 2 },
      { id: 14, name: 'Star Trek VI: The Undiscovered Country', franchiseId: 2 },
      { id: 14, name: 'Star Trek Generations', franchiseId: 2 },
      { id: 14, name: 'Star Trek: First Contact', franchiseId: 2 },
      { id: 14, name: 'Star Trek: Insurrection', franchiseId: 2 },
      { id: 14, name: 'Star Trek: Nemesis', franchiseId: 2 },
      { id: 14, name: 'Star Trek', franchiseId: 2 },
      { id: 14, name: 'Star Trek Into Darkness', franchiseId: 2 },
      { id: 14, name: 'Star Trek Beyond', franchiseId: 2 }
    ];
    const spells = [
      {
        id: 'summonnaturesally1',
        description: 'Summon Nature\'s Ally I',
        group: 'summonnaturesally',
        level: 1,
        classes: ['druid1', 'ranger1', 'shaman1'],
        creatureList: [
          'direrat',
          'dog',
          'dolphin'
        ]
      },
      {
        id: 'summonnaturesally2',
        description: 'Summon Nature\'s Ally II',
        group: 'summonnaturesally',
        level: 2,
        classes: ['druid2', 'ranger2', 'shaman2'],
        creatureList: [
          'horse',
          'octopus',
          'wolf'
        ]
      }
    ];
    const creatures = [
      {
        id: 'direrat',
        description: 'Dire Rat',
        strength: 10,
        dexterity: 17,
        constitution: 12,
        intelligence: 2,
        wisdom: 12,
        charisma: 4
      },
      {
        id: 'dog',
        description: 'Dog',
        strength: 13,
        dexterity: 13,
        constitution: 15,
        intelligence: 2,
        wisdom: 12,
        charisma: 6
      },
      {
        id: 'dolphin',
        description: 'Dolphin',
        strength: 12,
        dexterity: 15,
        constitution: 13,
        intelligence: 2,
        wisdom: 12,
        charisma: 6
      },
      {
        id: 'horse',
        description: 'Horse',
        strength: 16,
        dexterity: 14,
        constitution: 17,
        intelligence: 2,
        wisdom: 13,
        charisma: 7
      },
      {
        id: 'octopus',
        description: 'Octopus',
        strength: 12,
        dexterity: 17,
        constitution: 14,
        intelligence: 2,
        wisdom: 13,
        charisma: 3
      },
      {
        id: 'wolf',
        description: 'Wolf',
        strength: 13,
        dexterity: 15,
        constitution: 15,
        intelligence: 2,
        wisdom: 12,
        charisma: 6
      }
    ];
    return { series, episodes, franchises, movies, spells, creatures };
  }
}
