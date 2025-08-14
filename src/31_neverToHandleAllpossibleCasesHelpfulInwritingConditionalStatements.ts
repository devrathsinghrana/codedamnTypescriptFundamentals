// makes finalError() function to be of type never
// which means it should never return a value or complete execution
// By default functions return type is void or undefined
const finalError = () => {
  throw new Error("This should never be reached");
};

// This function infiniteWhile() is also of type never
const infiniteWhile = () => {
  while (true) {
    // This loop will run indefinitely
    // It will never reach the finalError function
    console.log("This loop runs forever");
  }
};

type CircleNever = {
  kind: "circle";
  radius: number;
};

type SquareNever = {
  kind: "square";
  sideLength: number;
};

type RectangleNever = {
  kind: "rectangle";
  width: number;
  height: number;
};
type ShapeNever = CircleNever | SquareNever | RectangleNever;

// const areaNever = (shape: ShapeNever) => {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     // case "rectangle":
//     //   return shape.width * shape.height;
//     default:
//       // This case should never be reached if all possible cases are handled
//       // If it is reached, it will throw an error
//       // This is useful for catching errors in type checking
//       // and ensuring that all cases are handled
//       // For eg if I comment rectangle shape case it will throw compile time error
//       // This is a type-safe way to ensure that all cases are handled
//       const _errorMessageIsNever: never = shape;
//       return _errorMessageIsNever;
//   }
// };

const areaNeverWithoutError = (shape: ShapeNever) => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      // This case should never be reached if all possible cases are handled
      // If it is reached, it will throw an error
      // This is useful for catching errors in type checking
      // and ensuring that all cases are handled
      // For eg if I comment rectangle shape case it will throw compile time error
      // This is a type-safe way to ensure that all cases are handled
      const _errorMessageIsNever: never = shape;
      return _errorMessageIsNever;
  }
};
