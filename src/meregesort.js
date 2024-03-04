const mergesort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergesort(leftArr), mergesort(rightArr));
};

const merge = (leftArray, rightArray) => {
  let sortedArray = [];
  console.log(leftArray,rightArray)
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] > rightArray[0]) {
      sortedArray.push(rightArray.shift());
    } else {
      sortedArray.push(leftArray.shift());
    }
  }
//   console.log([...sortedArray, ...leftArray, ...rightArray]);
  return [...sortedArray, ...leftArray, ...rightArray];
};

const arr = [2,10,5];
mergesort(arr);
