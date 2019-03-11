let obj = { a: 4, b: 0.5 , c: 0.35, d: 5 };

let arr = Object.values(obj);
let keys = Object.keys(obj);
let min = Math.min(...arr);
let max = Math.max(...arr);

console.log( `Min value: ${keys[arr.indexOf(min)]}, max value: ${keys[arr.indexOf(max)]}`);