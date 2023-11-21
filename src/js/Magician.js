import { Character } from './Character';

export class Magician extends Character {
  constructor(name, distance) {
    super(name, 'Magician', distance);
    this.defence = 40;
  }
}
