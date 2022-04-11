'use strict';
import * as printer from '../Messages/index.js';
import validator from '@euriklis/validator';
const testIsArrayAndForAny = new Promise((resolve, reject) => {
    const random_numbers = Array.from({ length: 20 }).map(Math.random);
    const numbers_and_string = [...random_numbers];
    numbers_and_string[11] = 'I am string';
    const numbers_and_object = [...random_numbers];
    numbers_and_object[12] = { kye: "object in the random numbers array..." };
    const numbers_and_function = [...random_numbers];
    numbers_and_function[13] = () => { return 0; }
    numbers_and_function[14] = () => 'This is arrow function!!!';
    try {
        new validator(random_numbers).is_array_and_for_any(item => item.is_float().and().is_in_range(0, 1))
            .on(true, () => printer.success_message("Successfully executed first test of the is_array_and_for_any() method.").log())
            .on(false, () => printer.error_message("Error in the first test of the is_array_and_for_any() method.").log())
            .And.bind(
                new validator(numbers_and_string).is_array_and_for_any(item => item.isString)
                .on(true, () => printer.success_message("Successfully executed second test of the is_array_and_for_any() method.").log())
                .on(false, () => printer.error_message("Error in the second test of the is_array_and_for_any() method.").log())
            ).And.bind(
                new validator(numbers_and_function).is_array_and_for_any(item => item.isFunction)
                .on(true, () => printer.success_message("Successfully executed third test of the is_array_and_for_any() method.").log())
                .on(false, () => printer.error_message("Error in the third test of the is_array_and_for_any() method.").log())
            ).And.bind(
                new validator(numbers_and_object).is_array_and_for_any(item => item.isObject)
                .on(true, () => printer.success_message("Successfully executed forth test of the is_array_and_for_any() method.").log())
                .on(false, () => printer.error_message("Error in the forth test of the is_array_and_for_any() method.").log())
            ).on(true, () => resolve("is_array_and_for_any()"))
            .on(false, () => reject("is_array_and_for_any()"));
    } catch (error) {
        printer.header(error.name)
            .append(printer.error_message(error.message)).log();
        reject("is_array_and_for_any()");
    }
});
export { testIsArrayAndForAny };