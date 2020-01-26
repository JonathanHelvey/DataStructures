/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3

*/

// Backwards Trianlge
// const triangle = num => {
//   let str = ''
//   for(let i = num; i > 0; i--) {
//     console.log('NUMBER-', i)
//     for(let j = 0; j < i; j++) {
//       console.log('WHAT', j)
//       str += '#'
//       // 
//     }
//     str += "\n"
//   }
//   console.log(str.slice(0, -1))
// }

const triangle = num => {
  let str = ''
  for(let i = 0; i < num; i++) {
    for(let j = 0; j < i; j++) {
      str += '#'
    }
    str += '\n'
  }
    console.log(str)
}

triangle(7)