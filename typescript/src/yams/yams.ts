export function YamsCombinationCalculator(roll: number[], Ones: any): number {

    const onlyOnes = roll.filter(diceIsOne);

    return onlyOnes.length;

    function diceIsOne(dice: number) {
        return dice === 1;
    }
}

export enum Combinations {
    Ones
}
