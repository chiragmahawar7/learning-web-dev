// ‘forEach’ is an iterator, responsible for traversing (Array Set Map) iterable objects
// ‘for’ loop is a looping mechanism, but it can traverse an array through it

let arr = [4, 5, 6, 7]
let iterator = arr[Symbol.iterator]()
console.log(iterator.next()); //prints {value: 4, done: false}
console.log(iterator.next()); //prints {value: 5, done: false}
console.log(iterator.next()); //prints {value: 6, done: false}
console.log(iterator.next()); //prints {value: 7, done: false}
console.log(iterator.next()); //prints {value: undefined, done: true}
