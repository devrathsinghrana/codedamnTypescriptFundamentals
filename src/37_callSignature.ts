// Call signature in ts allows us to write complex function or class signatures that can be used to create more flexible and reusable code.
// This is a good example of how call signatures can be used to provide more flexibility in function signatures

// one way of writing call signature is using type alias and assigning function signature to it
type AddCallSignatureOne = (a: number, b: number) => number;
// Below is inline way of writing call signature
type AddCallSignature = {
  // This is a call signature that can take two or three arguments
  // The first two arguments are required and the third argument is optional
  // So we can also type function overloading using call signatures
  (a: number, b: number): number;
  (a: number, b: number, c?: number): number;
  debugName?: string; // Optional property
};

const addCallSignature: AddCallSignature = (
  a: number,
  b: number,
  c?: number
) => {
  return a + b + (c != null ? c : 0);
};

console.log(addCallSignature(1, 2)); // 3
console.log(addCallSignature(1, 2, 3)); // 6
// console.log(addCallSignature(1)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
// console.log(addCallSignature(1, 2, 3, 4)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
console.log(addCallSignature.debugName); // undefined, as debugName is optional
addCallSignature.debugName = "Add Function"; // Assigning value to optional property
console.log(addCallSignature.debugName); // "Add Function"
// Call signatures can also be used to define methods in classes or interfaces

class Calculator {
  // Using call signature to define a method in class
  add: AddCallSignature = (a: number, b: number, c?: number) => {
    return a + b + (c != null ? c : 0);
  };
}
const calculator = new Calculator();
console.log(calculator.add(1, 2)); // 3

console.log(calculator.add(1, 2, 3)); // 6
// console.log(calculator.add(1)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
// console.log(calculator.add(1, 2, 3, 4)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
// Call signatures can also be used to define functions in interfaces
interface ICalculator {
  add: AddCallSignature;
}
const calculatorInterface: ICalculator = {
  add: (a: number, b: number, c?: number) => {
    return a + b + (c != null ? c : 0);
  },
};
console.log(calculatorInterface.add(1, 2)); // 3
console.log(calculatorInterface.add(1, 2, 3)); // 6
// console.log(calculatorInterface.add(1)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
// console.log(calculatorInterface.add(1, 2, 3, 4)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
// Call signatures can also be used to define functions in type aliases
type ICalculatorTypeAlias = {
  add: AddCallSignature;
};
const calculatorTypeAlias: ICalculatorTypeAlias = {
  add: (a: number, b: number, c?: number) => {
    return a + b + (c != null ? c : 0);
  },
};
console.log(calculatorTypeAlias.add(1, 2)); // 3
console.log(calculatorTypeAlias.add(1, 2, 3)); // 6
// console.log(calculatorTypeAlias.add(1)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
// console.log(calculatorTypeAlias.add(1, 2, 3, 4)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
// Call signatures can also be used to define functions in namespaces
namespace CalculatorNamespace {
  export type AddCallSignature = (a: number, b: number, c?: number) => number;

  export const add: AddCallSignature = (a: number, b: number, c?: number) => {
    return a + b + (c != null ? c : 0);
  };
}
console.log(CalculatorNamespace.add(1, 2)); // 3
console.log(CalculatorNamespace.add(1, 2, 3)); // 6
// console.log(CalculatorNamespace.add(1)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
// console.log(CalculatorNamespace.add(1, 2, 3, 4)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures

// Call signatures can also be used to define functions in modules
export type AddCallSignatureModule = (
  a: number,
  b: number,
  c?: number
) => number;
export const addModule: AddCallSignatureModule = (
  a: number,
  b: number,
  c?: number
) => {
  return a + b + (c != null ? c : 0);
};
console.log(addModule(1, 2)); // 3
console.log(addModule(1, 2, 3)); // 6
// console.log(addModule(1)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
// console.log(addModule(1, 2, 3, 4)); // This will not work as it will not provide enough information to add numbers and give compile time error all because of call signature thus call signature is helping us to provide more flexibility in function signatures
// Call signatures are a powerful feature in TypeScript that allows us to define flexible and reusable function signatures. They can be used in various contexts such as classes, interfaces, type aliases, namespaces, and modules.
// They help us to provide more flexibility in function signatures and make our code more readable and maintainable.
// Call signatures can also be used to define functions in type aliases, interfaces, classes, namespaces, and modules. They allow us to define complex function signatures that can be reused across our codebase, making it easier to maintain and understand.

// Call signatures can be used to define class types also

// Method 1 of creating class type using call signature
// This is a call signature that can be used to create a class type
// It defines a constructor that takes two arguments and returns an object with x and y properties
// This is a good example of how call signatures can be used to create class types that can be used to create more flexible and reusable code
type PointClassType = new (x: number, y: number) => {
  x: number;
  y: number;
};

const Point: PointClassType = class {
  constructor(public x: number, public y: number) {}
};

// Method 2 - Below is another way of creating class type using call signature
// This is a call signature that can be used to create a class type. It is inline way of writing call signature
// It defines a constructor that takes two arguments and returns an object with x and y properties
type PointCreator = {
  new (x: number, y: number): {
    x: number;
    y: number;
  };
};

// now we can make a type of pointcreator with class and function overloading both
type PointCreatorWithOverloading = {
  // class overloading
  new (x: number, y: number): {
    x: number;
    y: number;
  };
  new (x: number, y: number, z: number): {
    x: number;
    y: number;
    z?: number;
  };
  //   function overloading
  (x: number, y: number): number;
  (x: number, y: number, z: number): number;
  debugName?: string;
};
