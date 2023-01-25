const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);


console.log(isLeapYear(2018));
console.log(isLeapYear(2017));
console.log(isLeapYear(2016));
