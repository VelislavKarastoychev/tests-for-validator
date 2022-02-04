'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const testIsEmpty = new Promise((resolve, reject) => {
    new validator({}).is_empty()
        .on(true, () => {
            print.success_message("is_empty() first test successful", "yellow").log();
        }).on(false, () => {
            print.error_message("Inconsistent results in the first test of the is_empty() method.").log();
        })
        .And.bind(
            new validator([]).isEmpty.on(true, () => {
                print.success_message("is_empty() second test  successful", "yellow").log();
            }).on(false, () => {
                print.error_message("Inconsistent results in the second test of the is_empty() method.").log();
            })
        ).And.bind(
            new validator('').isEmpty.on(true, () => {
                print.success_message("is_empty() third test successful", "yellow").log();
            }).on(false, () => {
                print.error_message("Inconsistent results in the third test of the is_empty() method.").log();
            })
        ).on(true, () => resolve("is_empty() or isEmpty"))
        .on(false, () => reject("is_empty() or isEmpty"));
});
export { testIsEmpty };