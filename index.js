// Функция, которая шифрует сообщение. При нечетном количестве символом в строке, последний символ не меняется
const encrypt = (message) => {
  let result = "";

  for (let i = 0; i < message.length; i += 1) {
    if (i % 2 === 0) {
      result = result + (message[i + 1] !== undefined ? message[i + 1] : message[ message.length - 1]);
    } else {
      result = result + message[i - 1];
    }
  }
  return result;
};

console.log(encrypt("move")); //'omev'
console.log(encrypt("attack")); //taatkc'
console.log(encrypt("car!")); // 'ac!r'
console.log(encrypt("go!")); // 'og!'
console.log(encrypt("carla")); // 'aclra!'
