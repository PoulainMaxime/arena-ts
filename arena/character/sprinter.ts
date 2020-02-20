import { Character } from "./Character"


export class Sprinter extends Character {
  _hp: number;
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
    this._hp = 100;
  }

  attack(character) {
    if (character instanceof Character) {
      const atk = Math.floor(Math.random() * 50) + 1;
      console.log(`${character.getName()} attack! => ${atk}`)
      character.hit(atk);
    }
  }
}