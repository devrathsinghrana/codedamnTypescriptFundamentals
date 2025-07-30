type PointIn2DSpace = {
  readonly x: number;
  readonly y: number;
};

const newPoint: PointIn2DSpace = {
  x: 10,
  y: 20,
};

// newPoint = { x: 30, y: 40 }; // Error: Cannot assign to 'newPoint' because it is a constant
// newPoint.x = 15; // Error: Cannot assign to 'x' because it is a read-only property
// newPoint.y = 25; // Error: Cannot assign to 'y' because it is a read-only property
console.log(`Point coordinates: (${newPoint.x}, ${newPoint.y})`); // Point coordinates: (10, 20)

class ReadonlyAnimal {
  public readonly name: string;
  species: string; //by default all class properties are public

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  getDetails(): string {
    return `${this.name} is a ${this.species}`;
  }
}

const readonlyAnimal = new ReadonlyAnimal("Leo", "Lion");
console.log(readonlyAnimal.getDetails()); // Leo is a Lion
// readonlyAnimal.name = "Max"; // Error: Cannot assign to 'name' because it is a read-only property
readonlyAnimal.species = "Tiger"; // This is allowed as species is not readonly
console.log(readonlyAnimal.getDetails()); // Leo is a Tiger

