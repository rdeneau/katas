// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import { should } from 'chai';
should();

import { fizzBuzz } from "./fizz-buzz";

describe('FizzBuzz', () => {
    it('should return 1 given 1', () => {
        fizzBuzz(1).should.equal("1");
    });

    it('should fizz given 3', () => {
        fizzBuzz(3).should.equal("fizz");
    });
});
