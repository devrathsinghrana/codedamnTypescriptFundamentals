let anyNumber = "1345"; // this is a string, but we want to treat it as a number
let number = anyNumber as unknown as number; // using type assertion to treat it as a number
console.log(number === 1345); // This will log false because the string "1345" is not strictly equal to the number 1345 and type assertions does not convert types, it only tells TypeScript to treat the variable as a different type.

number = +anyNumber; // using unary plus operator to convert string to number similar to Number("1345")
console.log(number === 1345); // This will log true because the string "1345" is now converted to the number 1345
