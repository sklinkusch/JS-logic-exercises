function countVowels(string) {
  return string.split("").filter(letter => {
    if (
      letter.includes("a") ||
      letter.includes("e") ||
      letter.includes("i") ||
      letter.includes("o") ||
      letter.includes("u")
    ) {
      return letter;
    }
  }).length;
}

console.log("abc: " + countVowels("abc"));
console.log("fgh: " + countVowels("fgh"));
console.log(
  "abcdefghijklmnopqrstuvwxyz: " + countVowels("abcdefghijklmnopqrstuvwxyz")
);
console.log("fbw12: " + countVowels("fbw12"));
console.log("queueing: " + countVowels("queueing"));
console.log("mom: " + countVowels("mom"));
