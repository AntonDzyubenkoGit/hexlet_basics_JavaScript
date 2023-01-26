// Функция для проверки имени сайта на наличие https://
const normalizeUrl = (site) => (site.startsWith('https://') ? site : `https://${site}`);
console.log(normalizeUrl("google.com"));
console.log(normalizeUrl("https://ai.fi"));


// Функция для определения модуля числа
const abs = (num) => (num >= 0 ? num : -num);
console.log(abs(10));
console.log(abs(-10));


// Функция реверса строки
const reverse = (s) => s.split("").reverse().join("");


// Тернарный однострочник, определяющий заглавность первого знака в строке. Возвращает пустую строку, строку с первой заглавной буквой или перевернутый текст
const convertText = (string) => (string === "" || string[0] === string[0].toUpperCase()) ? string : reverse(string);
console.log(convertText("Hello"));
console.log(convertText("hello"));
console.log(convertText(""));


// If-else-функция, определяющая заглавность первого знака в строке. Возвращает пустую строку, строку с первой заглавной буквой или перевернутый текст
const convertTextClassic = (string) => {
  if (string === "" || string[0] === string[0].toUpperCase()) {
    return string;
  } else {
    return reverse(string);
  }
};
console.log(convertTextClassic("Hello"));
console.log(convertTextClassic("hello"));
console.log(convertTextClassic(""));
