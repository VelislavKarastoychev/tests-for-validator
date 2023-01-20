'use string';
import validator from "@euriklis/validator";
const testIsArrayOfStringArraysWithEqualSize = new Promise((resolve, reject) => {
    const arr1 = [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],

    ];
    const arr2 = [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u', 'v'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
    ]
    const arr3 = [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u', 'w'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
        ['o', 'p', 'q', 'r', 's', 't', 'u'],
    ]
    const array_of_string_arrays = [
        ['This', 'is', 'a', 'text'],
        ['1', '2', '3', '4'],
        ['this', 'is', 'a', 'sentence.'],
    ];
    new validator(arr1).isArrayOfStringArraysWithEqualSize
       .And.bind(
            new validator(arr2).Not.is_array_of_string_arrays_with_equal_size()
        ).And.bind(
            new validator(arr3).Not.is_array_of_string_arrays_with_equal_size()
        ).And.bind(
            new validator(array_of_string_arrays).is_array_of_string_arrays_with_equal_size()
        )
        .on(true, () => {
            resolve('is_array_of_string_arrays_with_equal_size() or isArrayOfStringArraysWithEqualSize')
        })
        .on(false, () => reject('is_array_of_string_arrays_with_equal_size() or isArrayOfStringArraysWithEqualSize'));
});
export { testIsArrayOfStringArraysWithEqualSize };