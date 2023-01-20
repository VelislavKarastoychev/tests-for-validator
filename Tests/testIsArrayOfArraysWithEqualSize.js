'use strict';
import validator from '@euriklis/validator';
const testIsArrayOfArraysWithEqualSize = new Promise((resolve, reject) => {
    const arr = [
        [1, 2, 4],
        [() => { console.log('function') }, 'cool', {}],
        [[1, 3, 4], [1, 4], {}]
    ];
    const arr2 = Array.from({ length: 100 }).map(el => el = Array.from({ length: 3 }).map(Math.random));
    new validator(arr).isArrayOfArraysWithEqualSize
        .And.is_array_of_arrays_with_equal_size()
        .And.bind(
            new validator(arr2).isArrayOfArraysWithEqualSize
        )
        .on(true, () => {
            resolve('is_array_of_arrays_with_equal_size()')
        }).on(false, () => {
            reject('is_array_of_arrays_with_equal_size()')
        });
});
export { testIsArrayOfArraysWithEqualSize };