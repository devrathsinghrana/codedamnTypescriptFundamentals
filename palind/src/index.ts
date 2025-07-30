type CheckPalindromeOfString = (input: string) => boolean;
const isPalindrome: CheckPalindromeOfString = (inputString) =>
  inputString === inputString.split("").reverse().join("");
