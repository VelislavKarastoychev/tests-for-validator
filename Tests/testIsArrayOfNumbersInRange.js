'use strict';
import validator from "@euriklis/validator";
const testIsArrayOfNumbersInRange = new Promise((resolve, reject) => {
    const arr = Array.from({ length: 100 }).map(Math.random);
    new validator(arr).is_array_of_numbers_in_range(0, 1)
        .on(true, () => {
            resolve('is_array_of_numbers_in_range()');
        }).on(false, () => {
            reject('is_array_of_numbers_in_range()')
        })
});
export { testIsArrayOfNumbersInRange }