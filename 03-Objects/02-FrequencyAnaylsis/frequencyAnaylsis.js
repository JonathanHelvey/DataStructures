/* eslint-disable react/no-array-index-key */

const frequencyAnalysis = str => {
  let objLet = {};

  for (let i = 0; i <= str.length; i++) {
    let curChar = str[i];
    if (objLet[curChar]) {
      objLet[curChar] += 1;
    } else {
      objLet[curChar] = 1;
    }
  }
  return objLet;
};

module.exports = frequencyAnalysis;
// console.log(frequencyAnalsis('abcd'));
