import { expect } from 'chai';

import { primeFactors } from './prime-factors';

describe('PrimeFactors', () => {
    checkPrimeFactorsOf(2).are(2);
    checkPrimeFactorsOf(3).are(3);
    checkPrimeFactorsOf(4).are(2, 2);
    checkPrimeFactorsOf(5).are(5);
    checkPrimeFactorsOf(6).are(2, 3);
    checkPrimeFactorsOf(7).are(7);
    checkPrimeFactorsOf(8).are(2, 2, 2);
    checkPrimeFactorsOf(9).are(3, 3);
    checkPrimeFactorsOf(2*2*3*3*5*5*7*7*7).are(2, 2, 3, 3, 5, 5, 7, 7, 7);

    function checkPrimeFactorsOf(n: number) {
        return {
            are(...factors: number[]) {
                it(`should return ${JSON.stringify(factors)} given ${n}`, () => {
                    expect(primeFactors(n)).to.eql(factors);
                });
            }
        };
    }
});
