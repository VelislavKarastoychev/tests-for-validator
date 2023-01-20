'use strict';
import validator from "@euriklis/validator";
const testIsArrayOfNumberArrays = new Promise((resolve, reject) => {
    const arr1 = [
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12,],
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12,],
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12,],
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12,],
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12,],
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12,],
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12,]
    ];
    const arr2 = [
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12, '435'],
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12, '33584'],
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12, Math.random() + ''],
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12, '22'],
        [1, 2, 3, 4],
        [42, Math.random(), 343.4],
        [12, Math.random() + ''],
    ];
    new validator(arr1).isArrayOfNumberArrays
        .And.bind(
            new validator(arr2).Not.is_array_of_number_arrays()
        ).on(true, () => resolve('is_array_of_number_arrays() or isArrayOfNumberArrays'))
        .on(false, () => reject('is_array_of_number_arrays() or isArrayOrNumberArrays'));
});
export { testIsArrayOfNumberArrays }