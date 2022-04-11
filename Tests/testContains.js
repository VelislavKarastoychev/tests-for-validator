'use strict';
import * as print from '../Messages/index.js';
import validator from '@euriklis/validator';
const testContains = new Promise((resolve, reject) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    const string_array_from_numbers = Array.from({ length: 10 }).map((element, index) => element = index + '');
    const string_array = ['b', 'a', 'n', 'a', 'n', 'n', 'a'];
    const dictionary = [
        'alphabet',
        'almost',
        'Bar',
        'Chart',
        'Dictionary',
        'Penetration',
        'Probably',
        'Suitable',
    ];
    const words = [
        'alphabet',
        'Dictionary',
        'Suitable'
    ];
    new validator(string_array_from_numbers).contains(alphabet)
        .on(true, () => print.success_message("Successfully executed first test of the contains() method.", 'yellow').log())
        .on(false, () => print.error_message("Error in the first test of the contains method.").log())
        .And.bind(
            new validator(string_array).contains(alphabet)
            .on(true, () => print.success_message("Successfully executed second test of the contains() method.", 'yellow').log())
            .on(false, () => print.error_message('Error in the second test of the contains() method.').log())
        ).And.bind(
            new validator(words).contains(dictionary)
            .on(true, () => print.success_message('Successfully executed third test of the contains() method.', 'yellow').log())
            .on(false, () => print.error_message('Error in the third test of the contains() method.').log())
        )
        .on(true, () => resolve('contains()'))
        .on(false, () => reject('contains()'))
});
export { testContains };