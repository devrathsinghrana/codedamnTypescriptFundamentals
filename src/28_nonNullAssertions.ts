/*
Can work with object members or variables.
They simply prevent the need to check for undefined values before accessing properties or methods on an object.
Non-null assertions are useful when you are certain that a value will not be null or undefined at runtime, but TypeScript's type system cannot infer that certainty as it can't do deep code flow analysis.
*/

type NonNullPoint = {
  x: number;
  y: number;
};

let point: NonNullPoint;
function initialize() {
  point = { x: 10, y: 20 }; // Initialize point with non-null values
}
initialize();
// console.log(`Point is at (${point.x}, ${point.y})`); // Variable 'point' is used before being assigned. error will be thrown even if initialize is called before this line which sets point to non-null values
// to prevent above error we can use !.
console.log(`Point is at (${point!.x}, ${point!.y})`);

// or we can modify our code as below to avoid using non-null assertion operator usage as it's not recommended to use it unless absolutely necessary.

type NonNullPointTwo = {
  w: number;
  b: number;
};
let point2: NonNullPointTwo;
function initializePoint(): NonNullPointTwo {
  return { w: 10, b: 20 };
}
point2 = initializePoint();
console.log(`Point2 is at (${point2.w}, ${point2.b})`);

