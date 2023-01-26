const mySubstr = (string, length) => {
  let result = '';
  let i = 0;

  while(i < length) {
    result = `${result}${string[i]}`;
    i += 1;
  }
  return result;
};

const text = 'If I look back I am lost';
console.log(mySubstr(text, 1));
console.log(mySubstr(text, 7));
