type CheckPalindromeOfString = (input: string) => boolean;
export const isPalindrome: CheckPalindromeOfString = (inputString) =>
  inputString === inputString.split("").reverse().join("");
