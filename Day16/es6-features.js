// 1. extracting object values

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}

// const a = obj.a
// const b = obj.b
// const c = obj.c
// const d = obj.d
// const e = obj.e
// const f = obj.a + obj.d
// const g = obj.c + obj.e

// BETTER WAY - destructuring assignment to get the value
const { a, b, c, d, e } = obj
const f = a + d
const g = c + e

const { a: a1 } = obj || {}
console.log(a1) // 1

// 2. Merging data

const ar1 = [1, 2, 3]
const ar2 = [1, 5, 6]
const ar3 = ar1.concat(ar2) // [ 1, 2, 3, 1, 5, 6]

const obj1 = {
    a: 1,
};
const obj2 = {
    b: 1,
};
const obj3 = Object.assign({}, obj1, obj2) // { a: 1, b: 1}

// BETTER WAY - spread operator
const ar4 = [...new Set([...ar1, ...ar2])]
console.log(ar4); // [ 1, 2, 3, 5, 6 ]

const obj4 = { ...obj1, ...obj2 };
console.log(obj4); // { a: 1, b: 1 }


// 3. splicing string

const studentName = 'XYZ'
const score = 59
let result = ''
if (score > 60) {
    result = `${studentName}passed the exam`
} else {
    result = `${studentName}failed in the exam`
}

// BETTER WAY - string templates
const result1 = `${studentName} ${score > 60 ? 'passed the exam' : 'failed in the exam'}`
console.log(result1); // "XYZ failed in the exam"

// 4. getting object attribute values

const aVal = obj && obj.a;

// BETTER WAY - optional chain operator
const aVal1 = obj?.a;

// 5. adding object properties
let obj5 = {}
let index = 1;
let key = `topic ${index}`;
obj5[key] = 'Maths';

// BETTER WAY - object property names in ES6 can use expressions
obj5[`topic${index}`] = 'Art';