// FIFO (First In First Out) Queue

// Without generics approach
class WithoutGenericQueue {
  private queueMembers: any = [];
  pushInQueue(item: any): void {
    this.queueMembers.push(item);
  }
  popOutOfQueue(): any {
    return this.queueMembers.shift();
  }
}

const withoutGenericQueue = new WithoutGenericQueue();
withoutGenericQueue.pushInQueue(1);
withoutGenericQueue.pushInQueue(2);
withoutGenericQueue.pushInQueue("Hello");

console.log(withoutGenericQueue.popOutOfQueue().toPrecision(1)); // Output: 1 (first in first out)
console.log(withoutGenericQueue.popOutOfQueue().toPrecision(1)); // Output: 2 (first in first out)
// console.log(withoutGenericQueue.popOutOfQueue().toPrecision(1)); // Runtime Error: toPrecision is not a function, as the item - "Hello" is a string.
// This shows that without generics, the queue can hold any type of data, but it loses type safety and can lead to runtime errors.
// To prevent this we can go with generics approach or class specialization approach(Not recommended).

// With class specialization approach
// Class specialization is a way to create a specific version of a class for a particular type as below

class NumberedQueue {
  private queueMembers: number[] = [];
  pushInQueue(item: number): void {
    this.queueMembers.push(item);
  }
  popOutOfQueue(): number | undefined {
    return this.queueMembers.shift();
  }
}

const numberedQueue = new NumberedQueue();
numberedQueue.pushInQueue(1);
numberedQueue.pushInQueue(2);
// numberedQueue.pushInQueue("Hello");//Argument of type 'string' is not assignable to parameter of type 'number'. Thus preventing above error in compile time itself.
const numOut1 = numberedQueue.popOutOfQueue();
if (numOut1 !== undefined) {
  console.log(numOut1.toPrecision(1)); // Output: 1 (first in first out)
}
const numOut2 = numberedQueue.popOutOfQueue();
if (numOut2 !== undefined) {
  console.log(numOut2.toPrecision(1)); // Output: 2 (first in first  out)
}
// This shows that class specialization can provide type safety, but it is not as flexible as generics.
// It requires creating a new class for each type, which can lead to code duplication and maintenance issues.
// Thus class specialization is not recommended as it leads to code duplication and maintenance issues.

// With generics approach
// Generic types are used to create reusable components that can work with any data type. i.e. <generic> value can be made dynamic as we will explain with example of custom class queue below.
// Make custom class Queue with generic value which have first in first out approach.

class GenericQueue<T> {
  // below type annotation : T[] is alternative of : Array<T>
  private queueMembers: T[] = []; // queueMembers is an array of type T which is a generic type. It can be any type depending on how we annotate Queue instance type with generic value.
  pushInQueue(item: T): void {
    this.queueMembers.push(item); // push method adds an item to the queueMembers array.
  }
  popOutOfQueue(): T | undefined {
    return this.queueMembers.shift(); // shift method removes the first item from the queueMembers array and returns it. If the array is empty, it returns undefined.
  }
}

const genericNumberQueue = new GenericQueue<number>(); // Create an instance of GenericQueue with number type
genericNumberQueue.pushInQueue(1); // Add number to the queue
genericNumberQueue.pushInQueue(2); // Add another number to the queue
const num1 = genericNumberQueue.popOutOfQueue();
if (num1 !== undefined) {
  console.log(num1.toPrecision(1)); // Output: 1 (first in first out)
}
const num2 = genericNumberQueue.popOutOfQueue();
if (num2 !== undefined) {
  console.log(num2.toPrecision(1)); // Output: 2 (first in first out)
}
const genericStringQueue = new GenericQueue<string>(); // Create an instance of GenericQueue with string type
genericStringQueue.pushInQueue("Hello"); // Add string to the queue
genericStringQueue.pushInQueue("World"); // Add another string to the queue
console.log(genericStringQueue.popOutOfQueue()); // Output: Hello (first in first out)
console.log(genericStringQueue.popOutOfQueue()); // Output: World (first in first out)
// The GenericQueue class is a generic type that can be used with any data type, making it reusable and flexible.
