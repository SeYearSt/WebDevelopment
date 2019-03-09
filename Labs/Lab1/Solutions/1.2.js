'use strict'

function getAllPermutations(string) {
    var results = [];
  
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }

function main(){

    //var inputString1 = 'SomeKingOfString'
    var inputString2 = 'ABC'

    //console.log(getAllPermutations(inputString1))
    console.log('------------------')
    console.log(getAllPermutations(inputString2))
}

if (require.main === module) {
    main();
}