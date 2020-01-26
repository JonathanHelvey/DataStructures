// Code Wars
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]


// const  array_diff = (arrA, arrB) => {
//   let newArr = []
//   arrA.forEach(number1 => {
//     if(arrB.indexOf(number1) === -1) {
//       newArr.push(number1)
//     }
//   })
//   return newArr
// }

const  array_diff = (arrA, arrB) => {
  return arrA.filter((num) => {
    return arrB.indexOf(num) === -1
  })
}

// array_diff([1,2,2,2,3],[2]) // [1,3]
// array_diff([], [4,5])
//array_diff([1, 8, 2],[])
// array_diff([3,4], [3])
//array_diff([5,6,5,-18,-2,16,12,-18,7],[7,5,12,-18,-2,5,-18]) // [6, 16]
// array_diff([-8,-9,2,11,-1,-6,-3,-11,-12,-15,14,9,-15,8,-16,8,7,-11,-4],[-8,-12,-15])

