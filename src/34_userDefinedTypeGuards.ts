type SquareTypeGuard = {
  size: number;
};

type RectangleTypeGuard = {
  width: number;
  height: number;
};

type ShapeTypeGuard = SquareTypeGuard | RectangleTypeGuard;

// User-defined type guards are functions that return a boolean and have a type predicate in their return type.
// They help TypeScript understand the type of a variable within a conditional block.
// This is useful when you have a union type and want to narrow down the type based on some condition.
// In this case, we are defining two user-defined type guards: isSquare and isRectangle
//  This isSquare function ensures that if size is present in shape parameter then shape must be of type SquareTypeGuard thus we can use shape.size safely without need of adding extra kind property to the type SquareTypeGuard or RectangleTypeGuard
// Similarly, isRectangle function ensures that if width and height are present in shape parameter then shape must be of type RectangleTypeGuard thus we can use shape.width and shape.height safely without need of adding extra kind property to the type SquareTypeGuard or RectangleTypeGuard
// This is a good practice to ensure that we can use the properties of the shape parameter safely
function isSquare(shape: ShapeTypeGuard): shape is SquareTypeGuard {
  return "size" in shape;
}
function isRectangle(shape: ShapeTypeGuard): shape is RectangleTypeGuard {
  return "width" in shape && "height" in shape;
}

function calculateShapeArea(shape: ShapeTypeGuard): number {
  if (isSquare(shape)) {
    return shape.size ** 2;
  } else if (isRectangle(shape)) {
    // inside this block, TypeScript knows that shape is of type RectangleTypeGuard
    // so we can safely access shape.width and shape.height
    return shape.width * shape.height;
  }
  const _ensureAllCasesAreHandled: never = shape; // This ensures that all cases are handled
  return _ensureAllCasesAreHandled;
}

console.log("User-defined type guards example");
const square: SquareTypeGuard = { size: 5 };
const rectangle: RectangleTypeGuard = { width: 4, height: 6 };
console.log(`Square area: ${calculateShapeArea(square)}`); // Square area: 25
console.log(`Rectangle area: ${calculateShapeArea(rectangle)}`); // Rectangle area: 24

/*
Type guards should generally be preferred over adding discriminant properties (like kind) to type aliases. Here's why:

Type Guards (Preferred Approach)
Advantages:

Cleaner data structures - No need for artificial discriminant properties
Works with existing APIs - Can handle data from external sources without modification
More flexible - Can use any property or combination of properties for type checking
Natural type checking - Uses actual structural differences between types
*/

/*
Discriminated Unions (When to use)
Use when:

Complex type hierarchies with many similar types
Performance is critical (discriminant checking is faster than property checking)
You control the data structure from creation to consumption
Types have overlapping properties that make type guards ambiguous
*/

/*
Recommendation
Start with type guards (like your current approach) because they:

Keep your types clean and focused on business logic
Work well with external data sources
Are more maintainable for simple cases
Consider discriminated unions when:

You have 3+ types with potential property overlap
Performance is critical
You want exhaustive compile-time checking with switch statements
You're building a complex domain model
*/