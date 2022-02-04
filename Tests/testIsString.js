'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const method = "is_string() or isString";
const testIsString = new Promise((resolve, reject) => {
    new validator('this is string').is_string()
        .on(true, () => {
            print.success_message("is_string() first test successful", "yellow").log();
        }).on(false, () => {
            print.error_message("Inconsistent results in the first test of the is_string() method.").log();
        }).And.bind(
            new validator('').isString.on(true, () => {
                print.success_message("is_string() second test successful", "yellow").log();
            }).on(false, () => {
                print.error_message("Inconsistent results in the second test of the is_string() method.").log();
            })
        ).on(true, () => resolve(method))
        .on(false, () => reject(method));
});
export {testIsString};