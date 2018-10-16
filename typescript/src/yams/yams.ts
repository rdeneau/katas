/***** YAMS Combinations
 *
 ***** Upper part:
 * 1, 2, 3, 4, 5, 6
 *
 ***** Lower part:
 * ThreeOfAKind, FourOfAKind, Full,
 * FourInARow, FiveInARow,
 * Yams, Luck
 *****/

interface Combination {
    getResultFor(roll: number[]): number
}

export class OnesCombination implements Combination {
    getResultFor(roll: number[]): number {
        return roll.filter(dice => dice === 1).length;
    }
}

export class TwosCombination implements Combination {
    getResultFor(roll: number[]): number {
        return roll.filter(dice => dice === 2).length * 2;
    }
}

export class ThreesCombination implements Combination {
    getResultFor(roll: number[]): number {
        return roll.filter(dice => dice === 3).length * 3;
    }
}

export class Combinations {
    static Ones: Combination = new OnesCombination();
    static Twos: Combination = new TwosCombination();
    static Threes: Combination = new ThreesCombination();
}

export function YamsCombinationCalculator(roll: number[], combination: Combination): number {
    return combination.getResultFor(roll);
}
