#!/usr/bin/env node

'use strict';
import { header, error_message, success_message } from './Messages/index.js';
import { tests } from './Tests/index.js';
import validator from '@euriklis/validator';
let printer = header(`@euriklis/validator , version ${validator.version} testing message`)
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