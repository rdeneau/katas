export function YamsCombinationCalculator(roll: number[], combination: Combination): number {

    if (combination === Combination.Twos) {
        const onlyTwos = roll.filter(diceIsTwo)

        return onlyTwos.length * 2;
    }

    const onlyOnes = roll.filter(diceIsOne);

    return onlyOnes.length;

    function diceIsOne(dice: number) {
        return dice === 1;
    }

    function diceIsTwo(dice: number) {
        return dice === 2;
    }
}

export enum Combination {
    Ones,
    Twos,
}
