

// function titleCase(str) {
//   var newArray = str.toLowerCase().split(' ');
//   var result = [];
//   for(var i=0; i < newArray.length ; i++){
//     var val = newArray[i];
//     result.push(val.replace(val[0], val[0].toUpperCase())) ;    
//   }
//   return result.join(" ");
// }


const titleCase = (str) => str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());


// function titleCase(str) {
//   let strArr = str.toLowerCase().split(' ')

//   let newString = strArr.map(word => {
//     console.log(word)
//     return word.replace(word[0], word[0].toUpperCase())
//   })
//   return newString.join(' ')
// }

titleCase("I'm a little tea pot");