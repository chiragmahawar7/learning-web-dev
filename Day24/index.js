const res = [9, 8, 7, 6][1, 2];
console.log(res);

// [1,2] cannot function as an array. Hence, it operates as an array subscript.
// [1,2] becomes [2]

// In javascript, we can write expressions separated by a comma (,)
// and the result of the last expression will be returned.

// Example 1
const z = (1, 2, 3, 4, 5);
console.log(z); // outputs 5

// Example 2
function a() {
    return 'a';
}

function b() {
    return 'b';
}

function c() {
    return 'c';
}

const d = (a(), b(), c());
console.log(d); // Outputs 'c'

// Thus, res become [9,8,7,6][2] which is, element at 2nd index of array. i.e 7