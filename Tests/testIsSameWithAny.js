'use strict'
import validator from '@euriklis/validator'
import { success_message } from '../Messages'
const testIsSameWithAny = new Promise((resolve, reject) => {
    new validator(123).is_same_with_any([12, 21, 34, 1432, 123, 'duhdu', true, []])
        .on(true, () => success_message('is_same_with_any first test successful', 'yellow').log())
        .and().bind(
            new validator(true).is_same_with_any([true, false, 'true', 'copy', 123, {}])
                .on(true, () => success_message('is_same_with_any second test successful', 'yellow').log())
        ).and().bind(
            new validator(false).is_same_with_any([true, false, 'copy', 'increase'])
                .on(true, () => success_message('is_same_with_any third test successful', 'yellow').log())
                .on(false, () => success_message('is_same_with_any third test wrong', 'red').log())
        ).and().not().bind(
            new validator(true).is_undefined().or().not().is_same_with_any([true, false, 'increase', 'decrease'])
                .on(false, () => success_message('is_same_with_any forth test successful', 'yellow').log())
                .on(true, () => success_message('is_same_with_any forth test wrong', 'red').log())
        )
        .on(true, () => resolve('is_same_with_any'))
        .on(false, () => reject('is_same_with_any'))
})
export { testIsSameWithAny }