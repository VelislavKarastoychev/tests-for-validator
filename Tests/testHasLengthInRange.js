'use strict';
import validator from "@euriklis/validator";
const testHasLengthInRange = new Promise((resolve, reject) => {
    const arr = [1, 2, 3];
    const str = 'This is a string';
    const object = {
        a: 1,
        b: 2,
        c: 3,
        text: 'Hello world',
    };
    new validator(arr).has_length_in_range(1, 4)
        .And.bind(
            new validator(str).has_length_in_range(2, 17)
        ).And.bind(
            new validator(object).has_length_in_range(2, 5)
        ).on(true, () => resolve('has_length_in_range()'))
        .on(false, () => reject('has_length_in_range()'));
});
export { testHasLengthInRange };