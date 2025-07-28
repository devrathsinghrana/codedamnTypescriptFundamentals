// Instance types are basically classes that can be instantiated using the new keyword. They can have properties and methods, and can be generic or non-generic (i.e. they can have a specific type or can be made dynamic using generics).

// Example of in-built instance type in TypeScript without generics:
const regexVal: RegExp = new RegExp(/^[a-zA-Z0-9]+$/); // Regular expression to match alphanumeric characters

// Example of in-built instance type in TypeScript with generics:
const setOfUniqueNumbers: Set<number> = new Set([1, 2, 3, 4, 5]); // Set is an instance type as it is in-built class of js which can be instantiated using new keyword new Set([1,2,3]) and <number> is a generic type which is used to specify the type of elements in the set.

const oddNumbers: Array<number> = [1, 3, 5, 7]; // Array<number> Array is instance type as it is in-built class of js which can be instantiated using new keyword new Array([1,2,3]) and <number> is a generic type which is used to specify the type of elements in the array.

// Generic types are used to create reusable components that can work with any data type. i.e. <generic> value can be made dynamic as we will explain with example of custom class queue below.
// Make custom class Queue with generic value which have first in first out approach.
// Queue will be our custom instance type as it is a class which can be instantiated using new keyword new Queue<T>() and <T> is a generic type which is used to specify the type of elements in the queue. it's value is dynamic depending on how we annotate Queue instance type with generic value.

class Queue<T> {
  // below type annotation : T[] is alternative of : Array<T>
  private queueMembers: T[] = []; // queueMembers is an array of type T which is a generic type. It can be any type depending on how we annotate Queue instance type with generic value.
  pushInQueue(item: T): void {
    this.queueMembers.push(item); // push method adds an item to the queueMembers array.
  }
  popOutOfQueue(): T | undefined {
    return this.queueMembers.shift(); // shift method removes the first item from the queueMembers array and returns it. If the array is empty, it returns undefined.
  }
}

const numberQueue = new Queue<number>(); // Create an instance of Queue with number type
numberQueue.pushInQueue(1); // Add number to the queue
numberQueue.pushInQueue(2); // Add another number to the queue
console.log(numberQueue.popOutOfQueue()); // Output: 1 (first in first out
console.log(numberQueue.popOutOfQueue()); // Output: 2 (first in first out)
const stringQueue = new Queue<string>(); // Create an instance of Queue with string type
stringQueue.pushInQueue("Hello"); // Add string to the queue
stringQueue.pushInQueue("World"); // Add another string to the queue
console.log(stringQueue.popOutOfQueue()); // Output: Hello (first in first out)
console.log(stringQueue.popOutOfQueue()); // Output: World (first in first out)
// The Queue class is a generic type that can be used with any data type, making it reusable and flexible.
