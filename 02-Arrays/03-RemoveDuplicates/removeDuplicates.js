
let arr = [1, 1, 2, 2, 3, 4, 5]


// const removeDuplicates = (arr) => {
//   let newArr = [];
//   arr.map(num => {
//     if(!newArr.includes(num)) {
//       newArr.push(num)
//     }
//   })
//   return newArr
// }

// const removeDuplicates = (arr) => {
//   let newArr = [];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if(!newArr.includes(arr[i])){
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// function removeDuplicates(array) {
//   return array.filter((a, b) => array.indexOf(a) === b)
// };

function removeDuplicates(array) {
  array.splice(0, array.length, ...(new Set(array)))
};

removeDuplicates(arr)