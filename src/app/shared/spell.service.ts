import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Spell } from '../model/spell';
import { Creature } from '../model/creature';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  constructor(private httpsClient: HttpClient) { }
  getSpells(): Observable<Spell[]>  {
    return this.httpsClient.get<Spell[]>(environment.spellUrl);
  }
  getSpellCreatures(list: string[]): Observable<Creature[]>  {
    return this.httpsClient.get<Creature[]>(environment.creatureUrl).pipe(
      map(items => {
        return items.filter(c => list.indexOf(c.id) > -1);
      })
    );
  }
}
