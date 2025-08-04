// literal types in TypeScript allow you to specify exact values a variable can hold.
// This is useful for creating more precise types, such as enums or specific string values.
// For scalable system design, using literal types can help ensure that only valid values are used, reducing runtime errors.
// They are generally used in conjunction with union types to create a set of allowed values.
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceValue {
  // using type assertion as below to prevent error -  Type 'number' is not assignable to type 'DiceValue'.
  return (Math.floor(Math.random() * 6) + 1) as DiceValue; // Type assertion to ensure the return type is DiceValue
}

if (rollDice() === 6) {
  console.log("You rolled a six!");
} else if (rollDice() === 1) {
  console.log("You rolled a one!");
}

// try {
//   //This comparison appears to be unintentional because the types 'DiceValue' and '7' have no overlap.
//   //   Even try catch block will not catch this error as it is a compile-time error.
//   if (rollDice() === 7) {
//     console.log("You rolled a two or three!");
//   }
// } catch (error) {
//   console.log(
//     "Error: Invalid dice value rolled. Dice can only be between 1 and 6."
//   );
// }
