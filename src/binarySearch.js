// const binarySearch = (array, key) => {
//   let leftIndex = 0;
//   let rightIndex = array.length - 1;

//   while (leftIndex <= rightIndex) {
//     const midIndex = Math.ceil((leftIndex + rightIndex) / 2);
//     if (array[midIndex] === key) {
//       return midIndex;
//     }
//     if (key > array[midIndex]) {
//       leftIndex = midIndex + 1;
//     } else {
//       rightIndex = midIndex - 1;
//     }
//   }
//   return -1;
// };

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearch(array, 7));
// console.log(binarySearch(array, 4));
// console.log(binarySearch(array, 10));

// Big O => O(logn)

const binarySearchRecursive = (array, key) => {
  return search(array, key, 0, array.length - 1);
};

const search = (array, key, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  const midIndex = Math.ceil((leftIndex + rightIndex) / 2);
  if (key === array[midIndex]) {
    return midIndex;
  }
  if (key < array[midIndex]) {
    search(array, key, leftIndex, midIndex - 1);
  } else {
    search(array, key, midIndex + 1, rightIndex);
  }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearchRecursive(array, 7));
console.log(binarySearchRecursive(array, 4));
console.log(binarySearchRecursive(array, 10));

// Big O => O(logn)
