// Type narrowing in TypeScript allows you to refine the type of a variable based on control flow analysis.
// This is useful for ensuring that operations on variables are type-safe and preventing runtime errors.
// They are very important for scalable system design as they help maintain type safety and reduce bugs.

// There are three key operators for type narrowing in TypeScript:
// 1. `typeof` operator: Used to check the type of a variable at runtime. They are only beneficial for primitive types like string, number, boolean, etc. as for non-primitive types like object, array, function, etc. it will return 'object' string only so, can't be used to narrow down the type of non-primitive types.
function paddingLeft(
  value: string,
  padding: string | number
): string | undefined {
  if (typeof padding === "number") return Array(padding + 1).join(" ") + value;
  if (typeof padding === "string") return padding + value;
}
console.log(paddingLeft("Hello", 4)); // "    Hello"
console.log(paddingLeft("Hello", ">>> ")); // ">>> Hello"

// Type narrowing is very important to handle complex types of parameters in functions, especially when dealing with union types or when the type of a variable can change based on certain conditions.

// 2. `instanceof` operator: Used to check if an object is an instance of a specific class or constructor function. This is useful for narrowing down types when dealing with classes or custom types.

class Cat {
  public animalName: string;
  constructor(animalName: string) {
    this.animalName = animalName;
  }
  public meow() {
    console.log(`${this.animalName} cat is meowing`);
  }
}

class Doggy {
  public animalName;
  constructor(animalName: string) {
    this.animalName = animalName;
  }
  public bark() {
    console.log(`${this.animalName} dog is barking`);
  }
}

type Animals = Cat | Doggy;

const cat = new Cat("Tabby");
const doggy = new Doggy("Tommy");

function Action(animal: Animals): void {
  if (animal instanceof Cat) {
    animal.meow();
  } else if (animal instanceof Doggy) {
    animal.bark();
  }
}

Action(cat); // "Tabby cat is meowing"
Action(doggy); // "Tommy dog is barking"

// 3. Using in operator for type narrowing. What if the objects are not instances of classes but have some common properties? In such cases, you can use the `in` operator to check for the existence of a property in an object.
type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function getArea(shape: Shape): number {
  if ("size" in shape) {
    return shape.size * shape.size; // Square
  } else {
    return shape.width * shape.height; // Rectangle
  }
}
console.log(getArea({ size: 5 })); // 25 (Square)
console.log(getArea({ width: 4, height: 5 })); // 20 (Rectangle)

// User-defined type guards: These are custom functions that return a boolean value and help TypeScript understand the type of a variable. They are useful for more complex type checks or when dealing with interfaces.
function isCat(animal: Animals): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

function isDog(animal: Animals): animal is Doggy {
  return (animal as Doggy).bark !== undefined;
}

function ActionWithTypeGuard(animal: Animals): void {
  if (isCat(animal)) {
    animal.meow();
  } else if (isDog(animal)) {
    animal.bark();
  }
}

ActionWithTypeGuard(cat); // "Tabby cat is meowing"
ActionWithTypeGuard(doggy); // "Tommy dog is barking"
