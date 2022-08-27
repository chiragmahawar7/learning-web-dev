const numbers = [1, 2, 3];
for (var index = 0; index < numbers.length; index++); {
    const number = numbers[index];
    console.log(number);
}
// Output - undefined
// Catch - ';' at 2:53


let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    };
    setTimeout(log, 100);
}
//Output-
//3
//3
//3

//loop creates 3 instances of log function & when for ends, value of i is 3.