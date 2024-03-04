const search = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
};

let array = [1,2,3,4,5,6,7,8]
console.log(search(array,9))
console.log(search(array,4))
console.log(search(array,5))

// Big O => O(n)
