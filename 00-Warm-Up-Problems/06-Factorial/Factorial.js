
// const factorial = (num) => {
//     if(num < 0 ) {
//        return -1
//     } else if (num == 0) {
//         return 1
//     } else {
//        return num * factorial(num -1)
//     }
// };


const factorial = (num) => !(num > 1) ? 1 : factorial(num -1) * num;

module.exports = factorial;
console.log(factorial(4));