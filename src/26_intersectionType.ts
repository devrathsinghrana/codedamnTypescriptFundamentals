/*
Behave similarly to class inheritance, by using type Alias name followed by & operator to combine multiple types into one.
This allows you to create a new type that has all the properties of the original types, effectively creating an intersection type.

How it differs from UNION type is that intersection type requires a value to satisfy all the types it combines, while union type allows a value to satisfy any one of the types.
*/

type Name = { name: string };
type Age = { age: number };
type Email = { email: string };
type UserIntersection = Name & Age & Email;

function getDetails(user: UserIntersection): string {
  return `${user.name} is ${user.age} years old and can be reached at ${user.email}`;
}

const personInter = {
  name: "Alice",
  // if field is commented age: 30, Argument of type '{ name: string; email: string; }' is not assignable to parameter of type 'UserIntersection'.
  //   Property 'age' is missing in type '{ name: string; email: string; }' but required in type 'Age'. This error comes below
  age: 30,
  email: "abc@email.com",
};
console.log(getDetails(personInter)); // Alice is 30 years old and can be reached at
