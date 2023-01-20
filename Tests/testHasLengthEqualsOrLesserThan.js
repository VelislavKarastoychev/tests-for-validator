'use strict';
import validator from "@euriklis/validator";
const testHasLengthEqualsOrLesserThan = new Promise((resolve, reject) => {
    const arr = [1, 3, 5, 7, 8];
    const str = 'This is string';
    const obj = {
        a: 1,
        b: 2,
        c: 3,
        test: 'Hello test',
    };
    new validator(arr).has_length_equals_or_lesser_than(5)
        .And.bind(
            new validator(str).has_length_equals_or_lesser_than(16)
        ).And.bind(
            new validator(obj).has_length_equals_or_lesser_than(4)
        ).on(true, () => resolve('has_length_equals_or_lesser_than()'))
        .on(false, () => reject('has_length_equals_or_lesser_than()'));
});
export { testHasLengthEqualsOrLesserThan };