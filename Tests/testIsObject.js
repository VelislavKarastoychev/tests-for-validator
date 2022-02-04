'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const method = "is_object() or isObject";
const testIsObject = new Promise((resolve, reject) => {
    new validator({}).is_object()
        .on(true, () => {
            print.success_message("is_object() first test successful", "yellow").log();
        }).on(false, () => {
            print.error_message("Inconsistent results in the first test of the is_object() method").log();
        }).And.bind(
            new validator({ a: 13, b: 14, c: 15 }).isObject.on(true, () => {
                print.success_message("is_object() second test successful", "yellow").log();
            }).on(false, () => {
                print.error_message("Inconsistent results in the second test of the is_object() method.").log();
            })
        ).on(true, () => resolve(method))
        .on(false, () => reject(method));
});
export {testIsObject};