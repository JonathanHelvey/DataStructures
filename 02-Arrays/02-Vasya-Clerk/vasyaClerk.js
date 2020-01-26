//TODO: FIX: MY 3 solutions.  However,  They do not pass all test.  Wrong Answers!!!

// const tickets = (peopleInLine) => {
//   let fiftyDollarBills = 0;
//   const money = peopleInLine.reduce((sumOfRegister, person) => {
//     if(person === 25) {
//     sumOfRegister++
//     }
//     if(person === 50) {
//       sumOfRegister -= 1
//       fiftyDollarBills++
//     }
//     if(person === 100) {
//       if(fiftyDollarBills === 0 && sumOfRegister >=3) {
//         sumOfRegister -= 3
//       } else {
//         sumOfRegister--
//         fiftyDollarBills--
//       }
//     }
//     return sumOfRegister
//   }, 0)
//   return money < 0 ? 'NO' : 'YES'
// }

const tickets = (peopleInLine) => {
  let amount25 = 0;
  let amount50 = 0; 
  peopleInLine.forEach(person => {
    if(person === 100) {
       if(amount50 == 0 && amount25 >= 3){
        amount25 -= 3;
      } else {
        amount25--; 
        amount50--;
      } 
    }
    if(person === 50) {
      if(amount25 >= 1) {
        amount25--
        amount50++
      } 
    }
    if(person === 25) {
      amount25++
    }
  })
  if(amount25 < 0 || amount50 < 0) {
    return 'NO'
  }
  return 'YES'
}

// function tickets(peopleInLine){
//   let amount25 = 0;
//   let amount50 = 0;
//   let amount100 = 0;

//   for(let i = 0; i < peopleInLine.length; i++){

//     if(peopleInLine[i] === 100){
//       if(amount25 >= 3){
//         amount25 -= 3;
//         amount100++;
//       }else if(amount25 >= 1 && amount50 >= 1){
//        amount25 -= 1;
//        amount50 -= 1;
//        amount100++;
//       }else{
//         return "NO";
//       }
//     }

//     if(peopleInLine[i] === 50){
//       if(amount25 >= 1){
//         amount25--;
//         amount50++;
//       } else {
//        return "NO";
//       }
//     }

//     if(peopleInLine[i] === 25){
//       amount25++;
//     }
//   }
//   return "YES";
// }
// tickets([25, 25, 50, 50])
// tickets([25, 100])
tickets([25,25,50,100,25,50,25,100,25,25,25,100,25,25,25,100,50,25]) //NO