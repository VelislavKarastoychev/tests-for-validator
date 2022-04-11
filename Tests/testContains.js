'use strict';
import * as print from '../Messages/index.js';
import validator from '@euriklis/validator';
const testContains = new Promise((resolve, reject) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split();
    const string_array_from_numbers = Array.from({ length: 20 }).map((element, index) => element = (index + 1) + '');
    const string_array = ['b', 'a', 'n', 'a', 'n', 'n', 'a'];
    new validator(alphabet).contains(string_array_from_numbers)
        .on(true, () => print.success_message("Successfully executed first test of the contains() method.").log())
        .on(false, () => print.error_message("Error in the first test of the contains method.").log())
        .And.bind(
            new validator(alphabet).contains(string_array)
            .on(true, () => print.success_message("Successfully executed second test of the contains() method.").log())
            .on(false, () => print.error_message('Error in the second test of the contains() method.').log())
        ).on(true, () => resolve('contains()'))
        .on(false, () => reject('contains()'))
});
export { testContains };