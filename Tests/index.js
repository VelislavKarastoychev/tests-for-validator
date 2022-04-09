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
import { test_integer } from './testInteger.js';
import { testIsBoolean } from './testIsBoolean.js';
import { testIsSameWithAny } from './testIsSameWithAny.js';
import { testInterface2 } from './testInterface2.js';
import { testForAll } from './testForAll.js';
import { testForAll2 } from './testForAll2.js';
import { testIsNumber } from './testIsNumber.js';
import { testIsFloat } from './testIsFloat.js';
import { testIsUndefined } from './testIsUndefined.js';
import { testIsEmpty } from './testIsEmpty.js';
import { testIsString } from './testIsString.js';
import { testIsArray } from './testIsArray.js';
import { testIsNumberArray } from './testIsNumberArray.js';
import { testIsObject } from './testIsObject.js';
import { testIsStringArray } from './testIsStringArray.js';
import { testIsFunction } from './testIsFunction.js';
import { testForAny } from "./testForAny.js";
export const tests = [
    test_integer,
    testIsBoolean,
    testIsSameWithAny,
    testInterface2,
    testForAll,
    testForAll2,
    testIsNumber,
    testIsFloat,
    testIsUndefined,
    testIsEmpty,
    testIsString,
    testIsArray,
    testIsNumberArray,
    testIsObject,
    testIsStringArray,
    testIsFunction,
    testForAny,
]