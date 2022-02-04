'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const method = 'is_function() or isFunction';
const testIsFunction = new Promise((resolve, reject) => {
    new validator(() => 'this is an arrow function').is_function()
        .on(true, () => {
            print.success_message("is_function() first test success", "yellow").log();
        }).on(false, () => {
            print.error_message("Inconsistent results in the first test of the is_function() method.").log();
        }).And.bind(
            new validator("this is not function").Not.isFunction.And.bind(
                new validator(function () { return "But this is a function" }).isFunction
            ).on(true, () => {
                print.success_message("is_function() second test successful", "yellow").log();
            }).on(false, () => {
                print.error_message("Inconsistent results in the second test of the is_function() method.").log();
            })
        ).on(true, () => resolve(method))
        .on(false, () => reject(method));
});
export { testIsFunction };