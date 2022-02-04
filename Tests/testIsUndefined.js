'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const testIsUndefined = new Promise((resolve, reject) => {
    let _;
    new validator(_).is_undefined().on(true, () => {
        print.success_message("is_undefined() first test successful", "yellow").log();
    }).on(false, () => {
        print.error_message("Inconsistent results in the first test of the is_undefined() method.").log();
    })
        .And.bind(
            new validator(_).isUndefined.on(true, () => {
                print.success_message("is_undefined() second test successful", "yellow").log();
            }).on(false, () => {
                print.error_message("Inconsistent results in the second test of the is_undefined() method.").log();
            })
        ).on(true, () => resolve("is_undefined() or isUndefined"))
        .on(false, () => reject("is_undefined() or isUndefined"));
});
export {testIsUndefined};