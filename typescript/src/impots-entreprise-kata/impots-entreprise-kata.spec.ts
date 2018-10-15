// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import {should} from 'chai';
import {
    calculerImpots,
    TypeEntreprise,
    AutoEntreprise,
    SASEntreprise } from './impots-entreprise-kata';

should();

describe('CalculerImpotsShould', () => {

    it('Correctly compute taxes on auto-entreprise with 100 CA', () => {
        const autoEntrepriseCA = 100;
        const expected = 25;

        calculerImpots(autoEntrepriseCA, new AutoEntreprise()).should.equal(expected);
    });

    it('Correctly compute taxes on auto-entreprise with 1000 CA', () => {
        const autoEntrepriseCA = 1000;
        const expected = 250;

        calculerImpots(autoEntrepriseCA, new AutoEntreprise()).should.equal(expected);
    });

    it('Correctly compute taxes on SAS with 100 CA', () => {
        const SASCA = 100;
        const expected = 33;

        calculerImpots(SASCA, new SASEntreprise()).should.equal(expected);
    });

    it('Correctly compute taxes on SAS with 1000 CA', () => {
        const SASCA = 1000;
        const expected = 330;

        calculerImpots(SASCA, new SASEntreprise()).should.equal(expected);
    });
});
