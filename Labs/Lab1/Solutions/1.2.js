'use strict'

function getAllPermutations(string) {
    let results = [];
  
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (let i = 0; i < string.length; i++) {
      let firstChar = string[i];
      let charsLeft = string.substring(0, i) + string.substring(i + 1);
      let innerPermutations = getAllPermutations(charsLeft);
      for (let j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }

let testStrings = ['My', 'Bonnie', 'lies', 'over', 'the', 'ocean']
testStrings.forEach(function(testString){
  console.log(new Set(getAllPermutations(testString)))
});
