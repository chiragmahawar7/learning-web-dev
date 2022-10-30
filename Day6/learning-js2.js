function greet() {
    console.log(this.name);
}

const sayHello1 = greet.bind({name: 'ABC'});
sayHello1();

const sayHello2 = sayHello1.bind({name: 'XYZ'});
sayHello2();

/**Output
ABC
ABC

Binding an already bound function does not change the execution context.
 */