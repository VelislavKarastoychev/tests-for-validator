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
import { testHasLength } from './testHasLength.js';
import { testHasLengthBiggerThan } from './testHasLengthBiggerThan.js';
import { testHasLengthEqualOrBiggerThan } from './testHasLengthEqualOrBiggerThan.js';
import { testHasLengthEqualsOrLesserThan } from './testHasLengthEqualsOrLesserThan.js';
import { testHasLengthInRange } from './testHasLengthInRange.js';
import { testHasLengthLesserThan } from './testHasLengthLesserThan.js';
import { testIsArrayAndForAny } from './testIsArrayAndForAny.js';
import { testIsArrayAndForEvery } from './testIsArrayAndForEvery.js';
import { testIsArrayOfArraysWithEqualSize } from './testIsArrayOfArraysWithEqualSize.js';
import { testIsArrayOfFunctions } from './testIsArrayOfFunctions.js';
import { testIsArrayOfIntegerArrays } from './testIsArrayOfIntegerArrays.js';
import { testIsArrayOfIntegerArraysWithEqualSize } from './testIsArrayOfIntegerArraysWithEqualSize.js';
import { testIsArrayOfIntegersInClosedRange } from './testIsArrayOfIntegersInClosedRange.js';
import { testIsArrayOfIntegersInRange } from './testIsArrayOfIntegersInRange.js';
import { testIsArrayOfNumberArraysWithEqualSize} from './testIsArrayOfNumberArraysWithEqualSize.js';
import { testIsArrayOfNumbersInClosedRange } from './testIsArrayOfNumbersInClosedRange.js';
import { testIsArrayOfNumbersInRange } from './testIsArrayOfNumbersInRange.js';
import { testIsArrayOfNumberArrays } from './testIsArrayOfNumberArrays.js';
import { testIsArrayOfStringArrays } from './testIsArrayOfStringArrays.js';
import { testIsArrayOfStringArraysWithEqualSize } from './testIsArrayOfStringArraysWithEqualSize.js';
import { testIsBoolean } from './testIsBoolean.js';
import { testIsBooleanArray } from './testIsBooleanArray.js'
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
import { testContains } from './testContains.js';
export const tests = [
    test_integer,
    testIsBoolean,
    testIsSameWithAny,
    testInterface2,
    testForAll,
    testForAll2,
    testHasLength,
    testHasLengthBiggerThan,
    testHasLengthEqualOrBiggerThan,
    testHasLengthEqualsOrLesserThan,
    testHasLengthInRange,
    testHasLengthLesserThan,
    testIsNumber,
    testIsFloat,
    testIsUndefined,
    testIsEmpty,
    testIsString,
    testIsArray,
    testIsBooleanArray,
    testIsNumberArray,
    testIsObject,
    testIsStringArray,
    testIsFunction,
    testForAny,
    testIsArrayAndForEvery,
    testIsArrayAndForAny,
    testContains,
    testIsArrayOfIntegersInRange,
    testIsArrayOfIntegersInClosedRange,
    testIsArrayOfNumbersInClosedRange,
    testIsArrayOfNumbersInRange,
    testIsArrayOfFunctions,
    testIsArrayOfArraysWithEqualSize,
    testIsArrayOfStringArrays,
    testIsArrayOfNumberArrays,
    testIsArrayOfStringArraysWithEqualSize,
    testIsArrayOfNumberArraysWithEqualSize,
    testIsArrayOfIntegerArrays,
    testIsArrayOfIntegerArraysWithEqualSize,
];