import { Component, OnInit } from '@angular/core';
import { SpellService } from 'src/app/shared/spell.service';
import { Spell } from 'src/app/model/spell';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  spells: Spell[];
  constructor(private spellService: SpellService) { }

  ngOnInit() {
    this.spellService.getSpells().subscribe(spells => {
      this.spells = spells;
      this.getSpellCreatures();
    });
  }
  getSpellCreatures() {
    this.spells.map(s => {
      this.spellService.getSpellCreatures(s.creatureList).subscribe(creatures => {
        s.creatures = creatures;
      });
    });
  }

}
