'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const method = "is_string_array() or isStringArray";
const testIsStringArray = new Promise((resolve, reject) => {
    new validator(["this", "is", "string", "array"]).is_string_array()
    .And.bind(
        new validator(['this', 'is', 'string array.']).isStringArray
    )    
    .on(true, () => {
            print.success_message("is_string_array() first test successful", "yellow").log();
        }).on(false, () => {
            print.error_message("Inconsistent results in the first test of the is_string_array() method.").log();
        }).And.bind(
            new validator([1, 3, 5]).Not.isStringArray.on(true, () => {
                print.success_message("is_string_array() second test successful", "yellow").log();
            }).on(false, () => {
                print.error_message("Inconsistent results in the second test of the is_string_array() method.").log();
            })
        ).on(true, () => resolve(method))
        .on(false, () => reject(method));
});
export { testIsStringArray };