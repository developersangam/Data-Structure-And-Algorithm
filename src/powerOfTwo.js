// My Way
const isPowerOfTwo = (n) => {
  if (n < 2) {
    return false;
  }
  while (n > 2) {
    if (n % 2 != 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(10));
console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(64));

// Big O => O(log(n))

const isPowerOfTwoBitwise = (n) => {
  if (n < 2) {
    return false;
  }
  return (n & (n - 1)) === 0;
};


