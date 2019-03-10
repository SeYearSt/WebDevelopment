'use strict'

function getRandomArray(number, scale){
    let randomArray = []
    for (let i=0; i<number; ++i){
        randomArray.push(Math.floor(Math.random()*scale))
    }
    return randomArray
}


function swap(a, i, j){
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
}


function partion(arr, low, high){
    let i = low
    let j = high

    while (true){

        while (arr[i] <= arr[low] && i < high)
            i += 1

        while (arr[j] > arr[low] && j > low)
            j -= 1

        if (i >= j)
            break
        
        swap(a, i, j)
    }
    swap(a, low, j)
    return j
}


function quick_sort(a, low, high){

    if (low > high)
        return 0

    let p = partion(a, low, high)
    quick_sort(a, low, p-1)
    quick_sort(a, p+1, high)
}

let a = getRandomArray(10, 10)

console.log(a)
quick_sort(a, 0, a.length - 1)
console.log(a)
