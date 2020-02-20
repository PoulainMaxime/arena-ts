import { ICharacter } from "./ICharacter";

export class Character implements ICharacter {
  _hp: number;
  _atk: number;
  name: string;

  getHp(): number {
    return this._hp
  }

  getAtk(): number {
    return this._atk;
  }

  getName(): string {
    return this.name;
  }

  setHp(hp: number) {
    this._hp -= hp;
  }

  setAtk(atk: number) {
    this._atk -= atk;
  }

  isDead(): boolean {
    return this.getHp() <= 0 ? true : false;
  }

  setName(name: string) {
    this.name = name;
  }

  stat() {
    console.log(`Name: ${this.getName()}\nHp: ${this.getHp()}\natk: ${this.getAtk()}`)
  }

  hit(atk: number) {
    this._hp -= atk;
  }

}