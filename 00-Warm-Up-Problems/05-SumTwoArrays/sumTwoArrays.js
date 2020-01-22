// function arrayPlusArray(arr1, arr2) {
// //   return arr1 + arr2; //something went wrong
//   let sum1 = 0;
//   let sum2 = 0
//   for(let i = 0; i <= arr1.length - 1; i++) {
//    sum1 += arr1[i]
//   }
//   for(let j = 0; j <= arr2.length - 1; j++) {
//    sum2 += arr2[j] 
//   }
//   return sum1 + sum2
// }

// const arrayPlusArray = (arr1, arr2) => {
// //   return arr1 + arr2; //something went wrong
//  let sum1 = arr1.reduce((accum, item) => {
//     return accum + item
//   }, 0)
//  let sum2 = arr2.reduce((accum, item) => {
//     return accum + item
//   }, 0)
//   return sum1 + sum2
// }

// const arrayPlusArray = (...arrs) => {
// //   return arr1 + arr2; //something went wrong
// return [].concat(...arrs).reduce((accum, item) => {
//     return accum + item
//   }, 0)
// }

const arrayPlusArray = (arr1, arr2) => {
  //   return arr1 + arr2; //something went wrong
    return [...arr1, ...arr2].reduce((sum, value) => (sum + value), 0)
  }
  
  arrayPlusArray([1, 2, 3], [4, 5, 6])
  
  // should return 21