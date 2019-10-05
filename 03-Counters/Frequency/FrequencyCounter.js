function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let current = arr2.indexOf(arr1[i] ** 2);

    if (current === -1) {
      return false;
    }
    arr2.splice(current, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
