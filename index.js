// Испытания. Javascript: Счастливые числа
const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

const isHappyNumber = (num) => {
  let numAsStrig = String(num);
  let result = 0;
  for (let i = 0; i < 10; i++) {
    result = result + sumOfSquareDigits(numAsStrig);
    if (result === 1) {
      return true;
    }
    numAsStrig = String(result);

    result = 0;
  }
  return false;
};

const isHappyNumber2 = (num) => {
  let number = num;
  for (let i = 0; i < 10; i += 1) {
    number = sumOfSquareDigits(number);
    if (number === 1) {
      return true;
    }
  }
  return false;
};

console.log(isHappyNumber(8));
