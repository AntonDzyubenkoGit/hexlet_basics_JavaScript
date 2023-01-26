//Функция находит сколько раз знак содержится в строке
const countChars_base = (string, char) => {
  let result = "";
  let i = 0;
  while (i < string.length) {
    if (string[i] === char) {
      result = result + char;
    }
    i = i + 1;
  }
  return result.length;
};

//console.log(countChars_base("Fear cuts deeper than swords.", "f"));

//Функция находит сколько раз знак содержится в строке без привязки к регистру

const countChars = (string, char) => {
  let result = 0;
  let i = 0;

  while (i < string.length) {
    if (string[i].toLowerCase() === char.toLowerCase()) {
      result = result + 1;
    }
    i = i + 1;
  }
  return result;
};

console.log(countChars('axe', 'a'));
console.log(countChars('', 'a'));
console.log(countChars('OpPa', 'p'));
console.log(countChars('OpPa', 'P'));
