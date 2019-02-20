const isPalindrome = (string) => string.split("").reverse().join("") == string;
console.log(isPalindrome("EYE"));
console.log(isPalindrome("ITA"));
console.log(isPalindrome("19.2.19"));
console.log(isPalindrome("LEO"));
console.log(isPalindrome("RADAR"));
console.log(isPalindrome("LEVEL"));
console.log(isPalindrome("STEFAN"));

function isPalindrome2(string) {
  const stringArray = string.split("");
  let identifier = true;
  for (let i = 0; i <= (stringArray.length / 2); i++) {
    if (stringArray[i] === stringArray[stringArray.length - 1 - i]) {
      //console.log(stringArray[i] + " " + stringArray[stringArray.length - 1 - i]);
    } else {
      //console.log(stringArray[i] + " " + stringArray[stringArray.length - 1 - i]);
      identifier = false;
      break;
    }
  }
  return identifier;
}