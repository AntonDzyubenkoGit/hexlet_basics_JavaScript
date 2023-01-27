// Функция для переворота цифр в числе
const reverseNum = (num) => {
  const string = String(Math.abs(num));

  let result = "";
  for (let i = 0; i < string.length; i++) {
    result = Number(`${string[i]}${result}`);
  }
  if (num >= 0) {
    return result;
  }
  return -result;
};

console.log(reverseNum(8900));
