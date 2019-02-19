let A = [42, 13, 5];
let B = [18, 71, 22];
function getScore(arrayA, arrayB) {
  let score = [0, 0];
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] > arrayB[i]) {
      score[0]++;
    } else if (arrayB[i] > arrayA[i]) {
      score[1]++;
    }
  }
  return score;
}
console.log(getScore(A, B));

/*
C++ solution
include <iostream>
include <math.h>
include <stdlib.h>
include <stdio.h>

using namespace std;

int* getScore(int* arrayA, int* arrayB, int length);

int main(void){
  int length = 3;
  int* A = new int[length];
  int* B = new int[length];
  int* score = new int[2];
  score = getScore(A,B, length);
  cout(score);
}

int* getScore(int* arrayA, int* arrayB, int length){
  int* result = new int[2];
  for(int i = 0; i < 2; i++){
    result[i] = 0;
  }
  for(int i = 0; i < length; i++){
    if(arrayA[i] > arrayB[j]){
      result[0]++;
    }else if(arrayB[i] > arrayA[i]){
      result[1]++;
    }
  }
  return result;
}
*/
