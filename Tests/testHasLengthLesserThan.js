'use strict';
import validator from "@euriklis/validator";
const testHasLengthLesserThan = new Promise((resolve, reject) => {
    const arr = [1, 2, 3, 4, 'Hello world'];
    const str = 'This is string';
    const obj = {
        a: 1,
        b: 2,
        c: 3,
        text: 'Hello test',
    };
    new validator(arr).has_length_lesser_than(6)
        .And.bind(
            new validator(str).has_length_lesser_than(17)
        ).And.bind(
            new validator(obj).has_length_lesser_than(5)
        )
        .on(true, () => resolve('has_length_lesser_than()'))
        .on(false, () => reject('has_length_lesser_than()'));
});
export { testHasLengthLesserThan };