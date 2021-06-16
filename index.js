'use strict'
import {header, error_message, success_message} from './Messages'
import {tests} from './Tests'
let printer = header('@euriklis/validator testing message')
Promise.all(tests)
.then((tests) => {
    tests.forEach(test => {
         printer = printer
        .append(success_message(`Successfully tested ${test} method\n`).text)
    })
    printer.log()
}).catch((err) => {
    printer.append(error_message(err).text).log()
})