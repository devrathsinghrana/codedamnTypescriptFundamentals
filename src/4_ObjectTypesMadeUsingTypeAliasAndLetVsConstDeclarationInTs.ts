// we use type keyword to create type aliases
// type aliases are used to create a new name for an existing type
// we have defined object type using type alias to remove type duplicity for similar structure objects i.e. objects with same properties and same types of values

type Point = { x: number; y: number };

let numberPoint: Point = { x: 10, y: 20 };

numberPoint = { x: 30, y: 40 }; // valid

let unitPoint: Point = { x: 1, y: 1 }; // valid
// let invalidPoint: Point = { x: 1, y: "1" }; // invalid, y should be a number

// Also type aliases helps us to communicate the intent of the code better as we have done above which represents a point in 2D space i.e. x and y coordinates

// Const declaration

const unchangedPoint: Point = { x: 10, y: 20 }; // const declaration

// unchangedPoint = { x: 1, y: 2 }; // Cannot assign to 'unchangedPoint' because it is a constant.

unchangedPoint.x = 30; // valid, we can change the properties of the object but cannot reassign the object itself i.e. for the rest it behave similar to let except that we cannot reassign the object itself.
