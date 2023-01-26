// Функция, возвращающая копию строки с каждым n-ым символом в верхнем регистре
const makeItFunny = (string, num) => {
  let result = "";
  let i = 1;
  while (i <= string.length) {
    if (i % num === 0) {
      result = `${result}${string[i-1].toUpperCase()}`;
    } else {
      result = `${result}${string[i-1]}`;
    }
    i += 1;
  }
  return result;
};

const text = "I never look back";
console.log(makeItFunny(text, 3));
