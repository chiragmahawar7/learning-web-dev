function show() {
    console.log('show function called');
}


// 1. Direct Invocation
console.log('Method 1');
show();

// 2. Using call
console.log('Method 2');
show.call({});

// 3. Using apply
console.log('Method 3');
show.apply({});

// 4. Using setTimeout
console.log('Method 4');
setTimeout(show, 0);

// 5. using new keyword
console.log('Method 5');
new show();

// Methods which does not use paranthesis

// 6. using new
console.log('Method 6');
new show;

// 7. using tagged tenplate
console.log('Method 7');
show``;

// 8. using getter property in object
console.log('Method 8');
const obj = {
    get show() {
        console.log('show function inside object');
    }
}
obj.show;