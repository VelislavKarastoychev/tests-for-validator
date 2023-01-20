'use strict';
import validator from "@euriklis/validator";
const testIsArrayOfFunctions = new Promise((resolve, reject) => {
    let out;
    const arr = [(a, b) => a + b, (a, b) => a * b, (a, b) => a / b];
    new validator(arr).isArrayOfFunctions.Or.is_array_of_functions()
        .on(true, () => {
            resolve('is_array_of_functions');
        }).on(false, () => {
            reject('is_array_of_functions')
        });
})
export { testIsArrayOfFunctions };