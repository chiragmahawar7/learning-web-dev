// Debounce
// debouncing is commonly used to enhance browser performance by ensuring that expensive
// operations (like complex calculations, API calls, or DOM updates) are executed only when necessary.
// JavaScript operates in a single-threaded environment, meaning it can only handle one operation at a time.
// When certain actions are triggered too frequently, such as during continuous scrolling or typing,
// it can overload the browser and cause sluggish performance.

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function saveInput() {
    console.log('Saving data');
}

const processChange = debounce(() => saveInput());