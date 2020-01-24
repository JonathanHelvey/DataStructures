/* eslint-disable react/no-array-index-key */

function findIndex(needle, haystack) {
  let nIndex = 0;
  for (let i = nIndex; i < haystack.length; i++) {
    let current = haystack.slice(i, i + needle.length);
    if (current === needle) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex("or", "hello world"));
