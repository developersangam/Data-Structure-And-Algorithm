const cartesianProduct = (arr1, arr2) => {
  const cartesianProductArray = [];
  for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      let tempArray = [];
      console.log(element, arr2[j]);
      tempArray.push(element);
      tempArray.push(arr2[j]);
      cartesianProductArray.push(tempArray);
    }
  }
  return cartesianProductArray;
};

console.log(cartesianProduct([1, 2], [3, 4]));
