

// const waysToUseTickets = (array) => {
//   let combos = []
//   if(array.length < 2) {
//     combos.length = 0
//   }

//   for(let i = 0; i <= array.length; i++) {
//     for(let j = i + 1; j <= array.length - 1; j++) {
//       for(let k = j + 1; k <= array.length - 1; k++) {
//         combos.push([array[i], array[j], array[k]])
//       }
//     }
//   }
//   combos = Array.from(new Set(combos.map(JSON.stringify)), JSON.parse)
//   return combos.length
// }


//////////////////////////////

// THIS BOTTOM ONE IS NOT RIGHT!

const waysToUseTickets = (array) => {
  array.sort((a, b) => a - b)
  let combos = []
  let left;
  let right;

  for (let i = 0; i <= array.length - 1; i++) {
    left = i + 1
    right = array.length - 1
    while(left < right) {
      left++
      right--
      combos.push([array[i], array[left], array[right]])
    }
  }
  combos = Array.from(new Set(combos.map(JSON.stringify)), JSON.parse)
  return combos.length
}

console.log(waysToUseTickets([2, 2, 2, 2]))
