import { Creature } from './creature';

export class Spell {
  id: string;
  description: string;
  group: string;
  level: number;
  levelList: number[];
  classes: string[];
  creatureList: string[];
  creatures: Creature[];
  // getLevelList() {
  //   this.levelList = [];
  //   for (let i = 1; i <= this.level; i++) {
  //     this.levelList.push(i);
  //   }
  // }
}
