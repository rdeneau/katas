import { expect } from 'chai';
import { wordWrap } from './word-wrap';

describe('WordWrap', () => {
    checkWrapping(null).gives('');
    checkWrapping('').gives('');
    checkWrapping('a').gives('a');
    checkWrapping('ab').at(2).gives('ab');
    checkWrapping('ab').at(1).gives('a', 'b');
    checkWrapping('abc').at(1).gives('a', 'b', 'c');
    checkWrapping('abc').at(2).gives('ab', 'c');
    checkWrapping('ab 12').at(3).gives('ab', '12');
    checkWrapping('ab 123').at(3).gives('ab', '123');
    checkWrapping('abc 123').at(3).gives('abc', '123');
    checkWrapping('a bc 123').at(3).gives('a', 'bc', '123');
    checkWrapping(' a bc  123 ').at(3).gives('a', 'bc', '123');
    checkWrapping('12345abcd 12345 1 3 56').at(5).gives('12345', 'abcd', '12345', '1 3', '56');

    function checkWrapping(s: string|null) {
        class WordWrapTester {
            constructor(protected readonly len = 1) {
                if (len <= 0) {
                    throw new RangeError('Argument len must be >= 1');
                }
            }

            gives(...lines: string[]) {
                it(`should wrap '${s}' at ${this.len} into ${JSON.stringify(lines)}`, () => {
                    const result = Array.from(wordWrap(s, this.len));
                    expect(result).to.eql(lines);
                });
            }
        }

        class WordWrapAtTester extends WordWrapTester {
            at(len: number) {
                return new WordWrapTester(len);
            }
        }

        return new WordWrapAtTester();
    }
});
