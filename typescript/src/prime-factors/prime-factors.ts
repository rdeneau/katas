export function primeFactors(n: number) {
    return Array.from(generatePrimeFactors(n));
}

function* generatePrimeFactors(n: number) {
    for (let factor = 2; n > 1; factor++) {
        for (; n % factor === 0; n /= factor) {
            yield factor;
        }
    }
}
