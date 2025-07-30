class Person {
  private age: number;
  constructor(age: number) {
    this.age = age;
  }
  public getAge(): number {
    return this.age;
  }
  public growOlder(): void {
    this.age++;
  }

  growOlderArrFn = () => {
    this.age++;
  };
}

const person = new Person(30);
console.log(`Initial age: ${person.getAge()}`); // Initial age: 30
person.growOlder();
console.log(`Age after growing older: ${person.getAge()}`); // Age after growing

const getOld = person.growOlder;
// console.log(`Age after calling getOld: ${getOld()}`); //Runtime error- TypeError: Cannot read properties of undefined (reading 'age') at growOlder as this context is lost and we can solve this by using bind method or use arrow function as below

const getOldArrow = person.growOlderArrFn; //here this is lexical this i.e. automatically finds this context from it's surrounding scope
console.log(`Age after calling getOldArrow: ${getOldArrow()}`); // Age after calling getOldArrow: 31
console.log(`Age after growing older: ${person.getAge()}`); // Age after growing

setTimeout(person.growOlder, 1000); //this context is also lost here as setTimeout is a global function and it will not have access to the class instance, so we can use bind method to bind the context of this to the growOlder method or we can use arrow function as below

setTimeout(person.growOlderArrFn, 1000);
