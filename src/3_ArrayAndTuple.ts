// Array type using another syntax as it is extensively used so, we are provided with a shorthand syntax to define an array type in TypeScript.
let fruitBasket: string[] = ["apple", "banana", "cherry"]; // This is equivalent to Array<string>

// fruitBasket.push(23);// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Tuple type is a special type of array that allows you to define an array with fixed number of elements and specific types for each element.
let geoLocation: [number, number] = [40.7128, -74.006]; // Tuple with two numbers representing latitude and longitude

// geoLocation.push("New York"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// geoLocation=[1,2,3];//Type '[number, number, number]' is not assignable to type '[number, number]'. Source has 3 element(s) but target allows only 2

geoLocation = [1, 2]; // This is valid as it matches the tuple type definition
