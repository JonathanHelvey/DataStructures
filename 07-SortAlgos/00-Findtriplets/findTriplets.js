// Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. If there is such a triplet present in array, then print the triplet and return true. Else return false. For example, if the given array is {12, 3, 4, 1, 6, 9} and given sum is 24, then there is a triplet (12, 3 and 9) present in array whose sum is 24

// const triplet = (array, sum) => {
//   for (let i = 0; i <= array.length - 1; i++) {
//     let one = array[i]
//     for(let j = 1; j <= array.length - 1; j++) {
//       let two = array[j]
//       for(let k = 2; k <= array.length - 1; k++) {
//         let three = array[k]
//         if(one + two + three === sum) {
//           return true;
//         }
//       }
//     }
//   }
//     return false;
// }


const triplet = (array, sum) => {
  let sortedArray = array.sort((a, b) => a - b)
  let left;
  let right;

  for (let i = 0; i <= array.length; i++) {
    left = i + 1
    right = array.length - 1
    while(left < right) {
      if(array[i] + array[left] + array[right] === sum) {
        return true;
      } else if (array[i] + array[left] + array[right] < sum) {
        left++
      } else {
        right--
      }
    }
  }
    return false
}

console.log(triplet([12, 3, 4, 1, 1, 1], 24))