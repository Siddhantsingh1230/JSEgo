const generateBinary = (num) => {
  return Number(num).toString(2);
};


console.log(generateBinary(2)); // 10
console.log(generateBinary("2")); // 10
console.log(generateBinary(4)); // 100