'use strict';
import validator from "@euriklis/validator";
const testHasLengthEqualOrBiggerThan = new Promise((resolve, reject) => {
    const str = 'This is string';
    const arr = [1, 2, 3, 4, 5, 'Hello world'];
    const obj = {
        a: 1,
        b: 2,
        c: 3,
        text: 'Hello test',
    };
    new validator(str).has_length_equals_or_bigger_than(14)
    .And.bind(
        new validator(arr).has_length_equals_or_bigger_than(6)
    ).And.bind(
        new validator(obj).has_length_equals_or_bigger_than(4)
    ).on(true, () => resolve('has_length_equals_or_bigger_than()'))
    .on(false, () => reject('has_length_equals_or_bigger_than()'));
});
export { testHasLengthEqualOrBiggerThan };