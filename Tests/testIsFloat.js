'use strict';
import validator from '@euriklis/validator';
import * as print from '../Messages/index.js';
const testIsFloat = new Promise((resolve, reject) => {
    new validator(135.34).is_float().on(true, () => {
        print.success_message("is_float() first test successful", "yellow").log();
    }).on(false, () => {
        print.error_message("Inconsistent results in is_float() first test method.").log();
    })
    .And.bind(
        new validator(232451.344).isFloat.on(true, () => {
            print.success_message("is_float() second test successful", "yellow").log();
        })
        .on(false, () => {
            print.error_message("Inconsistent results in the is_float() second test method.").log();
        })
    ).And.bind(
        new validator("13345.435").Not.isFloat.on(true, () => {
            print.success_message("is_float() third test successful", "yellow").log();
        }).on(false, () => {
            print.error_message("Inconsistent results in the third test of the is_float method.").log();
        })
    ).on(true, () => resolve("is_float() or isFloat"))
    .on(false, () => reject("is_float() or isFloat"));
});
export {testIsFloat};