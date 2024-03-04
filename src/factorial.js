// My way with recursion
// const factorial = (num) => {
//   if (num === 1) {
//     return num;
//   }
//   return num * factorial(num - 1);
// };



// Another my way
const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
};

console.log(factorial(3));

// Big O - O(n)
