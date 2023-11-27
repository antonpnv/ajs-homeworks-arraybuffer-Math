export class Character {
  constructor(name, type, distance) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.distance = distance;
    this._stoned = false;
    this.baseAttack = 10;

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }

    const validHeroTypes = ['Magician', 'Daemon'];

    if (!validHeroTypes.includes(type)) {
      throw new Error('Недопустимый тип персонажа');
    }
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    const distanceEffect = 100 - (this.distance - 1) * 10;
    const attackWithoutStoned = Math.round((distanceEffect * this.baseAttack) / 100);

    if (this.stoned) {
      const stonedAttack = Math.round(attackWithoutStoned - Math.log2(this.distance) * 5);
      return stonedAttack >= 0 ? stonedAttack : 0;
    } else {
      return attackWithoutStoned;
    }
  }

  set attack(value) {
    const baseAttack = value >= 0 ? value : 0;
    this._attack = baseAttack; // Базовая атака без модификаторов
  }
}
