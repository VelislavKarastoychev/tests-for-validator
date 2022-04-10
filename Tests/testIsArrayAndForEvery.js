'use strict';
import validator from '@euriklis/validator';
import * as printer from '../Messages/index.js';
const testIsArrayAndForEvery = new Promise((resolve, reject) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVYXWZ0123456789@';
    const length = alphabet.length;
    const random_array = Array.from({ length: 20 }).map(Math.random);
    const random_string_array = Array.from({ length }).map(el => el = length * Math.random() | 0);
    new validator(random_array)
        .is_array_and_for_every((element) => element.isInteger.And.is_in_range(0, 1))
        .on(true, () => printer.success_message("Successfully tested is_array_and_for_every() --> test №1").log())
        .on(false, () => printer.error_message("Error in the first test of the is_array_and_for_every() method.").log())
        .And.bind(
            new validator(random_string_array).is_array_and_for_every(element => element.isString)
            .on(true, () => printer.success_message("Successfully tested is_array_and_for_every() method - second test.").log())
            .on(false, () => printer.error_message("Error in the second test of the is_array_and_for_every() method.").log())
        ).And.bind(
            new validator([Math.random, Math.log]).is_array_and_for_every(item => item.is_function())
            .on(true, () => printer.success_message("Successfully executed third test of the is_array_and_for_every() method.").log())
            .on(false, () => printer.error_message("Error in the third test of the is_array_and_for_every() method.").log())
        )
        .And.bind(
            new validator([1, 2, 3]).is_array_and_for_every(element => element.Not.isFloat)
            .on(true, () => printer.success_message("Successfully tested is_array_and_for_every() method - test №4").log())
            .on(false, () => printer.error_message("Error in the forth test of the is_array_and_for_every() method.").log())
        ).on(true, () => resolve('is_array_and_for_every()'))
        .on(false, () => reject('is_array_and_for_every()'));
});
export { testIsArrayAndForEvery };