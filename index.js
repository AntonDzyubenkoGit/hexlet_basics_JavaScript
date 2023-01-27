// Числа Фибоначи
const fib = (num) => {
  let result = 0;
  let subresult = 1;

  for(let i = 0; i < num; i++) {
    result = result + subresult;
    subresult = result - subresult;
  }
  return result;
};

console.log(fib(10));