type AnimalImplements = {
  name: string;
  voice(): string;
};

// This is a utility function which we want to be reusable by CAT and DOG classes
// It expects an object that implements the AnimalImplements interface/type alias
// This ensures that the function can be used with any class that implements the AnimalImplements interface/type alias
function loggie(animal: AnimalImplements) {
  console.log(`${animal.name} says ${animal.voice()}`);
}

// Cat and Dog classes implementing the AnimalImplements interface/type alias ensures that we can use the loggie function with them as loggie expects an object of type AnimalImplements
// This is a good practice to ensure that utility functions are reusable and type-safe
class CatImplements implements AnimalImplements {
  constructor(public name: string) {
    this.name = name;
  }
  voice(): string {
    return "meow";
  }
}

class DogImplements implements AnimalImplements {
  constructor(public name: string) {
    this.name = name;
  }
  voice(): string {
    return "woof";
  }
}

console.log("Cat and Dog classes implement AnimalImplements interface");
const catty = new CatImplements("Whiskers");
const doggie = new DogImplements("Buddy");
loggie(catty);
loggie(doggie);
