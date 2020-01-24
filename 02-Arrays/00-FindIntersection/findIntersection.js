// Question:
// Write a function, FindIntersection, that reads an array of strings which will contain two elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a string of numbers that occur in both elements of the input array in sorted order. If there is no intersection, return the string “false”.
// For example: if the input array is [“1, 3, 4, 7, 15”, “1, 2, 4, 15, 21”] the output string should be “1, 4, 15” because those numbers appear in both strings (they are the common elements). The array given will not be empty, and each string inside the array will be of numbers sorted in ascending order and may contain negative numbers.
// Another example: if the input array is [“1, 3, 9, 10, 17, 18”, “1, 4, 9, 10”] the output string should be “1, 9, 10” because those numbers appear in both of the strings.

// const findIntersection = (arrayOfStrings) => {
//   const firstArray = arrayOfStrings[0].split(', ')
//   const secondArray = arrayOfStrings[1].split(', ')
//   const newArrayNumber = []
//   for(let i = 0; i <= firstArray.length; i++) {
//     let firstNumber = firstArray[i]
//     for(let j = 0; j <= secondArray.length; j++) {
//       let secondNumber = secondArray[j]
//       if(firstNumber === secondNumber) {
//         newArrayNumber.push(firstNumber)
//       } 
//     }
//   }
//   return newArrayNumber.join(', ')
// }

// const findIntersection = (arrayOfStrings) => {
//   const firstArray = arrayOfStrings[0].split(', ')
//   const secondArray = arrayOfStrings[1].split(', ')
//   const newArrayNumber = []

//   firstArray.forEach((arrayString) => {
//     console.log(arrayString)
//     const num1 = Number(arrayString)
//     secondArray.forEach((arrayString) => {
//       const num2 = Number(arrayString)
//       if(num1 === num2) {
//         newArrayNumber.push(num1)
//       }
//     })
//   })
//   return newArrayNumber.join(', ')
// }

const findIntersection = (arr) =>{
  const [arr1, arr2] = arr.map(arr => arr.split(", "))
  const matching = arr1.filter(item => arr2.includes(item))
  return matching.join(', ')
}

console.log(findIntersection(["1, 3, 4, 7, 15", "1, 2, 4, 15, 21"]))
// output should be “1, 4, 15”
