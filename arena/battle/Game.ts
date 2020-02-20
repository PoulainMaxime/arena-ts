import { MonsterFactory } from "../character/MonsterFactory"
import { Character } from "../character/Character"
import { Zombie } from "../character/zombie"
import { Arena } from "./Arena";

export class Game {

  characters = Array<Character>();
  factory = new MonsterFactory();
  arena = new Arena();

  constructor() {
    this.characters = [
      this.factory.createMonster({ name: "Julien", type: 'sprinter' }),
      this.factory.createMonster({ name: "Alexis", type: 'zombie' }),
      this.factory.createMonster({ name: "Pablo", type: 'zombie' }),
      this.factory.createMonster({ name: "Lola", type: 'sprinter' })
    ];
  }

  play() {
    let first_fight = this.arena.fight(this.characters[0], this.characters[1])
    this.arena.podium(first_fight);
  }
}
