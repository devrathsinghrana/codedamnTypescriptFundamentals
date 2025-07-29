// we have an example of a function type declaration. Here we have given string type annotation to the function parameters and void type annotation to the return type of the function as this function is returning nothing.
function log(message: string): void {
  console.log(message);
}

// here we are giving array type to rest parameter as we are aware that js internally accumulates rest parameters in an array.
function sum(...restValues: Array<number>): number {
  return restValues.reduce((acc, current) => current + acc, 0);
}

log("Hello, TypeScript!"); // valid, logs the message to the console
// log(123); // invalid, argument of type 'number' is not assignable to parameter of type 'string'.

sum(1, 2, 3, 4, 5); // valid, returns the sum of the numbers
// sum("1", "2"); // invalid, argument of type 'string' is not assignable to parameter of type 'number'.

// we can also use type alias to create a first class function type annotation
// this is useful when we want to use the same function type annotation in multiple places or when we want to communicate the intent of the code better by giving a meaningful name to the function type annotation.
// here we are creating a type alias for a function that takes two numbers and returns a number
type AddFunction = (a: number, b: number) => number;
let add: AddFunction = (a, b) => a + b;
// add("1", "2"); // invalid, argument of type 'string' is not assignable to parameter of type 'number'.
// add = (x, y) => "x" + "y";//Type 'string' is not assignable to type 'number'. i.e. we cannot assign a function that returns a string to a variable of type AddFunction which expects a function that returns a number.
console.log(add(10, 20)); // valid, logs the sum of the two numbers
add = (x, y) => x * y; // valid, returns the multiplication of the two numbers
console.log(add(10, 20)); // valid, logs the product of the two numbers

let addNumbers: AddFunction = (x, y) => x + y; // valid, we can also use the type alias to declare a function variable with the same function type annotation
console.log(add(10, 20)); // valid, logs the sum of the two numbers
