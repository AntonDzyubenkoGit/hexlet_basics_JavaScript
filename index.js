// Javascript: Найди Fizz и Buzz
const fizzBuzz = (begin, end) => {
  let result = 0;
  for (let i = begin; i <= end; i++) {
    result = i;
    if (i % 3 === 0 && i % 5 === 0) {
      result = "FizzBuzz";
    } else if (i % 3 === 0) {
      result = "Fizz";
    } else if (i % 5 === 0) {
      result = "Buzz";
    }
    console.log(result);
  }
};

fizzBuzz(1, 30);
