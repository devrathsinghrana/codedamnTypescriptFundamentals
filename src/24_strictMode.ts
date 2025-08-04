// below function not allowed in strict mode with implicit any type for parameters
// function addTwoNumbers(a, b) {
//   return a + b;
// }

function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addTwoNumbers(5, 10)); // 15

// In strict mode, TypeScript requires all parameters to have explicit types.
// This helps catch errors early and ensures that the code is more robust and maintainable.

// TypeScript's strict mode is a set of compiler options that enforce stricter type checking and error reporting.
// It helps catch potential errors and improves code quality by enforcing best practices.
// For example, in strict mode, TypeScript will not allow implicit any types for parameters, which means you must explicitly define the type of each parameter in a function.
// This is particularly useful for catching errors early in the development process and ensuring that the code adheres to strict type safety rules.
// Strict mode is enabled by setting the `strict` option to `true` in the `tsconfig.json` file.
// It is generally recommended to enable strict mode in TypeScript projects for better type safety and error prevention.
// Below example will give error as constructor is missing with values initialization of it's members.
// class Pointy {
//   public x: number;
//   public y: number;
//   move(x: number, y: number): void {
//     this.x += x;
//     this.y += y;
//   }
// }

class Pointy {
  constructor(public x: number, public y: number) {
    this.x = x;
    this.y = y;
  }
  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }
}

const pointy = new Pointy(10, 20);
pointy.move(5, 5);
console.log(`Pointy is at (${pointy.x}, ${pointy.y})`); // Pointy is at (15, 25)

type UserAge = { name: string; age: number };

const users: UserAge[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// below code will give error in strict mode as reqUser can possibly be undefined
// function getUserAge(user: UserAge): number {
//   const reqUser = users.find((u) => u.name === user.name);
//   return reqUser.age;
// }

function getUserAge(user: UserAge): number {
  const reqUser = users.find((u) => u.name === user.name);
  if (!reqUser) {
    throw new Error("User not found");
  }
  return reqUser.age;
}

console.log(getUserAge({ name: "Alice", age: 30 })); // 30
console.log(getUserAge({ name: "Bob", age: 25 })); //   25
console.log(getUserAge({ name: "Dave", age: 40 })); // // Error: User not found
