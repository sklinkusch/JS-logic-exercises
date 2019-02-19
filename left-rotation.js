function strangeSortOrder(array) {
  let output = [];
  output.push(array[array.length - 1]);
  for (let i = 0; i < (array.length - 1); i++) {
    output.push(array[i]);
  }
  return output;
}
console.log(strangeSortOrder([0, 1, 2, 3, 4, 5]));