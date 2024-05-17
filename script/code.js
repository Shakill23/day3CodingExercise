let myVariable = "Hello, world!";

console.log(typeof myVariable); // Output: string

myVariable = 123;

console.log(typeof myVariable); // Output: number

let stringVariable = "Hello";
let numberVariable = 123;
let booleanVariable = true;
let arrayVariable = [1, 2, 3];
let objectVariable = { key: "value" };
let undefinedVariable = undefined;
let nullVariable = null;
let functionVariable = function() {};
let symbolVariable = Symbol("foo");

console.log(typeof stringVariable); // Output: string
console.log(typeof numberVariable); // Output: number
console.log(typeof booleanVariable); // Output: boolean
console.log(typeof arrayVariable); // Output: object (arrays are objects in JavaScript)
console.log(typeof objectVariable); // Output: object
console.log(typeof undefinedVariable); // Output: undefined
console.log(typeof nullVariable); // Output: object (a quirk in JavaScript, null is of type 'object')
console.log(typeof functionVariable); // Output: function
console.log(typeof symbolVariable); // Output: symbol
