import { expect } from 'chai';
import './global'; // To do once at app bootstrapping

describe('global s()', () => {
    it('should replace null with empty object', () => {
        const result = s(null);
        expect(result).to.eql({});
    });

    it('should replace undefined with empty object', () => {
        const result = s(undefined);
        expect(result).to.eql({});
    });

    it('should replace null with the given default value', () => {
        const defVal = { def: 'val' };
        const result = s(null, defVal);
        expect(result).to.eql({ def: 'val' });
    });

    it('should preserve defined object', () => {
        const object = { bar: 'a' };
        const result = s(object);
        expect(result).to.eql(object);
    });
});
