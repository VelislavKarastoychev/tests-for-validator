'use strict';
import validator from "@euriklis/validator";
const testIsArrayOfIntegerArrays = new Promise((resolve, reject) => {
    const arr = Array.from({ length: 20 }).map(el => Array.from({ length: 20 }).map(el => el = ((Math.random() * 100) >> 0)));
    const arr1 = Array.from({ length: 20 }).map(el => Array.from({ length: 100 }).map(Math.random));
    new validator(arr).isArrayOfIntegerArrays
        .And.bind(
            new validator(arr1).Not.isArrayOfIntegerArrays
        )
        .on(true, () => {
            resolve('is_array_of_integer_arrays() or isArrayOfIntegerArrays');
        }).on(false, () => {
            reject('is_array_of_integer_arrays() or isArrayOfIntegerArrays')
        });
});
export { testIsArrayOfIntegerArrays };