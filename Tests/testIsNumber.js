'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const testIsNumber = new Promise((resolve, reject) => {
    new validator(123).is_number()
    .on(true, () => print.success_message("is_number() first test successful test", "yellow").log())
    .on(false, () => print.error_message("Inconsistent results in the first test of the is_number method.").log())
    .And.bind(
        new validator(342.42).isNumber.on(true, () => {
            print.success_message("is_number() second test successful", "yellow").log();
        }).on(false, () => print.error_message("Inconsistent results in is_number() second test method.").log())
    ).And.bind(
        new validator("235").Not.isNumber.on(true, () => {
            print.success_message("is_number() third test successful", "yellow").log();
        }).on(false, () => {
            print.error_message("Inconsistent results in the third test of the is_number() method.").log();
        })
    ).on(true, () => resolve("is_number() or isNumber"))
    .on(false, () => reject("is_number() or isNumber"));
});
export {testIsNumber};