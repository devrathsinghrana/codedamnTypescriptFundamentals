const stu = {
  hello: "world",
};
const nums = {
  123: "leet",
};
// key can be anything from string to array
console.log(stu["hello"]);
console.log(nums[123]);
// so ts allows us to give index signatures or type of key names possible

// key name is just for readability and can be anything
type Dictionary = {
  [key: string]: boolean;
};

type PersonIndex = {
  displayName: string;
  email: string;
};

/*
Valid key types for index signatures:
TypeScript only allows these types as keys in index signatures:

string
number
symbol
Template literal patterns (advanced)

JavaScript objects can only have string, number, or symbol keys. Even though you might write obj[true], JavaScript converts it to obj["true"]. TypeScript's index signatures reflect this underlying JavaScript behavior by only allowing the fundamental key types that JavaScript supports.

The commented code gives an error because of TypeScript's index signature constraint rule.


When you define an index signature like [username: string]: PersonIndex, TypeScript enforces that all properties in that type must be assignable to the index signature's value type.
*/
type PersonDictionary = {
  [username: string]: PersonIndex;
  //   jama: string; // Removed to fix type error
  //   allen:boolean;//Property 'allen' of type 'boolean' is not assignable to 'string' index type 'Person'.
};

// Use union types in the index signature:

type PersonDictionaryAll = {
  [username: string]: PersonIndex | string | boolean;
  jama: string; // ✅ Now allowed
  allen: boolean; // ✅ Now allowed
};

const perssonnel: PersonDictionary = {
  john: { displayName: "Dverr", email: "abc@fmd.com" },
};

const perssonnal: PersonDictionaryAll = {
  john: { displayName: "Dverr", email: "abc@fmd.com" },
  jama:"kiki",
  allen:true
};

// You can use a number key like perssonnal[123] because JavaScript automatically converts number keys to strings when used as object property keys.
perssonnal[123] = "sdfsdf";

console.log(perssonnal);
console.log(perssonnal["john"]);
console.log(perssonnal.jama);
console.log(perssonnal[123]);
