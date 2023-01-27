// Испытания. Javascript: Идеальные числа

const isPerfect = (num) => {
  let result = 0;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      result += i;
    }
  }
  return result === num && num !== 0;
};

console.log(isPerfect(7));
