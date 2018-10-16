interface Combination {
    computeResult(roll: number[]): number
}

export class OnesCombination implements Combination {
    computeResult(roll: number[]): number {
        const onlyOnes = roll.filter(diceIsOne);

        return onlyOnes.length;

        function diceIsOne(dice: number) {
            return dice === 1;
        }
    }
}

export class TwosCombination implements Combination {
    computeResult(roll: number[]): number {
        const onlyTwos = roll.filter(diceIsTwo)

        return onlyTwos.length * 2;

        function diceIsTwo(dice: number) {
            return dice === 2;
        }
    }
}

export class Combinations {
    static Ones: Combination = new OnesCombination();
    static Twos: Combination = new TwosCombination();
}

export function YamsCombinationCalculator(roll: number[], combination: Combination): number {
    return combination.computeResult(roll);
}
