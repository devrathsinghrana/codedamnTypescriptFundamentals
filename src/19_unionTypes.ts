function formatCommandLine(command: any): string {
  if (typeof command === "string") {
    return command.trim();
  }
  return command
    .map((part: any) => {
      return part.trim();
    })
    .join(" ");
}

console.log(formatCommandLine("  ls -la  ")); // "ls -la"
console.log(formatCommandLine(["  ls", "-la  "])); // "ls -la"
// console.log(formatCommandLine(123)); // Runtime error: TypeError: command.map is not a function

function formatCommandLineFix(command: string | string[]): string {
  if (typeof command === "string") {
    return command.trim();
  }
  return command
    .map((part: any) => {
      return part.trim();
    })
    .join(" ");
}

console.log(formatCommandLineFix("  ls -la  ")); // "ls -la"
console.log(formatCommandLineFix(["  ls", "-la  "])); // "ls -la"
// console.log(formatCommandLineFix(123)); //compile time error: Argument of type 'number' is not assignable to parameter of type 'string | string[]'.

function padLeft(value: string, padding: string | number): string | undefined {
  if (typeof padding === "number") return Array(padding + 1).join(" ") + value; //this make empty array of length padding +1 and then converts it into string with each value treated as empty space " " then append value passed in it
  if (typeof padding === "string") return padding + value;
}

console.log(padLeft("Hello", 4)); // "    Hello"
console.log(padLeft("Hello", ">>> ")); // ">>> Hello"
// console.log(padLeft("Hello", true)); // Runtime error: TypeError: padding is not a function
