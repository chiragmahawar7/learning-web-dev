function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 1000);
    console.log("Hello");
}

x();

// Output -
// Hello
// 1

// WAP to print 1 after 1 sec , 2 after 2 sec, 3 after 3 sec etc
function y() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}
y();

// above problem but use var instead of let
function z() {
    for (let i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}
z();