/* eslint-disable react/no-array-index-key */

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let current = arr2.indexOf(arr1[i] ** 2);

//     if (current === -1) {
//       return false;
//     }
//     arr2.splice(current, 1);
//   }
//   return true;
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};
  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  console.log(counter1);
  console.log(counter2);
  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter2[key ** 2] !== counter1[key]) return false;
  }
  return true;
}

same([1, 2, 3], [4, 1, 9]);

console.log(same([1, 2, 3], [4, 1, 9]));
