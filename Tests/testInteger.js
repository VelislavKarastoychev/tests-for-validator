'use strict'
import validator from '@euriklis/validator'
const test_integer = new Promise((resolve, reject) => {
    new validator(2408532).is_integer()
        .and().bind(
            new validator(45345.432443).not().is_integer()
        ).on(true, () => resolve('is_integer'))
        .on(false, () => reject('is_integer'))

})
export {test_integer}