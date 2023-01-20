'use strict';
import validator from "@euriklis/validator";
const testIsBooleanArray = new Promise((resolve, reject) => {
    const bool = Array.from({ length: 21 }).map(el => el = Math.random() >= 0.5 ? true : false);
    const boolean_array = [true, false, false];
    new validator(bool).isBooleanArray
    .And.bind(new validator(boolean_array).is_boolean_array())    
    .on(true, () => {
            resolve('is_boolean_array() or isBooleanArray');
        }).on(false, () => reject('is_boolean_array() or isBooleanArray'))
})
export { testIsBooleanArray }