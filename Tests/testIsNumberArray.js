'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const method = "is_number_array() or isNumberArray";
const testIsNumberArray = new Promise((resolve, reject) => {
    new validator([1, 3, 4, 5]).is_number_array()
        .And.bind(new validator([6, 7, 8]).is_number_array())
        .on(true, () => {
            print.success_message("is_number_array() first test successful", "yellow").log();
        }).on(false, () => {
            print.error_message("Inconsistent results in the first test of the is_number_array() method.").log();
        })
        .And.bind(
            new validator(Array.from(1000).map(Math.random)).isNumberArray.on(true, () => {
                print.success_message("is_number_array() second test successful", "yellow").log();
            }).on(false, () => {
                print.error_message("Inconsistent results in the second test of the is_number_array() method.").log();
            })
        ).on(true, () => resolve(method))
        .on(false, () => reject(method));
});
export { testIsNumberArray };