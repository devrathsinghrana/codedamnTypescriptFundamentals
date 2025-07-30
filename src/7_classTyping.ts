class Animal {
  private name;
  protected age: number;
  constructor(name: string, age: number = 0) {
    this.name = name;
    this.age = age;
  }

  public move() {
    console.log(`${this.name} is moving`);
  }
}

const animal = new Animal("Lion");
animal.move(); // Lion is moving
// console.log(animal.name); // Error: Property 'name' is private and only accessible within class 'Animal'.
// console.log(animal.age); // Error: Property 'age' is protected and only accessible within class 'Animal' and its subclasses.

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  public bark() {
    // this.name; // Accessing private property from parent class is not allowed
    console.log(`${this.age} years old dogs are barking`);
  }
}

const dog = new Dog("Monty", 5);
dog.move(); // Monty is moving
dog.bark(); // 5 years old dogs are barking
