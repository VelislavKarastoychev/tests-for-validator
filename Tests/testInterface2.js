'use strict'
import validator from '@euriklis/validator'
import { success_message } from '../Messages/index.js';
import { error_message } from '../Messages/index.js';
const Interface2 = (value) => {
    return new validator(value).interface2({
        'first name': fn => fn.is_string(),
        'last name': ln => ln.is_string(),
        age: age => age.is_integer().And.is_in_range(0, 200),
        email: email => email.isString
    }).answer
}
export const testInterface2 = new Promise((resolve, reject) => {
    new validator(Interface2([2, 'a', 14, () => { }, 32.2]))
        .is_same(false).And.bind(
            new validator(Interface2(235)).is_same(false)
                .on(true, () => success_message('interface2 first test is successful', 'yellow').log())
                .on(false, () => error_message('interface2 first test is wrong...').log())
        ).and().bind(
            new validator(Interface2({ 'first name': 24, 'last name': 'Jerry', age: 23, email: 'incorrect email' }))
                .is_same(false)
                .on(true, () => success_message('interface2 second test is successful', 'yellow').log())
                .on(false, () => error_message('interface2 second test is wrong...').log())
        ).and().bind(
            new validator(Interface2({
                'first name': 'John',
                'last name': 'Jones',
                age: 28,
                email: 'johnJones@correctEmail.com',
            })).is_same(true)
                .on(false, () => error_message('interface2 third test is wrong...', 'red').log())
                .on(true, () => success_message('interface2 third test is successful', 'yellow').log())
        ).on(true, () => {
            resolve('interface2')
        }).on(false, () => {
            reject('interface2')
        })
})