function logMessage(message: any): void {
  console.log(`Log: ${message.toFixed(2)}`);
}

logMessage(123.456); // This will work as expected
// logMessage("Hello, world!"); // This will cause a runtime error

// The above code will throw an error because "toFixed" is not a method of string
// To fix this, we can use a type guard to ensure that the input is a number

// using unknown type
function logMessageUnknown(message: unknown): void {
  if (typeof message === "number") {
    console.log(`Log: ${message.toFixed(2)}`);
  } else {
    console.error("Invalid input: expected a number");
  }
}
logMessageUnknown(123.456); // This will work as expected
logMessageUnknown("Hello, world!"); // This will log an error message
// The above code will not throw an error because we check the type of message before calling toFixed
// This is a safer approach as it prevents runtime errors by ensuring that the input is of the expected type
// Using unknown type is generally preferred over any type as it provides better type safety