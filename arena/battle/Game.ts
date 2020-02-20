import { Character } from "../character/Character";
import { MonsterFactory } from "../character/MonsterFactory";
import { Arena } from "./Arena";

export class Game {

  characters = Array<Character>();
  factory = new MonsterFactory();
  arena = new Arena();

  constructor() {
    this.characters.push(this.factory.createMonster({ name: "Julien", type: 'sprinter' }));
    this.characters.push(this.factory.createMonster({ name: "Alexis", type: 'zombie' }));
    this.characters.push(this.factory.createMonster({ name: "Pablo", type: 'zombie' }));
    this.characters.push(this.factory.createMonster({ name: "Lola", type: 'sprinter' }));
  }

  play() {
    const firstFight = this.arena.fight(this.characters[0], this.characters[1])
    this.arena.podium(firstFight);
  }
}
