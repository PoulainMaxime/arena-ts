interface ICharacter {
  _hp: number;
  _atk: number;
  name: String;
}

export class Character implements ICharacter {
  _hp: number;
  _atk: number;
  name: String;

  getHp(): number {
    return this._hp
  }

  getAtk(): number {
    return this._atk;
  }

  getName(): String {
    return this.name;
  }

  setHp(hp: number) {
    this._hp -= hp;
  }

  setAtk(atk: number) {
    this._atk -= atk;
  }
  isDead() {
    if (this.getHp() <= 0) {
      return true;
    }

    return false;
  }

  setName(name: String) {
    this.name = name;
  }

  stat() {
    console.log(`Name: ${this.getName()}\nHp: ${this.getHp()}\natk: ${this.getAtk()}`)
  }

  hit(atk) {
    this._hp -= atk;
  }

}