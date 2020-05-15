

function vowelsAndConsonants(s) {
  let vowles = ['a', 'e', 'i', 'o', 'u']
  for(let i = 0; i <= s.length - 1; i++) {
      let currentLetter = s[i]
      if(vowles.includes(currentLetter))
      console.log(currentLetter)
  }
  for(let i = 0; i <= s.length - 1; i++) {
      let currentLetter = s[i]
      if(!vowles.includes(currentLetter))
      console.log(currentLetter)
  }
}
