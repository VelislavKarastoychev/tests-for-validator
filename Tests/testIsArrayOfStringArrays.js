'use strict';
import validator from "@euriklis/validator";
const testIsArrayOfStringArrays = new Promise((resolve, reject) => {
    const arr1 = [
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],

    ];
    const arr2 = [
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb', 2],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb'],
        ['I', 'am', 'a', 'human'],
        ['Hello', 'world'],
        ['Marry', 'had', 'a', 'little', 'lamb', () => console.log('this is a string.')],
    ];
    const array_of_str_arrays = [
        ['hello', 'world'],
        ['this', 'is', 'a', 'sentence'],
        ['This', 'is', 'another', 'sentence.', ]
    ];
    new validator(arr1).isArrayOfStringArrays
        .And.bind(
            new validator(arr2).Not.is_array_of_string_arrays()
        )
        .And.bind(new validator(array_of_str_arrays).is_array_of_string_arrays())
        .on(true, () => {
            resolve('is_array_of_string_arrays() or isArrayOfStringArrays');
        }).on(false, () => reject('is_array_of_string_arrays() or isArrayOfStringArrays'));
});
export { testIsArrayOfStringArrays }