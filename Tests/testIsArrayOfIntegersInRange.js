'use strict';
import validator from '@euriklis/validator';
import * as printer from '../Messages/index.js';
const testIsArrayOfIntegersInRange = new Promise((resolve, reject) => {
    const a = [1, 23, 34, 23, 2, 5, 6, 6, 7, 33, 99.0];
    new validator(a).is_array_of_integers_in_range(0, 100)
        .on(true, () => {
            printer.success_message('Successfully tested is_array_of_integers_in_range() method.', 'yellow').log();
            resolve('is_array_of_integers_in_range()')
        }).on(false, (arr) => {
            printer.error_message(`The ${JSON.stringify(arr.value)} is probably not integer array or the method has an internal error.`, 'yellow').log();
            reject('is_array_of_integers_in_range()');
        })
});
export { testIsArrayOfIntegersInRange };