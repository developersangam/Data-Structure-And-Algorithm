const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < arr.length-1; i++) {
    if (pivot > arr[i]) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  return [...quicksort(leftArray), pivot, ...quicksort(rightArray)];
};

const arr = [-1, 5, 10, 6, -20];

console.log(quicksort(arr));

// Big O => Big(n^2)
