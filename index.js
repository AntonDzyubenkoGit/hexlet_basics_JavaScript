const joinNumbersFromRange = (start, finish) => {
  let result = "";
  let i = start;

  while (i <= finish) {
    result = `${result}${String(i)}`;
    i += 1;
  }
  return result;
};

console.log(joinNumbersFromRange(2, 2));
console.log(joinNumbersFromRange(1, 5));
console.log(joinNumbersFromRange(10, 12));
