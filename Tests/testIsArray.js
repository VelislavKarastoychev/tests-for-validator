'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const method = "is_array() or isArray";
const testIsArray = new Promise((resolve, reject) => {
    new validator([13, "a", {}, []]).is_array()
        .on(true, () => {
            print.success_message('is_array() first test is successful', "yellow").log();
        }).on(false, () => {
            print.error_message("Inconsistent results in the first test of the is_array() method.").log();
        }).And.bind(
            new validator(['this is array again', { a: 12, b: 13 }]).isArray.on(true, () => {
                print.success_message("is_array() second test successful", "yellow").log();
            }).on(false, () => {
                print.error_message("Inconsistent result in the second test of the is_array() method.").log();
            })
        ).on(true, () => resolve(method))
        .on(false, () => reject(method));
});
export {testIsArray};