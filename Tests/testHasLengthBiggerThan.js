'use strict';
import validator from '@euriklis/validator';
const testHasLengthBiggerThan = new Promise((resolve, reject) => {
    const arr = [1, 2, 3];
    const str = 'This is a string';
    const object = {
        a: 1,
        b: 2,
        c: 3,
        text: 'Hello world',
    };
    new validator(arr).has_length_bigger_than(2)
        .And.bind(
            new validator(str).has_length_bigger_than(10)
        ).And.bind(
            new validator(object).has_length_bigger_than(3)
        ).on(true, () => resolve('has_length_bigger_than()'))
        .on(false, () => reject('has_length_bigger_than()'));
});
export { testHasLengthBiggerThan };