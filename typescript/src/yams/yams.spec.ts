// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import {should} from 'chai';

import {
    Combinations,
    YamsCombinationCalculator
} from './yams';

should();

describe('YamsCombinationCalculatorShould', () => {

    it('return one when doing one one on "Ones"', () => {
        YamsCombinationCalculator([1, 0, 0, 0, 0], Combinations.Ones)
            .should.equal(1);
    })
});
