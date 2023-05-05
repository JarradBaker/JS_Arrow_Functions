/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNumbers(6, 10))



// Arrow Function With Parameters
//Use this if your function is more in depth/bigger
const addTwo = (a, b) => {
    return a + b;
}

console.log(addTwo(1, 5))


// Single Line Arrow Function With Parameters
//Use this for simple less complex/short functions
const addTwoNumbers2 = (a, b) => a + b;

console.log(addTwoNumbers2(7, 12))


// Implicit Returns
// Simple return functions (if only one argument, you don't need paranthises)
const saySomething = message => console.log(message);
saySomething("Hello Jarrad!");
//If it takes no argument
const sayHello = () => console.log("hello");
sayHello();



// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
      This is a multi-line string!
    </p>`
)
console.log(returnMultipleLines());