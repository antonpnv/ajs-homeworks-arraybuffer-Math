import { Character } from './Character';

export class Daemon extends Character {
  constructor(name, distance) {
    super(name, 'Daemon', distance);
    this.defence = 40;
  }
}
