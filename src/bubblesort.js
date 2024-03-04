const bubblesort = (arr) => {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
  return arr;
};

console.log(bubblesort([-2, 40, 22, 45, -10]));

// Big O => O(n^2)
