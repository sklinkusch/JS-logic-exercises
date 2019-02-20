const array = [];
for(let i = 0; i < 100; i++){
  array.push(66);
}
function pickingNumbers(a){
  const sortedA = a.sort((a,b) => a - b);
  const resultArray = [];
  let counter;
  for(let i = 0; i < (sortedA.length); i++){
    counter = 0;
    for(let j = i; j < (sortedA.length); j++){
      if(sortedA[j] <= (sortedA[i] + 1)){
        counter++;
        if(j == (sortedA.length - 1)){
          resultArray.push(counter);
        }
      }else{
        resultArray.push(counter);
        break;
      }
    }
  }
  const maxCounter = resultArray.reduce((currentMax, value) => value > currentMax ? value : currentMax);
  return maxCounter;
}

console.log(pickingNumbers(array));
