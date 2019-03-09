'use strict'

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n){

    if (n == 1) 
    return 1

// Use Stirling's formula
return parseInt(Math.sqrt(2*Math.PI*n) * Math.pow((n/Math.E), n)*Math.exp(1/(12*n)));
}

rl.question('Enter a number: ', function (x) {
    var num = parseFloat(x);

    console.log(factorial(num))

    rl.close();
});