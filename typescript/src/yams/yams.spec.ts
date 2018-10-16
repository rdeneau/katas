// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import {should} from 'chai';

import {
    Combination,
    YamsCombinationCalculator
} from './yams';

should();

describe('YamsCombinationCalculatorShould', () => {

    it('return one when doing one one on "Ones"', () => {
        const roll = [1, 0, 0, 0, 0];
        const expected = 1;

        YamsCombinationCalculator(roll, Combination.Ones)
            .should.equal(expected);
    })

    it('return two when doing two one on "Ones"', () => {
        const roll = [1, 1, 0, 0, 0];
        const expected = 2;

        YamsCombinationCalculator(roll, Combination.Ones)
            .should.equal(expected);
    })

    it('return five when doing five one on "Ones"', () => {
        const roll = [1, 1, 1, 1, 1];
        const expected = 5;

        YamsCombinationCalculator(roll, Combination.Ones)
            .should.equal(expected);
    })

    it('return two when doing one two on "Twos"', () => {
        const roll = [2, 0, 0, 0, 0];
        const expected = 2;

        YamsCombinationCalculator(roll, Combination.Twos)
            .should.equal(expected);
    })
});
