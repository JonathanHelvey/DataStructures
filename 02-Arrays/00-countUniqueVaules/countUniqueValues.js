function countUniqueVaules(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) i++;
    arr[i] = arr[j];
    console.log(arr[j]);
  }
  return i + 1;
}

console.log(countUniqueVaules([1, 1, 1, 1, 2]));
