'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const method = "for_any()";
const testForAny = new Promise((resolve, reject) => {
    new validator([1, 4, "this is string", 54.4, 24, 0.043284])
        .for_any(element => element.Not.isNumber.And.isString).on(true, () => {
            print.success_message("for_any() first test successful", "yellow").log();
        }).on(false, () => {
            print.error_message("Inconsistent results in the first test of the for_any() method.").log();
        }).And.bind(
            new validator({ a: 12, b: 4953, c: "this is string", d: 0.4330947 })
                .for_any(element => element.Not.isNumber.And.isString).on(true, () => {
                    print.success_message("for_any() second test successful", "yellow").log();
                }).on(false, () => {
                    print.error_message("Inconsistent results in the second test of the for_any() method.").log();
                })
        ).on(true, () => resolve(method))
        .on(false, () => reject(method));
});
export {testForAny};