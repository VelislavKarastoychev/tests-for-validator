'use strict';
import validator from '@euriklis/validator';
const testIsArrayOfIntegersInClosedRange = new Promise((resolve, reject) => {
    const arr = [1, 28, 19, 17, 88, 100];
    new validator(arr).is_array_of_integers_in_closed_range(1, 100)
        .on(true, () => {
            resolve('is_array_of_integers_in_closed_range()');
        }).on(false, () => {
            reject('is_array_of_integers_in_closed_range()')
        })
})
export { testIsArrayOfIntegersInClosedRange }