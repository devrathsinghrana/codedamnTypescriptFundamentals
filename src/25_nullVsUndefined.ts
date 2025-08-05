/*
js runtime has two ways to represent absence of value:
1. `null` - represents an intentional absence of any object value.
2. `undefined` - represents a variable that has been declared but not yet assigned a value.

ts provides literal type annotations for both of these values, but they are used in different contexts.

even if we don't explicitly set a variable to `null` or `undefined`, TypeScript will infer the type based on the context.

There is no strict rule in TypeScript that prevents you from using `null` or `undefined` as values, but it is generally recommended to avoid them unless necessary.

There is no neat way to handle both of these values together, but you can use union types to allow a variable to be either `null` or `undefined`.

We can use == to check for both `null` and `undefined` values as only `null` and `undefined` are loosely equal to each other in JavaScript not other falsy values.

strictNullChecks is set to true or strict set to true then only typescript will enforce strict null checks, meaning that `null` and `undefined` are not assignable to any type unless explicitly allowed.
*/

function checkForNullOrUndefinedOrBoolean() {
  return true;
}
let result = checkForNullOrUndefinedOrBoolean();
if (result == null) {
  // checks for both null and undefined
  console.log("result is either null or undefined", result);
} else if (result != null) {
  console.log(result);
}

let undefinedValue: undefined = undefined;
let nullValue: null = null;

class ExamplePoint {
  constructor(public x: number, public y: number | undefined | null) {
    this.x = x;
    this.y = y;
  }
}

const examplePoint = new ExamplePoint(10, undefinedValue);
// const examplePoint = new ExamplePoint(10, nullValue);
// const examplePoint = new ExamplePoint(10, 30);

console.log(`ExamplePoint is at (${examplePoint.x}, ${examplePoint.y})`); // ExamplePoint is at (10, undefined)

function logValue(value: string | null | undefined): void {
  if (value == null) {
    //this will handle both null and undefined as null==undefined is true which is an exception
    // checks for both null and undefined
    console.log("Value is either null or undefined", value);
  } else {
    console.log(`Value is: ${value}`);
  }
}
logValue("Hello, World!"); // Value is: Hello, World!
logValue(null); // Value is either null or undefined null
function formatValue(value: string | null | undefined): string {
  if (value == null) {
    // checks for both null and undefined
    return "No value provided";
  }
  return `Formatted value: --${value.trim()}--`;
}
formatValue("   TypeScript   "); // Formatted value: --TypeScript--
formatValue(null); // No value provided
