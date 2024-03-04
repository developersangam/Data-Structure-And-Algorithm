const climbStairCaseRecursive = (n) => {
  if (n <= 2) {
    return n;
  }
  return climbStairCaseRecursive(n - 1) + climbStairCaseRecursive(n - 2);
};

console.log(climbStairCaseRecursive(4));

const climbStairCase = (n) => {
  noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
  }
  return noOfWays[n - 1];
};

console.log(climbStairCase(2));
console.log(climbStairCase(4));
