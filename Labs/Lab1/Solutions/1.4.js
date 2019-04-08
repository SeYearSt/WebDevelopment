'use strict'

var countBy = require('lodash.countby');

function getRandomArray(number, scale){
    let randomArray = []
    for (let i=0; i<number; ++i){
        randomArray.push(Math.floor(Math.random()*scale))
    }
    return randomArray
}

function getMostCommonNumber(numbers){
    let counted = countBy(numbers)
    let i = 0
    let max, commonKey
    Object.keys(counted).forEach(function(key){
        if (i == 0){
            max = counted[key]
            commonKey = key
        }
        if (counted[key] > max){
            max = counted[key]
            commonKey = key
        }
        i += 1
    })
    return [commonKey, counted]
}

let numberCount = 30
let scale = 10
let randomArray = getRandomArray(numberCount, scale)
console.log(randomArray)
let res = getMostCommonNumber(randomArray)
console.log(res[0])
console.log(res[1])