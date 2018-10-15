export function fizzBuzz(number: number) {
    if (isMultipleOf15(number))
        return 'fizzbuzz';
    if (isMultipleOf3(number))
        return 'fizz';
    if (isMultipleOf5(number))
        return 'buzz';
    return number.toString(10);
}

const isMultipleOf = (multiple: number) => (number: number) => number % multiple === 0;
const isMultipleOf3 = isMultipleOf(3);
const isMultipleOf5 = isMultipleOf(5);
const isMultipleOf15 = isMultipleOf(15);
