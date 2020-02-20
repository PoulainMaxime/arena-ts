import { Zombie } from "./zombie"
import { Sprinter } from "./sprinter"

export class MonsterFactory {
  createMonster(type: Object);
  createMonster(type: 'zombie'): Zombie;
  createMonster(type: 'sprinter'): Sprinter;

  public createMonster(monster): Zombie | Sprinter {
    if (monster.type === "zombie") {
      return new Zombie(monster.name);
    } else if (monster.type === "sprinter") {
      return new Sprinter(monster.name);
    } else {
      throw new Error("Please select a valid Monster");
    }
  }
}