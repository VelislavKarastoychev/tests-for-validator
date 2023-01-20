'use strict';
import validator from "@euriklis/validator";
const testIsArrayOfNumberArraysWithEqualSize = new Promise((resolve, reject) => {
    const arr1 = [
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
    ];
    const arr2 = [
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 11}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
        Array.from({length: 10}).map(Math.random),
    ];
    new validator(arr1).isArrayOfNumberArraysWithEqualSize
    .And.bind(
        new validator(arr2).Not.is_array_of_number_arrays_with_equal_size()
    ).on(true, () => resolve('is_array_of_number_arrays_with_equal_size() or isArrayOfNumberArraysWithEqualSize'))
    .on(false, () => reject('is_array_of_number_arrays_with_equal_size() or isArrayOfNumberArraysWithEqualSize'))
});
export { testIsArrayOfNumberArraysWithEqualSize };