import { Character } from "../character/Character";

export class Arena {

  fight(firstCharacter, secondCaracter): Character {
    let round = 0;

    for (let i = 0; i < 1000; i++) {
      ++round;

      if (round % 2 === 0) {
        firstCharacter.attack(secondCaracter);
      } else {
        secondCaracter.attack(firstCharacter);
      }

      if (firstCharacter.isDead() || secondCaracter.isDead()) {
        break;
      }
    }

    if (firstCharacter.isDead()) {
      return secondCaracter;
    } else if (secondCaracter.isDead()) {
      return firstCharacter;
    }
  }

  podium(character) {
    console.log(`${character.name} won the battle !`);
  }

}
