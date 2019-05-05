import { Creature } from './creature';

export class Wolf implements Creature {

  constructor(public id: string,
              public description: string,
              public strength: number,
              public dexterity: number,
              public constitution: number,
              public intelligence: number,
              public wisdom: number,
              public charisma: number) {}

}
