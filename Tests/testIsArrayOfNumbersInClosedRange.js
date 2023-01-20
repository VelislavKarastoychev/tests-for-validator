'use strict';
import validator from "@euriklis/validator";
const testIsArrayOfNumbersInClosedRange = new Promise((resolve, reject) => {
    const arr = Array.from({ length: 98 }).map(Math.random)
    arr.push(...[0, 1]);
    new validator(arr)
        .has_length_equals_or_bigger_than(100)
        .And.has_length_equals_or_lesser_than(100)
        .And.has_length(100)
        .And.is_array_of_numbers_in_closed_range(0, 1)
        .on(true, () => {
            resolve('is_array_of_numbers_in_closed_range()')
        }).on(false, () => reject('is_array_of_numbers_in_closed_range()'))
})
export { testIsArrayOfNumbersInClosedRange }