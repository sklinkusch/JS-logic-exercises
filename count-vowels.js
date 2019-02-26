function countVowels(string) {
  return string.split("").filter(letter => "aeiou".includes(letter)).length;
}

console.log("abc: " + countVowels("abc"));
console.log("fgh: " + countVowels("fgh"));
console.log(
  "abcdefghijklmnopqrstuvwxyz: " + countVowels("abcdefghijklmnopqrstuvwxyz")
);
console.log("fbw12: " + countVowels("fbw12"));
console.log("queueing: " + countVowels("queueing"));
console.log("mom: " + countVowels("mom"));

// Ninja function
/*
const countVowels = (str) => {
  str.match(/[aeiou]/gi) == null ? 0 : str.match(/[aeiou]/gi).length;
}
*/
