/*
Optional modifier for a property in a class or object basically makes that property have undefined type attached to it.
This means that the property can either have a value of the specified type or be undefined.
This is useful when you want to allow a property to be optional, meaning it may not always be present or initialized.

Note: null is not the same as undefined in TypeScript and here is not an optional value so you need to explicitly set it to null if you want to use it.
*/

class UserOptional {
  public age?: number; // age is optional, can be undefined so it will not give error even if not initialized inside constructor
  constructor(
    public name: string,
    public email?: string // email is optional, can be undefined
  ) {
    this.name = name;
    this.email = email;
  }
}

const user1 = new UserOptional("Alice");
const user2 = new UserOptional("Bob", "abc@email.com");
// const user3 = new UserOptional();//An argument for 'name' was not provided.
console.log(user1); // UserOptional { name: 'Alice', email: undefined, age: undefined }
console.log(user2); // UserOptional { name: 'Bob', email: 'abc@email.com', age: undefined }

type UserObjectOptional = {
  netWorth?: number; // netWorth is optional, can be undefined
  name: string;
};

const userObj1: UserObjectOptional = {
  name: "Charlie",
};

/**
 Property 'name' is missing in type '{ netWorth: number; }' but required in type 'UserObjectOptional'.
 const userObj2: UserObjectOptional = {
//   name: "Dave",
  netWorth: 1000000, // netWorth is defined
};
 */
