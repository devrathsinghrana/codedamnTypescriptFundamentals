// here we are differentiating between different types in a UNION type by using a shared field called `shape` with literal value
type Circle = {
  shape: "circle";
  radius: number;
};

type Squares = {
  shape: "square";
  size: number;
};

type Rectangles = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shapes = Circle | Squares | Rectangles;

function calculateArea(shape: Shapes): number | string {
  switch (shape.shape) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      return "Invalid shape";
  }
}

console.log(calculateArea({ shape: "circle", radius: 5 })); // 78.53981633974483
console.log(calculateArea({ shape: "square", size: 4 })); // 16
console.log(calculateArea({ shape: "rectangle", width: 4, height: 5 })); // 20
// console.log(calculateArea({ shape: "triangle", base: 4, height: 5 })); // Type '"triangle"' is not assignable to type '"circle" | "square" | "rectangle"'.

// TypeScript's discriminating unions allow you to define a type that can be one of several different types, each with a common property that can be used to distinguish between them.
// This is particularly useful for creating more complex types that can represent multiple shapes or forms, while still allowing TypeScript to infer the correct type based on the common property.
// For example we using `shape` property in the above example to distinguish between different shapes like Circle, Square, and Rectangle by assigning literal value to it.

type IsValidationSuccess = {
  isValid: true;
  successMessage: string;
};

type IsValidationFailure = {
  isValid: false;
  errorMessage: string;
};

type ValidationReason = IsValidationSuccess | IsValidationFailure;

function logMessages(validationObj: ValidationReason): void {
  if (validationObj.isValid) {
    console.log(`Success: ${validationObj.successMessage}`);
  } else {
    console.error(`Error: ${validationObj.errorMessage}`);
  }
}

logMessages({
  isValid: true,
  successMessage: "Validation passed successfully!",
}); // Success: Validation passed successfully!
logMessages({
  isValid: false,
  errorMessage: "Validation failed due to some reason.",
}); // Error: Validation failed due to some reason.
