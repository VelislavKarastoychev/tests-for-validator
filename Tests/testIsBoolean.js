'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const testIsBoolean = new Promise((resolve, reject) => {
    new validator(true).is_boolean().on(true, () => {
        print.success_message("is_boolean() first test successful", "yellow").log();
    }).on(false, () => {
        print.error_message("Inconsistent results in the first test of the is_boolean() method.").log();
    }).And.bind(
        new validator(5 >= 4).isBoolean.on(true, () => {
            print.success_message('is_boolean() second test successful', "yellow").log();
        }).on(false, () => {
            print.error_message('Inconsistent results in the second test of the is_boolean() method.').log();
        })
    ).on(true, () => resolve("is_boolean() or isBoolean"))
    .on(false, () => reject("is_boolean() or isBoolean"));
});
export {testIsBoolean};