// Now below function signature shows that even if we have only value and month it will give correct date but no it will not it will only consider value. But function signature does not explain the underlying logic of the function
// This is a good example of how function overloading can be used to provide more flexibility in function signatures
// This function can be used to create a date object from a value, month, year and day
// It can be used to create a date object from a value, month and year
function makeDate(value: number): Date;
function makeDate(
  value: number,
  month: number,
  year: number,
  day: number
): Date;
// Above two function signatures are overloaded to provide different ways to create a date object
// The first signature takes only value and returns a date object with the current month and year
// The second signature takes value, month, year and day and returns a date object with the specified month, year and day
function makeDate(
  value: number,
  month?: number,
  year?: number,
  day?: number
): Date {
  if (month !== undefined && year !== undefined && day !== undefined) {
    return new Date(year, month, day);
  } else {
    return new Date(value);
  }
}

console.log(makeDate(2023)); // Date object with current month and year
console.log(makeDate(2023, 0, 1, 1)); // Date object with specified month, year and day
// No overload expects 2 arguments, but overloads do exist that expect either 1 or 4 arguments.
// console.log(makeDate(2023, 0));//This will not work as it will not provide enough information to create a date object and give compile time error all because of function overloading thus function overloading is helping us to provide more flexibility in function signatures
