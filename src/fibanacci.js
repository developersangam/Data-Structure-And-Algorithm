// My way
// const getFibanacciSeries = (num) => {
//   let series = [0, 1];
//   if (num <= 2) {
//     return series;
//   }
//   for (let i = 0; i < num - 2; i++) {
//     let nextSeries = series[i] + series[i + 1];
//     series.push(nextSeries);
//   }
//   return series;
// };

// Another Way
const getFibanacciSeries = (num) => {
  let series = [0, 1];
  for (let i = 2; i < num; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
};
console.log(getFibanacciSeries(2));
console.log(getFibanacciSeries(4));
console.log(getFibanacciSeries(5));
console.log(getFibanacciSeries(10));

// Big O => O(n)
