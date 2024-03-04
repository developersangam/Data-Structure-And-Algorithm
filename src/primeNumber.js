// My way
// const primeNumber = (num) => {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i <= num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// Big O => O(n)

//Another way
const primeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(primeNumber(4));
console.log(primeNumber(2));
console.log(primeNumber(5));

// Big O => O(sqrt(n))
