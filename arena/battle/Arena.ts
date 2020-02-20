

export class Arena {

  fight(first_character, second_caracter) {
    let round = 0;

    for (let i = 0; i < 1000; i++) {
      ++round;

      if (round % 2 == 0) {
        first_character.attack(second_caracter);
      } else {
        second_caracter.attack(first_character);
      }

      if (first_character.isDead() || second_caracter.isDead()) {
        break;
      }
    }

    if (first_character.isDead()) {
      return second_caracter;
    } else if (second_caracter.isDead()) {
      return first_character;
    }
  }

  podium(character) {
    console.log(`${character.name} won the battle !`);
  }

}
