'use strict';
import validator from "@euriklis/validator";
const testHasLength = new Promise((resolve, reject) => {
    const arr = [1, 2, 4];
    const str = 'This is a string'; // 16
    const object = {
        a: 1,
        b: 2,
        c: 3,
        text: 'Hello world',
    };
    new validator(arr).has_length(3)
        .And.bind(new validator(str).has_length(16))
        .And.bind(new validator(object).has_length(4))
        .on(true, () => resolve('has_length()'))
        .on(false, () => reject('has_length()'))
});
export { testHasLength };