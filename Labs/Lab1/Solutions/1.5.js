function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(7,2009))
console.log(daysInMonth(2,2009))