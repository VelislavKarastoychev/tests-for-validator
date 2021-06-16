'use strict'
import validator from '@euriklis/validator'
const for_all = (value) => {
    return new validator(value)
        .for_all((items) => {
            return items.is_integer().and().is_in_closed_range(0, 100)
        }).answer
}
const arr_param = for_all(Array.from({ length: 100 }).map(el => { return el = (Math.random() * 100) << 0 }))
const obj_param = for_all({ age: 98, id: 13, categories: 43, books: 74 })
const testForAll = new Promise((resolve, reject) => {
    new validator(arr_param).is_same(true)
        .and().bind(new validator(obj_param).is_same(true))
        .on(true, () => resolve('for_all'))
        .on(false, () => reject('for_all'))
})
export { testForAll }