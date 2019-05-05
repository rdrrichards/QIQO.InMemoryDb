import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Spell } from '../model/spell';
import { Creature } from '../model/creature';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private spellUrl = 'api/spells';
  private creatureUrl = 'api/creatures';
  constructor(private httpsClient: HttpClient) { }
  getSpells(): Observable<Spell[]>  {
    return this.httpsClient.get<Spell[]>(this.spellUrl);
  }
  getSpellCreatures(list: string[]): Observable<Creature[]>  {
    return this.httpsClient.get<Creature[]>(this.creatureUrl).pipe(
      map(items => {
        return items.filter(c => list.indexOf(c.id) > -1);
      })
    );
  }
}
