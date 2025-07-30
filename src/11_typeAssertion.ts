// syntax of type assertion is variable name as TypeName -> keyword as followed by the type name
// another way is using angle brackets <TypeName> variable name which is not recommended in TSX files

function load():unknown {
  return "Hello, world!";
}

let hello = load(); // assuming load() returns a string

// Using type assertion to tell TypeScript that hello is a string
let message = hello as string; // using 'as' syntax
// or using angle brackets syntax
let message2 = <string>hello;

console.log(message.toUpperCase()); // This will work as expected
console.log(message2.toLowerCase()); // This will also work as expected

// Type assertion is useful when you know more about the type of a variable than TypeScript does
// However, it should be used with caution as it can lead to runtime errors if the assertion is incorrect
// It's generally better to use type guards or other type-checking mechanisms to ensure type safety 
// than to rely on type assertions, which can bypass TypeScript's type checking.
// Type assertions should be used sparingly and only when you are certain of the type of the variable.
// They can be useful in scenarios where you are working with third-party libraries or APIs that do not have type definitions, or when you are migrating JavaScript code to TypeScript and need to assert types temporarily.
// Always prefer type safety and avoid using type assertions unless absolutely necessary.

// let message3 = load().toUpperCase(); // This will cause a compile-time error
// because TypeScript does not know that load() returns a string
// so type assertion assures and prevent typescript type checking
// from throwing an error, but it can lead to runtime errors if the assertion is incorrect