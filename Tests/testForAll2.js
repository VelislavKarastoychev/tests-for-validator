'use strict';
import * as printer from '../Messages/index.js';
import validator from '@euriklis/validator';;
const testForAll2 = new Promise((resolve, reject) => {
    let answer
    try {
        answer = new validator([2, 6]).isNumberArray.And.for_all(element => element.is_integer()).answer;
        if (answer === true) {
            printer.success_message('Successfully second test for the for_all method of the library.').log();
            resolve("for_all --> 2")
        } else {
            printer.error_message('Failed to test the for_all method...').log();
            reject("for_all --> 2");
        }
    } catch (error) {
        printer.error_message('Internal error', "Some calculation are not correctly defined in the tester function. Please check the file testForAll2.js which is responsible for this error.").log();
        reject("for_all --> 2");
    }
});
export { testForAll2 };