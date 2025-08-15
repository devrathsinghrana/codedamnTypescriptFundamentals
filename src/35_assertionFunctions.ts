type PersonForAssertionFunction = {
  name: string;
  dateOfBirth?: Date;
};

// : asserts condition  this prevents error in console.log("Name: ", maybePerson.name); line below as even if assert function is called before logging this name property ts implicitly does not not know that it cannot be null so we use this assertion function approach to ensure that the console.log will not throw an error as it will not be executed until we get a non-null value
// Syntax for assertion functions is function name(condition: unknown, message: string): asserts condition
function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

const loadPerson = () => {
  // Simulating a person loading function
  return null;
  return { name: "Daku", dateOfBirth: new Date("1990-01-01") };
};

const maybePerson: PersonForAssertionFunction | null = loadPerson();

assert(maybePerson !== null, "Could not load person");

console.log("Name: ", maybePerson.name);

// value is Date is like type guard but it is used in assertion functions
// Provide clear type narrowing without extra properties
function assertDate(value: unknown): asserts value is Date {
  if (!(value instanceof Date)) {
    throw new Error("Value is not a Date");
  }
}

assertDate(maybePerson.dateOfBirth);
// 'maybePerson.dateOfBirth' is possibly 'undefined'. this is because dateOfBirth is optional in PersonForAssertionFunction type
// so we need to ensure that it is defined before using it or we can use assertion function to ensure that it is defined
console.log("Date of Birth: ", maybePerson.dateOfBirth.toISOString());

// Assertion functions vs user defined type guards
// Assertion functions are used to assert that a value is of a certain type, while user-defined type guards are used to narrow down the type of a value within a conditional block.
// Use assertion functions when you want to ensure that a value is of a certain type and throw an error if it is not. and use it with testing frameworks like jest to ensure that the value is of a certain type and throw an error if it is not.
// User user-defined type guards when you want to narrow down the type of a value within a conditional block and use it in your code without throwing an error if the value is not of the expected type and use in your daily code.
