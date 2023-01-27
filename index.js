// Javascript: Счастливый билет
const isHappyTicket = (str) => {
  let resultFirstHAlf = 0;
  let resultSecondHalf = 0;
  for (let i = 0; i < str.length / 2; i++) {
    resultFirstHAlf += Number(str[i]);
  }
  for (let j = str.length / 2; j < str.length; j++) {
    resultSecondHalf += Number(str[j]);
  }
  return resultFirstHAlf === resultSecondHalf;
};

console.log(isHappyTicket("23"));
