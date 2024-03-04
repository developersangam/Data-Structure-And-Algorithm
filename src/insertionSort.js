const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const numberToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numberToInsert) {
      arr[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] =  numberToInsert;
  }
  return array
};

const arr = [8, 20, -2, 4, -6];
console.log(insertionSort(arr));

// Big O => O(n^2)
