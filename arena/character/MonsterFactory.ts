import { Sprinter } from "./sprinter";
import { Zombie } from "./zombie";

export class MonsterFactory {
  createMonster(type: object);
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