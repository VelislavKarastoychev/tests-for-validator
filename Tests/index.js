'use strict'
/**
 * @description This file contains the collection of
 * all tests for the @euriklis/validator package. The
 * library provides a large number of utility functions
 * for testing and checking of the type of a valid javascript
 * expression.
 * @author Velislav S. Karastoychev
 * @email euriklis@hotmail.com
 */
import {test_integer} from './testInteger'
import {testIsSameWithAny} from './testIsSameWithAny'
import {testInterface2} from './testInterface2'
import {testForAll} from './testForAll'
export const tests = [
    test_integer,
    testIsSameWithAny,
    testInterface2,
    testForAll,
]