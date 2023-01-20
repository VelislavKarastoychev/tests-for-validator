'use strict';
import validator from "@euriklis/validator";
const testIsArrayOfIntegerArraysWithEqualSize = new Promise((resolve, reject) => {
    const intMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    new validator(intMatrix).isArrayOfIntegerArraysWithEqualSize
        .on(true, () => resolve('is_array_of_integer_arrays_with_equal_size() or isArrayOfIntegerArraysWithEqualSize'))
        .on(false, () => reject('is_array_of_integer_arrays_with_equal_size() or isArrayOfIntegerArraysWithEqualSize'));

});
export { testIsArrayOfIntegerArraysWithEqualSize };