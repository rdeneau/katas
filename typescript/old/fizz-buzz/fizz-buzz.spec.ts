// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import { should } from 'chai';
should();

import { fizzBuzz } from './fizz-buzz';

describe('FizzBuzz', () => {
    it('should return 1 given 1', () => {
        fizzBuzz(1).should.equal('1');
    });

    it('should return 2 given 2', () => {
        fizzBuzz(2).should.equal('2');
    });

    it('should fizz given 3', () => {
        fizzBuzz(3).should.equal('fizz');
    });

    it('should fizz given 6', () => {
        fizzBuzz(6).should.equal('fizz');
    });

    it('should buzz given 5', () => {
        fizzBuzz(5).should.equal('buzz');
    });

    it('should buzz given 10', () => {
        fizzBuzz(10).should.equal('buzz');
    });

    it('should fizzbuzz given 15', () => {
        fizzBuzz(15).should.equal('fizzbuzz');
    });

    it('should fizzbuzz given 30', () => {
        fizzBuzz(30).should.equal('fizzbuzz');
    });

    it('should fizz given 33', () => {
        fizzBuzz(33).should.equal('fizz');
    });

    it('should buzz given 35', () => {
        fizzBuzz(35).should.equal('buzz');
    });
});
