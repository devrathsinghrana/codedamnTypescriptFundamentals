let anyTypeValue: any;
let unknownTypeValue: unknown;

// any type can be assigned to any value without any checks
anyTypeValue = 1;
anyTypeValue = "Hello";

// unknown type can be assigned to any value also
unknownTypeValue = 1;
unknownTypeValue = "Hello";
unknownTypeValue = true;

// Major difference of unknown type is that it is safer than any type
// With any type, you can use the value without any checks, which can lead to runtime errors if the value is not of the expected type
console.log(anyTypeValue.toUpperCase()); // This works, but if anyTypeValue is not a string, it will lead to a runtime error
// However, when using unknown type, you need to perform type checks before using the value
// console.log(unknownTypeValue.toUpperCase()); // 'unknownTypeValue' is of type 'unknown'. error is shown
if (typeof unknownTypeValue === "string") {
  console.log(unknownTypeValue.toUpperCase()); // This is safe, as we checked the type
}

// let booleanValue: boolean = unknownTypeValue;// Error: Type 'unknown' is not assignable to type 'boolean'.
// This is because unknown type does not allow direct assignment to other types without type checks
